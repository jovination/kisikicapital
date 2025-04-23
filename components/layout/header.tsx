"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-content-light-bg/80 dark:bg-content-dark-bg/80 backdrop-blur-md shadow-sm border-b border-content-light-border dark:border-content-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-primary">Kisiki Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#packages"
              className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
            >
              Our Packages
            </Link>
            <Link
              href="https://kisikicapitalforexacademy.com/"
              className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
            >
              Our Academy
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
            >
              Resources
            </Link>
           
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Link
              href="https://kisikicapitaldashboard.propaccount.com/en/sign-in"
              className="hidden sm:flex text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
            >
              Sign In
            </Link>
            <Link 
              href="https://kisikicapitaldashboard.propaccount.com/en/sign-up"
              className="hidden sm:flex bg-primary text-black hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Register
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Kisiki Capital
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4 flex-1">
                    <Link
                      href="/"
                      className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="#packages"
                      className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Packages
                    </Link>
                    <Link
                      href="https://kisikicapitalforexacademy.com/"
                      className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Academy
                    </Link>
                    <Link
                      href="/resources"
                      className="text-sm font-medium text-content-light-text dark:text-content-dark-text hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                   
                  </nav>
                  <div className="flex flex-col gap-4 mt-auto pt-8">
                    <Link
                      href="https://kisikicapitaldashboard.propaccount.com/en/sign-in"
                      className="w-full text-center text-content-light-text dark:text-content-dark-text hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-md transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="https://kisikicapitaldashboard.propaccount.com/en/sign-up"
                      className="w-full text-center bg-primary text-black hover:bg-primary/90 py-2 rounded-md transition-colors"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}