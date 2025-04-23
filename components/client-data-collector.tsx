"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Phone, User } from "lucide-react"

export function ClientDataCollector() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    // Open the form after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-4 left-4 z-50 bg-primary text-black hover:bg-primary/90"
        >
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-content-light-bg dark:bg-content-dark-bg border-content-light-border dark:border-content-dark-border">
        <DialogHeader>
          <DialogTitle className="text-content-light-text dark:text-content-dark-text">Get Started with Kisiki Capital</DialogTitle>
          <DialogDescription className="text-content-light-text/70 dark:text-content-dark-text/70">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-content-light-text dark:text-content-dark-text">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-content-light-text/50 dark:text-content-dark-text/50" />
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="pl-10 bg-content-light-bg dark:bg-content-dark-bg border-content-light-border dark:border-content-dark-border text-content-light-text dark:text-content-dark-text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-content-light-text dark:text-content-dark-text">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-content-light-text/50 dark:text-content-dark-text/50" />
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="pl-10 bg-content-light-bg dark:bg-content-dark-bg border-content-light-border dark:border-content-dark-border text-content-light-text dark:text-content-dark-text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-content-light-text dark:text-content-dark-text">Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-content-light-text/50 dark:text-content-dark-text/50" />
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                className="pl-10 bg-content-light-bg dark:bg-content-dark-bg border-content-light-border dark:border-content-dark-border text-content-light-text dark:text-content-dark-text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 