'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function ResetPasswordForm() {
	const searchParams = useSearchParams();
	const [formData, setFormData] = useState({
		email: searchParams.get('email') || '',
		code: '',
		password: '',
		password_confirmation: '',
	});
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await api.post('/reset-password', formData);
			toast.success('Password reset successfully! Please login.');
			router.push('/auth/login');
		} catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
			toast.error(error.response?.data?.message || 'Password reset failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Set new password</CardTitle>
					<CardDescription className="text-center">
						Enter your new password below.
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
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="code">Reset Code</Label>
							<Input
								id="code"
								name="code"
								type="text"
								placeholder="123456"
								required
								value={formData.code}
								onChange={handleChange}
								className="tracking-widest text-center"
								maxLength={6}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">New Password</Label>
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
							<Label htmlFor="password_confirmation">Confirm New Password</Label>
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
							{loading ? 'Resetting...' : 'Reset Password'}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

export default function ResetPasswordPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ResetPasswordForm />
		</Suspense>
	);
}
