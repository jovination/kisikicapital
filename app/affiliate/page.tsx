"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Users, DollarSign, Share2, ChevronRight } from "lucide-react"

const affiliateStats = [
  { label: "Active Affiliates", value: "5,000+" },
  { label: "Total Commissions", value: "$2M+" },
  { label: "Commission Rate", value: "Up to 30%" },
  { label: "Average Payout", value: "$500+" },
]

const commissionTiers = [
  {
    tier: "Bronze",
    requirements: "1-5 referrals",
    commission: "15%",
    benefits: [
      "Basic affiliate dashboard",
      "Monthly payouts",
      "Standard support",
    ],
  },
  {
    tier: "Silver",
    requirements: "6-20 referrals",
    commission: "20%",
    benefits: [
      "Advanced dashboard",
      "Bi-weekly payouts",
      "Priority support",
      "Marketing materials",
    ],
  },
  {
    tier: "Gold",
    requirements: "21-50 referrals",
    commission: "25%",
    benefits: [
      "Premium dashboard",
      "Weekly payouts",
      "Dedicated support",
      "Custom marketing materials",
      "Performance bonuses",
    ],
  },
  {
    tier: "Platinum",
    requirements: "50+ referrals",
    commission: "30%",
    benefits: [
      "VIP dashboard",
      "Daily payouts",
      "24/7 dedicated support",
      "Custom marketing materials",
      "Exclusive bonuses",
      "Early access to new features",
    ],
  },
]

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredLanguage: "en",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Join Our Affiliate Program
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              Earn up to 30% commission by referring traders to Kisiki Capital. Start earning today!
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              Become an Affiliate
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {affiliateStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zinc-900 mb-12">Commission Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commissionTiers.map((tier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center text-primary">{tier.tier}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-zinc-900">{tier.commission}</div>
                    <div className="text-zinc-600">Commission Rate</div>
                  </div>
                  <div className="mb-6">
                    <div className="font-semibold text-zinc-900 mb-2">Requirements:</div>
                    <div className="text-zinc-600">{tier.requirements}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 mb-2">Benefits:</div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-zinc-600">
                          <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-zinc-900 mb-8">Join Our Affiliate Program</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-zinc-700 mb-1">
                  Preferred Language
                </label>
                <select
                  id="language"
                  value={formData.preferredLanguage}
                  onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="pt">Portuguese</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 