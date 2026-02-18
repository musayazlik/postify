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

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await api.post('/forgot-password', { email });
			toast.success('Reset code sent to your email!');
			router.push(`/auth/reset-password?email=${encodeURIComponent(email)}`);
		} catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
			toast.error(error.response?.data?.message || 'Failed to send reset code');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Reset your password</CardTitle>
					<CardDescription className="text-center">
						Enter your email address and we&apos;ll send you a code to reset your password.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email address</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? 'Sending code...' : 'Send Reset Code'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-gray-500">
						Remember your password?{' '}
						<Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Sign in
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
