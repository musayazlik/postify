'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BarChart, Users, Monitor } from "lucide-react";

export function FeaturesSection() {
	const features = [
		{
			title: "Smart Scheduling",
			description: "Plan your content ahead of time and let Postify handle the posting schedule for maximum engagement.",
			icon: <Calendar className="h-8 w-8 text-indigo-500" />,
			className: "md:col-span-1 lg:col-span-2 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900 hover:from-indigo-100 dark:hover:from-indigo-950/50 transition-colors duration-300",
		},
		{
			title: "Analytics Dashboard",
			description: "Get detailed insights into your audience growth and engagement metrics.",
			icon: <BarChart className="h-8 w-8 text-purple-500" />,
			className: "md:col-span-1 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 hover:from-purple-100 dark:hover:from-purple-950/50 transition-colors duration-300",
		},
		{
			title: "Team Collaboration",
			description: "Work seamlessly with your team. Assign roles, review drafts, and approve content together.",
			icon: <Users className="h-8 w-8 text-pink-500" />,
			className: "md:col-span-1 bg-gradient-to-br from-pink-50 to-white dark:from-pink-950/30 dark:to-gray-900 hover:from-pink-100 dark:hover:from-pink-950/50 transition-colors duration-300",
		},
		{
			title: "Multi-Platform Support",
			description: "Manage Facebook, Instagram, Twitter, LinkedIn, and more from a single dashboard.",
			icon: <Monitor className="h-8 w-8 text-blue-500" />,
			className: "md:col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 hover:from-blue-100 dark:hover:from-blue-950/50 transition-colors duration-300",
		},
	];

	return (
		<section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
						Everything You Need
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
						Powerful features designed to streamline your social media workflow.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
					{features.map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1, duration: 0.5 }}
							className={cn(
								"group relative overflow-hidden rounded-3xl border bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border-gray-200 dark:border-gray-700",
								feature.className
							)}
						>
							<div className="p-6 flex flex-col h-full justify-between">
								<div className="mb-4 p-3 bg-white/50 dark:bg-gray-700/50 w-fit rounded-2xl shadow-sm backdrop-blur-sm border border-white/20 dark:border-gray-600/20">
									{feature.icon}
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
										{feature.title}
									</h3>
									<p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
