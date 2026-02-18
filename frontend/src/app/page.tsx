import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        
        {/* Pricing or other sections can go here */}
        <section id="pricing" className="py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
              Choose the plan that fits your needs. No hidden fees.
            </p>
            {/* Pricing cards would go here - keeping it simple for now */}
            <div className="p-8 border rounded-2xl bg-gray-50 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
              <div className="text-4xl font-bold mb-4">$29<span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Unlimited Posts</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Advanced Analytics</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> 5 Team Members</li>
              </ul>
              <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Postify. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
