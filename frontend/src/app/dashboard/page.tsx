'use client';

import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart, Users, FileText, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { user } = useAuth();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  if (!user) return null;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, <span className="font-semibold text-foreground">{user.name}</span>! Here&apos;s your daily summary.
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" size="sm">Download Report</Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">Create Post</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={item}>
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-24 h-24 -mr-4 -mt-4 rotate-12" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
              <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
                <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-medium">+14%</span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={item}>
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-24 h-24 -mr-4 -mt-4 rotate-12" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg">
                <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-medium">+20.1%</span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300 group">
             <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-24 h-24 -mr-4 -mt-4 rotate-12" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Followers</CardTitle>
              <div className="p-2 bg-pink-50 dark:bg-pink-500/10 rounded-lg">
                <Users className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span className="font-medium">+180.1%</span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart className="w-24 h-24 -mr-4 -mt-4 rotate-12" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
              <div className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-lg">
                 <BarChart className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.2%</div>
              <div className="flex items-center text-xs text-red-600 dark:text-red-400 mt-1">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span className="font-medium">-1.2%</span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={item} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                <p className="text-sm text-muted-foreground">You have 3 unread notifications today.</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start group">
                  <div className="relative mt-1">
                     <div className="h-9 w-9 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mr-4 border border-indigo-100 dark:border-indigo-500/20 group-hover:scale-110 transition-transform duration-200">
                        <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                     </div>
                     {i !== 5 && <div className="absolute left-[18px] top-10 w-[1px] h-full bg-border/40" />}
                  </div>
                  <div className="ml-2 space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        New post published
                        </p>
                        <span className="text-xs text-muted-foreground">2 min ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      "How to build a dashboard with Next.js 16 and Tailwind CSS v4" has been successfully published.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 border-border/50 shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            <p className="text-sm text-muted-foreground">Common tasks you perform often.</p>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-3">
               <div className="p-4 border border-border/40 rounded-xl hover:bg-accent/50 cursor-pointer transition-all duration-200 group hover:border-indigo-500/30 hover:shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                        <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Write a new post</h3>
                 </div>
                 <p className="text-xs text-muted-foreground pl-[52px]">Start writing your next big story with our AI editor.</p>
               </div>
               
               <div className="p-4 border border-border/40 rounded-xl hover:bg-accent/50 cursor-pointer transition-all duration-200 group hover:border-purple-500/30 hover:shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                        <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Update profile</h3>
                 </div>
                 <p className="text-xs text-muted-foreground pl-[52px]">Change your avatar, bio or social links.</p>
               </div>

               <div className="p-4 border border-border/40 rounded-xl hover:bg-accent/50 cursor-pointer transition-all duration-200 group hover:border-green-500/30 hover:shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-50 dark:bg-green-500/10 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-500/20 transition-colors">
                        <BarChart className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">View Analytics</h3>
                 </div>
                 <p className="text-xs text-muted-foreground pl-[52px]">Check your latest growth stats and reports.</p>
               </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
