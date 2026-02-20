'use client';

import { Menu, Search, Bell, Sun, Moon, Laptop, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

interface HeaderProps {
	onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
	const { user, logout } = useAuth();
	const { theme, setTheme } = useTheme();

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="sticky top-0 z-40 flex items-center justify-between h-16 px-6 bg-background/80 backdrop-blur-md border-b border-border/40"
		>
			<div className="flex items-center gap-4">
				<Button
					variant="ghost"
					size="icon"
					onClick={onMenuClick}
					className="mr-2 md:mr-4 hover:bg-muted/50"
				>
					<Menu className="h-6 w-6" />
				</Button>
				<div className="relative hidden md:flex items-center group">
					<Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
					<Input
						type="search"
						placeholder="Search anything..."
						className="w-72 pl-9 bg-muted/50 border-transparent focus:bg-background focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
					/>
					<div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
						<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">⌘</span>K
						</kbd>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 sm:gap-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-colors">
							<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							<Sun className="mr-2 h-4 w-4" />
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							<Moon className="mr-2 h-4 w-4" />
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							<Laptop className="mr-2 h-4 w-4" />
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<Button variant="ghost" size="icon" className="relative hover:bg-accent hover:text-accent-foreground transition-colors">
					<Bell className="h-5 w-5" />
					<span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-background animate-pulse" />
				</Button>

				<div className="h-8 w-[1px] bg-border/60 mx-1 hidden sm:block" />

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-indigo-500/20 transition-all">
							<Avatar className="h-9 w-9 border border-border/50">
								<AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} alt={user?.name || ''} />
								<AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
									{user?.name?.charAt(0) || 'U'}
								</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">{user?.name}</p>
								<p className="text-xs leading-none text-muted-foreground">
									{user?.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/30 cursor-pointer" onClick={() => logout()}>
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</motion.header>
	);
}
