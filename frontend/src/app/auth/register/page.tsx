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

			if (user) {
				setUser(user);
			}

			toast.success('Registration successful! Please check your email for verification code.');
			router.push('/auth/verify');
		} catch (error: unknown) {
			toast.error(error instanceof Error ? error.message : 'Registration failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create an account</CardTitle>
					<CardDescription className="text-center text-gray-500 dark:text-gray-400">
						Enter your details below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
							<Input
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								required
								value={formData.name}
								onChange={handleChange}
								className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
								value={formData.email}
								onChange={handleChange}
								className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								required
								value={formData.password}
								onChange={handleChange}
								className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password_confirmation" className="text-gray-700 dark:text-gray-300">Confirm Password</Label>
							<Input
								id="password_confirmation"
								name="password_confirmation"
								type="password"
								required
								value={formData.password_confirmation}
								onChange={handleChange}
								className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
							/>
						</div>
						<Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700" disabled={loading}>
							{loading ? 'Creating account...' : 'Sign up'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						Already have an account?{' '}
						<Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
							Sign in
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
