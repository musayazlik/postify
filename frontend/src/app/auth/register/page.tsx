'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	});
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { setUser } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch('/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Registration failed');
			}

			const { user } = data;

			// Ideally login the user immediately, or just redirect to verify
			// If backend requires verification before login, user might be null or restricted
			// But since we have the token in cookie now, we are "logged in" as far as the API is concerned
			if (user) {
				setUser(user);
			}

			toast.success('Registration successful! Please check your email for verification code.');
			router.push('/auth/verify');
		} catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
			toast.error(error.message || 'Registration failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
					<CardDescription className="text-center">
						Enter your details below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<Input
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								required
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								required
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password_confirmation">Confirm Password</Label>
							<Input
								id="password_confirmation"
								name="password_confirmation"
								type="password"
								required
								value={formData.password_confirmation}
								onChange={handleChange}
							/>
						</div>
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? 'Creating account...' : 'Sign up'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-gray-500">
						Already have an account?{' '}
						<Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Sign in
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
