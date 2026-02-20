'use client';

import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, BarChart, Users, DollarSign } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ModeToggle } from '@/components/mode-toggle';

export default function DashboardPage() {
	const { user, isLoading, logout } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !user) {
			router.push('/auth/login');
		}
	}, [isLoading, user, router]);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
			</div>
		);
	}

	if (!user) {
		return null;
	}

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-950">
			<nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<span className="text-2xl font-bold text-indigo-600">Postify</span>
						</div>
						<div className="flex items-center space-x-4">
							<ModeToggle />
							<div className="flex items-center space-x-2">
								<div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2">
									<Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
								</div>
								<span className="text-gray-700 dark:text-gray-300 font-medium">{user.name}</span>
							</div>
							<Button variant="outline" onClick={() => logout()}>
								Logout
							</Button>
						</div>
					</div>
				</div>
			</nav>

			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				{/* Welcome Section */}
				<div className="px-4 sm:px-0 mb-8">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Welcome back, {user.name}! Here&apos;s what&apos;s happening with your account.
					</p>
				</div>

				{/* Statistics Grid */}
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0 mb-8">
					<Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</CardTitle>
							<Activity className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
							<p className="text-xs text-muted-foreground">+20.1% from last month</p>
						</CardContent>
					</Card>
					<Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Followers</CardTitle>
							<Users className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-gray-900 dark:text-white">+2350</div>
							<p className="text-xs text-muted-foreground">+180.1% from last month</p>
						</CardContent>
					</Card>
					<Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Engagement</CardTitle>
							<BarChart className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-gray-900 dark:text-white">+12,234</div>
							<p className="text-xs text-muted-foreground">+19% from last month</p>
						</CardContent>
					</Card>
					<Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-gray-900 dark:text-white">$45,231.89</div>
							<p className="text-xs text-muted-foreground">+20.1% from last month</p>
						</CardContent>
					</Card>
				</div>

				{/* Recent Activity & Profile */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 px-4 sm:px-0">

					{/* Recent Activity */}
					<div className="lg:col-span-2">
						<Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
							<CardHeader>
								<CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
								<CardDescription className="text-gray-500 dark:text-gray-400">You have 3 new notifications today.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-8">
									<div className="flex items-center">
										<div className="space-y-1">
											<p className="text-sm font-medium leading-none text-gray-900 dark:text-white">New follower</p>
											<p className="text-sm text-muted-foreground">
												User @johndoe started following you.
											</p>
										</div>
										<div className="ml-auto font-medium text-sm text-gray-500 dark:text-gray-400">2 min ago</div>
									</div>
									<div className="flex items-center">
										<div className="space-y-1">
											<p className="text-sm font-medium leading-none text-gray-900 dark:text-white">Post published</p>
											<p className="text-sm text-muted-foreground">
												Your post &quot;Top 10 Marketing Tips&quot; is now live.
											</p>
										</div>
										<div className="ml-auto font-medium text-sm text-gray-500 dark:text-gray-400">1 hour ago</div>
									</div>
									<div className="flex items-center">
										<div className="space-y-1">
											<p className="text-sm font-medium leading-none text-gray-900 dark:text-white">Subscription renewed</p>
											<p className="text-sm text-muted-foreground">
												Your monthly subscription has been successfully renewed.
											</p>
										</div>
										<div className="ml-auto font-medium text-sm text-gray-500 dark:text-gray-400">5 hours ago</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Profile Details */}
					<div>
						<Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
							<CardHeader>
								<CardTitle className="text-gray-900 dark:text-white">Profile Details</CardTitle>
								<CardDescription className="text-gray-500 dark:text-gray-400">Manage your account information.</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-1">
									<label className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</label>
									<p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
								</div>
								<div className="space-y-1">
									<label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
									<p className="text-sm font-semibold text-gray-900 dark:text-white">{user.email}</p>
								</div>
								<div className="space-y-1">
									<label className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Status</label>
									<div className="flex items-center space-x-2">
										<span className={`h-2.5 w-2.5 rounded-full ${user.email_verified_at ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
										<p className="text-sm font-semibold text-gray-900 dark:text-white">
											{user.email_verified_at ? 'Verified' : 'Pending Verification'}
										</p>
									</div>
								</div>
								<div className="pt-4">
									<Button variant="outline" className="w-full">Edit Profile</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
