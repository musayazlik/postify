'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
	LayoutDashboard,
	FileText,
	Settings,
	LogOut,
	X,
	Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SidebarProps {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
	const pathname = usePathname();
	const { logout } = useAuth();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			const mobile = window.innerWidth < 1024;
			setIsMobile(mobile);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const navItems = [
		{
			title: 'Overview',
			href: '/dashboard',
			icon: LayoutDashboard,
		},
		{
			title: 'Posts',
			href: '/dashboard/posts',
			icon: FileText,
		},
		{
			title: 'Settings',
			href: '/dashboard/settings',
			icon: Settings,
		},
	];

	const sidebarContent = (
		<div className="flex flex-col h-full bg-background/95 backdrop-blur-md shadow-xl lg:shadow-none">
			<div className="flex items-center justify-between h-16 px-6 border-b border-border/40">
				<Link href="/" className="flex items-center gap-2 group">
					<div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
						<Sparkles className="w-4 h-4 text-white" />
					</div>
					<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
						Postify
					</span>
				</Link>
				{isMobile && (
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(false)}
						className="lg:hidden"
					>
						<X className="h-5 w-5" />
					</Button>
				)}
			</div>

			<div className="flex-1 overflow-y-auto py-6 px-3">
				<div className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
					Menu
				</div>
				<nav className="space-y-1">
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link key={item.href} href={item.href}>
								<span
									className={cn(
										'group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
										isActive
											? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm'
											: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
									)}
								>
									<item.icon
										className={cn(
											'h-4 w-4 transition-colors',
											isActive
												? 'text-indigo-600 dark:text-indigo-400'
												: 'text-muted-foreground group-hover:text-foreground'
										)}
									/>
									{item.title}
									{isActive && (
										<motion.div
											layoutId="active-nav"
											className="absolute left-0 w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-r-full"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										/>
									)}
								</span>
							</Link>
						);
					})}
				</nav>
			</div>

			<div className="p-4 border-t border-border/40">
				<Button
					variant="ghost"
					className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors group"
					onClick={() => logout()}
				>
					<LogOut className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
					Logout
				</Button>
			</div>
		</div>
	);

	return (
		<>
			{/* Desktop Sidebar */}
			<motion.div
				className="hidden lg:block h-full relative z-40 border-r border-border/40"
				initial={{ width: isOpen ? 288 : 0, opacity: isOpen ? 1 : 0 }}
				animate={{ width: isOpen ? 288 : 0, opacity: isOpen ? 1 : 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ overflow: 'hidden' }}
			>
				<div className="w-72 h-full">
					{sidebarContent}
				</div>
			</motion.div>

			{/* Mobile Sidebar Overlay */}
			<AnimatePresence>
				{isOpen && isMobile && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
						/>
						<motion.div
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
							className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden"
						>
							{sidebarContent}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
