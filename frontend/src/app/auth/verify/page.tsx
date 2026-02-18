'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';

export default function VerifyPage() {
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { refreshUser } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await api.post('/verify-email', { code });
			await refreshUser();
			toast.success('Email verified successfully!');
			router.push('/dashboard');
		} catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
			toast.error(error.response?.data?.message || 'Verification failed');
		} finally {
			setLoading(false);
		}
	};

	const handleResend = async () => {
		try {
			await api.post('/resend-verification-code');
      toast.success('Verification code resent!');
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      toast.error(error.response?.data?.message || 'Failed to resend code');
    }
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Verify your email</CardTitle>
					<CardDescription className="text-center">
						We sent a verification code to your email address.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="code">Verification Code</Label>
							<Input
								id="code"
								name="code"
								type="text"
								required
								value={code}
								onChange={(e) => setCode(e.target.value)}
								className="tracking-widest text-center text-lg"
								placeholder="123456"
								maxLength={6}
							/>
						</div>
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? 'Verifying...' : 'Verify Email'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Button
						variant="link"
						onClick={handleResend}
						className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Resend verification code
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
