"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-content-light-border dark:border-content-dark-border bg-content-light-bg dark:bg-content-dark-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Kisiki Capital</span>
            </Link>
            <p className="text-sm text-content-light-text/70 dark:text-content-dark-text/70">
              Empowering traders worldwide with capital, education, and support.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-content-light-text dark:text-content-dark-text hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-content-light-text dark:text-content-dark-text">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/packages"
                className="block text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Our Packages
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/academy"
                className="block text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Academy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-content-light-text dark:text-content-dark-text">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-content-light-text/70 dark:text-content-dark-text/70" />
                <a
                  href="mailto:enquiries@kisikicapital.com"
                  className="text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
                >
                  enquiries@kisikicapital.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-content-light-text/70 dark:text-content-dark-text/70" />
                <a
                  href="tel:+255761975628"
                  className="text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
                >
                  +255 761 975 628
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-content-light-text dark:text-content-dark-text">
              Newsletter
            </h3>
            <p className="text-sm text-content-light-text/70 dark:text-content-dark-text/70">
              Subscribe to our newsletter for updates and trading insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-content-light-bg dark:bg-content-dark-bg border border-content-light-border dark:border-content-dark-border text-content-light-text dark:text-content-dark-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-content-light-border dark:border-content-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-content-light-text/70 dark:text-content-dark-text/70">
              © {new Date().getFullYear()} Kisiki Capital. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <Link
                href="/terms"
                className="text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/risk"
                className="text-sm text-content-light-text/70 dark:text-content-dark-text/70 hover:text-primary transition-colors"
              >
                Risk Disclosure
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
} 