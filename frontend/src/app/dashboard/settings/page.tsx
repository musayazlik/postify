'use client';

import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Camera, User, Lock, Mail, Save, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
	const { user } = useAuth();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-8 max-w-5xl"
		>
			<div>
				<h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage your account settings and preferences.
				</p>
			</div>

			<Tabs defaultValue="profile" className="w-full">
				<TabsList className="grid w-full grid-cols-2 max-w-[400px]">
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>

				<TabsContent value="profile" className="space-y-6 mt-6">
					<Card className="border-border/50 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-3">
								<div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
									<User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
								</div>
								<div>
									<CardTitle>Profile Information</CardTitle>
									<CardDescription>
										Update your public profile details.
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-8">
							<div className="flex flex-col sm:flex-row items-center gap-6">
								<div className="relative group cursor-pointer">
									<Avatar className="h-24 w-24 border-4 border-background ring-2 ring-border/50 transition-all group-hover:ring-indigo-500/50">
										<AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} />
										<AvatarFallback className="text-2xl">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
									</Avatar>
									<div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<Camera className="h-6 w-6 text-white" />
									</div>
								</div>
								<div className="space-y-1 text-center sm:text-left">
									<h3 className="font-medium">Profile Picture</h3>
									<p className="text-sm text-muted-foreground">
										PNG, JPG or GIF. Max 2MB.
									</p>
									<Button variant="outline" size="sm" className="mt-2">Upload new image</Button>
								</div>
							</div>

							<Separator />

							<div className="grid gap-6 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name">Display Name</Label>
									<div className="relative">
										<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input id="name" defaultValue={user?.name} className="pl-9" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input id="email" defaultValue={user?.email} disabled className="pl-9 bg-muted/50" />
									</div>
								</div>
								<div className="space-y-2 md:col-span-2">
									<Label htmlFor="bio">Bio</Label>
									<textarea
										id="bio"
										className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="Tell us a little bit about yourself"
									/>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end border-t border-border/40 p-6 bg-muted/20">
							<Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20">
								<Save className="mr-2 h-4 w-4" /> Save Changes
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="security" className="space-y-6 mt-6">
					<Card className="border-border/50 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-3">
								<div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-lg">
									<Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
								</div>
								<div>
									<CardTitle>Security Settings</CardTitle>
									<CardDescription>
										Manage your password and account security.
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="current-password">Current Password</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input id="current-password" type="password" className="pl-9" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="new-password">New Password</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input id="new-password" type="password" className="pl-9" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="confirm-password">Confirm New Password</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<Input id="confirm-password" type="password" className="pl-9" />
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end border-t border-border/40 p-6 bg-muted/20">
							<Button variant="destructive" className="shadow-lg shadow-red-500/20">
								Update Password
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</motion.div>
	);
}
