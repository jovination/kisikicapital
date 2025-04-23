"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    title: "Professional Trader",
    text: "Kisiki Capital has transformed my trading career. The funding and mentorship are top-notch. I've been able to scale my account multiple times and the support team is always there when I need them.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    rating: 5,
    location: "New York, USA",
    profit: "+$25,000",
  },
  {
    name: "Jane Smith",
    title: "Part-Time Trader",
    text: "I was able to achieve consistent profits with the help of Kisiki Capital's resources and support. The two-phase program was perfect for my trading style, and I've been able to grow my account steadily.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 4,
    location: "London, UK",
    profit: "+$12,500",
  },
  {
    name: "Mike Johnson",
    title: "Full-Time Trader",
    text: "The funding options and profit splits are the best in the industry. I've tried other prop firms, but Kisiki Capital stands out with their transparent rules and excellent customer service.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    rating: 5,
    location: "Sydney, Australia",
    profit: "+$45,000",
  },
  {
    name: "Sarah Williams",
    title: "Swing Trader",
    text: "The instant funded account was exactly what I needed. I got funded quickly and started trading right away. The scaling plan is very achievable, and I've already doubled my initial account size.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    rating: 5,
    location: "Toronto, Canada",
    profit: "+$18,000",
  },
  {
    name: "David Chen",
    title: "Algorithmic Trader",
    text: "As an EA developer, I appreciate that Kisiki Capital allows automated trading. Their VPS service is excellent, and I've had no issues running my strategies 24/7.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    rating: 5,
    location: "Singapore",
    profit: "+$32,000",
  },
  {
    name: "Emma Rodriguez",
    title: "Day Trader",
    text: "The one-phase program was perfect for my aggressive trading style. I hit my profit target in just two weeks and have been consistently profitable ever since.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
    rating: 5,
    location: "Madrid, Spain",
    profit: "+$15,000",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-zinc-600">
              Hear from our successful traders who have transformed their trading careers with Kisiki Capital
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">{testimonial.name}</h3>
                    <p className="text-sm text-zinc-600">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= testimonial.rating
                          ? "fill-primary text-primary"
                          : "fill-zinc-200 text-zinc-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-zinc-600 mb-4">{testimonial.text}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">{testimonial.location}</span>
                  <span className="font-semibold text-primary">{testimonial.profit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-zinc-600 mb-8">
              Join thousands of successful traders who have transformed their trading careers with Kisiki Capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
                Get Funded Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 