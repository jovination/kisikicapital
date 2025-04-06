"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2069')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="container relative z-20 mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 gold-text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-zinc-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-8 backdrop-blur-sm">
              {formSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">Message Sent!</h2>
                  <p className="mb-6 text-gray-400">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-full gold-button-gradient text-black"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400 focus:border-primary-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>What can we help you with?</Label>
                      <RadioGroup defaultValue="general" className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="text-gray-300">
                            General Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support" className="text-gray-300">
                            Technical Support
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="funding" id="funding" />
                          <Label htmlFor="funding" className="text-gray-300">
                            Funding Questions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partnership" id="partnership" />
                          <Label htmlFor="partnership" className="text-gray-300">
                            Partnership Opportunities
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="min-h-[150px] border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-400 focus:border-primary-500"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full gold-button-gradient text-black">
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>
                <p className="mb-8 text-gray-300">
                  Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST. We strive to respond to all
                  inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/20 text-primary-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">support@kisikicapital.com</p>
                    <p className="text-gray-400">info@kisikicapital.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/20 text-primary-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+1 (234) 567-8901</p>
                    <p className="text-gray-400">+1 (234) 567-8902</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/20 text-primary-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Office</h3>
                    <p className="text-gray-400">
                      123 Trading Street, Suite 456
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">Connect With Us</h3>
                <p className="mb-4 text-gray-400">
                  Follow us on social media for the latest updates, trading tips, and community events.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full bg-zinc-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-zinc-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-zinc-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-zinc-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-16 text-lg text-gray-300">Find quick answers to common questions about our services</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">What are your business hours?</h3>
              <p className="text-gray-400">
                Our team is available Monday through Friday, 9:00 AM to 5:00 PM EST. Support tickets and emails are
                monitored 24/7, and we strive to respond within 24 hours.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">How quickly will I receive a response?</h3>
              <p className="text-gray-400">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please
                indicate this in your message subject line.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Do you offer in-person consultations?</h3>
              <p className="text-gray-400">
                Yes, we offer in-person consultations at our New York office by appointment only. Please contact us to
                schedule a meeting with one of our trading specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900/20 to-primary-900/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary-500/20 bg-black/50 p-8 text-center backdrop-blur-sm md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Join thousands of successful traders who have transformed their financial future with Kisiki Capital.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full rounded-full gold-button-gradient text-black sm:w-auto">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-primary-600/50 text-primary-500 hover:bg-primary-950 hover:text-primary-400 sm:w-auto"
                >
                  Explore Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

