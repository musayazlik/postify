'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Postify
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:text-indigo-600 transition-colors"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-indigo-600 transition-colors"
          href="#pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:text-indigo-600 transition-colors"
          href="#about"
        >
          About
        </Link>
      </nav>
      <div className="ml-6 flex gap-2 items-center">
        {user ? (
          <>
            <Link href="/dashboard">
              <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200">
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost" onClick={() => logout()}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button variant="ghost" className="hover:bg-indigo-50 hover:text-indigo-600">
                Log in
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-200 border-0">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
