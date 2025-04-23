"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock, ChevronRight, Star } from "lucide-react"

const courses = [
  {
    title: "Trading Fundamentals",
    description: "Master the basics of trading, market analysis, and risk management.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    students: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
  },
  {
    title: "Advanced Trading Strategies",
    description: "Learn advanced trading techniques and strategies for consistent profits.",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 18,
    students: 850,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=2074",
  },
  {
    title: "Risk Management Mastery",
    description: "Develop professional risk management skills to protect your capital.",
    level: "Advanced",
    duration: "4 weeks",
    lessons: 12,
    students: 600,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070",
  },
  {
    title: "Prop Trading Success",
    description: "Learn the secrets of successful prop traders and how to get funded.",
    level: "All Levels",
    duration: "8 weeks",
    lessons: 24,
    students: 1500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187",
  },
]

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from professional traders with years of experience in the markets.",
    icon: Users,
  },
  {
    title: "Practical Learning",
    description: "Get hands-on experience with real trading scenarios and case studies.",
    icon: BookOpen,
  },
  {
    title: "Certification",
    description: "Earn recognized certifications to boost your trading career.",
    icon: Award,
  },
  {
    title: "Flexible Schedule",
    description: "Learn at your own pace with 24/7 access to course materials.",
    icon: Clock,
  },
]

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Trading Academy
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              Master the art of trading with our comprehensive courses and expert guidance
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              Start Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Courses</h2>
            <p className="text-zinc-600">
              Choose from our range of courses designed to take you from beginner to professional trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all ${
                  selectedCourse === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCourse(index)}
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-black">
                    {course.level}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students}+ students</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(course.rating)
                              ? "fill-primary text-primary"
                              : "fill-zinc-200 text-zinc-200"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-zinc-600">{course.rating}</span>
                    </div>
                    <Button variant="outline" className="border-zinc-200 text-zinc-700 hover:bg-zinc-50">
                      Enroll Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-zinc-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-zinc-600 mb-8">
              Join our academy today and get access to expert-led courses, trading resources, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-200 text-zinc-700 hover:bg-zinc-50"
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