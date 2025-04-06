"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Globe, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeUpdates: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Handle registration logic here
      console.log(formData)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-zinc-900">Kisiki Capital</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button className="flex items-center text-sm font-medium text-zinc-700 hover:text-primary">
                <Globe className="h-4 w-4 mr-1" />
                EN
              </button>
            </div>
            <Link href="/signin">
              <Button variant="outline" className="border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">Create your account</h1>
            <p className="mt-2 text-zinc-600">Join Kisiki Capital and start your trading journey</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-black" : "bg-zinc-200 text-zinc-500"}`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : 1}
                </div>
                <span className="mt-1 text-xs text-zinc-600">Personal Info</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step > 1 ? "bg-primary" : "bg-zinc-200"}`}></div>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-black" : "bg-zinc-200 text-zinc-500"}`}
                >
                  2
                </div>
                <span className="mt-1 text-xs text-zinc-600">Account Setup</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="border-zinc-300 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="border-zinc-300 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="border-zinc-300 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8901"
                    className="border-zinc-300 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence</Label>
                  <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                    <SelectTrigger className="border-zinc-300 focus:border-primary focus:ring-primary">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="border-zinc-300 focus:border-primary focus:ring-primary"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500">Password must be at least 8 characters long</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                      }
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-zinc-600 leading-tight">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreePrivacy: checked as boolean }))
                      }
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-zinc-600 leading-tight">
                      I confirm that I am at least 18 years old and acknowledge the risks involved in trading
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="updates"
                      name="agreeUpdates"
                      checked={formData.agreeUpdates}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreeUpdates: checked as boolean }))
                      }
                    />
                    <Label htmlFor="updates" className="text-sm text-zinc-600 leading-tight">
                      I would like to receive updates about products, services, and promotional offers
                    </Label>
                  </div>
                </div>
              </>
            )}

            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
              {step === 1 ? "Continue" : "Create Account"}
            </Button>

            {step === 2 && (
              <Button
                type="button"
                variant="outline"
                className="w-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            )}

            <div className="text-center text-sm text-zinc-600">
              Already have an account?{" "}
              <Link href="/signin" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Kisiki Capital. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-zinc-500 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-sm text-zinc-500 hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

