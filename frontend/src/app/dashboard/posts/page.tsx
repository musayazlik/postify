'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus, Eye, MoreHorizontal, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function PostsPage() {
	const posts = [
		{
			id: 1,
			title: 'Getting Started with Next.js 16',
			status: 'Published',
			views: 1234,
			date: '2024-02-20',
			category: 'Development'
		},
		{
			id: 2,
			title: 'The Future of Web Development',
			status: 'Draft',
			views: 0,
			date: '2024-02-19',
			category: 'Tech'
		},
		{
			id: 3,
			title: 'Understanding Tailwind CSS v4',
			status: 'Published',
			views: 856,
			date: '2024-02-18',
			category: 'Design'
		},
		{
			id: 4,
			title: 'Mastering React Server Components',
			status: 'Review',
			views: 120,
			date: '2024-02-15',
			category: 'Development'
		},
		{
			id: 5,
			title: 'Building Scalable APIs with Laravel 11',
			status: 'Published',
			views: 2341,
			date: '2024-02-10',
			category: 'Backend'
		}
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-8"
		>
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Posts</h1>
					<p className="text-muted-foreground mt-1">
						Manage your blog posts and content.
					</p>
				</div>
				<Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40">
					<Plus className="mr-2 h-4 w-4" /> Create Post
				</Button>
			</div>

			<Card className="border-border/50 shadow-sm overflow-hidden">
				<CardHeader className="border-b border-border/40 bg-muted/20">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="space-y-1">
							<CardTitle>All Posts</CardTitle>
							<CardDescription>
								A list of your recent posts and their current status.
							</CardDescription>
						</div>
						<div className="flex items-center gap-2 w-full sm:w-auto">
							<div className="relative w-full sm:w-64">
								<Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input placeholder="Search posts..." className="pl-9 bg-background/50 border-border/50 focus:bg-background transition-all" />
							</div>
							<Button variant="outline" size="icon" className="shrink-0">
								<Filter className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<Table>
						<TableHeader>
							<TableRow className="hover:bg-muted/50 border-border/40">
								<TableHead className="w-[300px]">Title</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Views</TableHead>
								<TableHead>Date</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{posts.map((post) => (
								<TableRow key={post.id} className="hover:bg-muted/30 border-border/40 transition-colors">
									<TableCell className="font-medium">
										<div className="flex flex-col">
											<span className="font-semibold text-foreground">{post.title}</span>
											<span className="text-xs text-muted-foreground sm:hidden">
												{post.category} • {post.date}
											</span>
										</div>
									</TableCell>
									<TableCell>
										<Badge variant="outline" className="font-normal bg-muted/50 border-border/50">
											{post.category}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge
											variant={
												post.status === 'Published'
													? 'default'
													: post.status === 'Draft'
														? 'secondary'
														: 'outline'
											}
											className={
												post.status === 'Published'
													? 'bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
													: post.status === 'Draft'
														? 'bg-gray-100 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700'
														: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
											}
										>
											{post.status}
										</Badge>
									</TableCell>
									<TableCell className="text-muted-foreground font-mono text-sm">{post.views.toLocaleString()}</TableCell>
									<TableCell className="text-muted-foreground text-sm">{post.date}</TableCell>
									<TableCell className="text-right">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
													<MoreHorizontal className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem className="cursor-pointer">
													<Eye className="mr-2 h-4 w-4" /> View
												</DropdownMenuItem>
												<DropdownMenuItem className="cursor-pointer">
													<Edit className="mr-2 h-4 w-4" /> Edit
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/30 cursor-pointer">
													<Trash2 className="mr-2 h-4 w-4" /> Delete
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</motion.div>
	);
}
