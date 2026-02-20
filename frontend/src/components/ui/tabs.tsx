"use client"

import * as React from "react"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
	activeTab: string
	setActiveTab: (value: string) => void
} | null>(null)

const Tabs = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { defaultValue: string }
>(({ className, defaultValue, children, ...props }, ref) => {
	const [activeTab, setActiveTab] = React.useState(defaultValue)

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div
				ref={ref}
				className={cn("w-full", className)}
				{...props}
			>
				{children}
			</div>
		</TabsContext.Provider>
	)
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
			className
		)}
		{...props}
	/>
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
	const context = React.useContext(TabsContext)
	if (!context) throw new Error("TabsTrigger must be used within Tabs")

	const isActive = context.activeTab === value

	return (
		<button
			ref={ref}
			type="button"
			onClick={() => context.setActiveTab(value)}
			className={cn(
				"relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				isActive
					? "text-foreground shadow-sm"
					: "hover:bg-background/50 hover:text-foreground",
				className
			)}
			{...props}
		>
			{isActive && (
				<motion.div
					layoutId="active-tab"
					className="absolute inset-0 bg-background rounded-sm shadow-sm -z-10"
					initial={false}
					transition={{ type: "spring", stiffness: 500, damping: 30 }}
				/>
			)}
			<span className="relative z-10">{children}</span>
		</button>
	)
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
	HTMLDivElement,
	HTMLMotionProps<"div"> & { value: string }
>(({ className, value, children, ...props }, ref) => {
	const context = React.useContext(TabsContext)
	if (!context) throw new Error("TabsContent must be used within Tabs")

	if (context.activeTab !== value) return null

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				className
			)}
			{...props}
		>
			{children}
		</motion.div>
	)
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
