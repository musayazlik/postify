'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at: string | null;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	login: (user: User) => void;
	logout: () => Promise<void>;
	setUser: (user: User) => void;
	refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	const checkAuth = async () => {
		try {
			// Call our Next.js API route which proxies to the backend with the cookie
			const response = await fetch('/api/auth/me');
			if (response.ok) {
				const userData = await response.json();
				setUser(userData);
			} else {
				setUser(null);
			}
		} catch (error) {
			console.error('Auth check failed', error);
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	const login = (user: User) => {
		setUser(user);
		router.push('/dashboard');
	};

	const logout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
		} catch (error) {
			console.error('Logout failed', error);
		}
		setUser(null);
		router.push('/auth/login');
	};

	return (
		<AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, setUser, refreshUser: checkAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
