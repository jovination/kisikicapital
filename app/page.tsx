"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart2,
  ChevronRight,
  Globe,
  Shield,
  Users,
  Zap,
  BookOpen,
  Award,
  Clock,
  Menu,
  ChevronDown,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatBot } from "@/components/chat-bot"

const stats = [
  { label: "Traders Funded", value: "1,000+" },
  { label: "Total Payouts", value: "$5M+" },
  { label: "Average Profit Split", value: "80%" },
  { label: "Years in Business", value: "5+" },
]

const features = [
  {
    title: "Instant Funding",
    description: "Get access to capital immediately and start trading without delay.",
    icon: Zap,
  },
  {
    title: "Expert Mentorship",
    description: "Receive guidance from experienced traders to improve your skills and strategies.",
    icon: Users,
  },
  {
    title: "Risk Management",
    description: "Learn how to manage risk effectively and protect your capital.",
    icon: Shield,
  },
  {
    title: "Global Community",
    description: "Join a community of like-minded traders and share ideas and strategies.",
    icon: Globe,
  },
  {
    title: "Advanced Tools",
    description: "Utilize cutting-edge trading tools and technology to gain an edge in the market.",
    icon: BarChart2,
  },
  {
    title: "Performance Rewards",
    description: "Get rewarded for your trading success with bonuses and incentives.",
    icon: Award,
  },
]

const steps = [
  {
    title: "Sign Up",
    description: "Create an account and choose your desired funding package.",
  },
  {
    title: "Complete Assessment",
    description: "Pass our trading assessment to demonstrate your skills and risk management abilities.",
  },
  {
    title: "Get Funded",
    description: "Receive your trading account and start trading with our capital.",
  },
]

const onePhasePackages = [
  {
    amount: 5000,
    price: 60,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 10000,
    price: 120,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 25000,
    price: 250,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 50000,
    price: 450,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 100000,
    price: 800,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 250000,
    price: 1500,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 400000,
    price: 2200,
    details: [
      { label: "Profit Target (Phase One)", value: "10%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "6%" },
      { label: "Profit Split", value: "80/20" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
]

const twoPhasePackages = [
  {
    amount: 5000,
    price: 30,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 10000,
    price: 60,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 25000,
    price: 125,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 50000,
    price: 225,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 100000,
    price: 400,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 250000,
    price: 750,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
  {
    amount: 400000,
    price: 1100,
    details: [
      { label: "Profit Target (Phase One)", value: "8%" },
      { label: "Profit Target (Phase Two)", value: "5%" },
      { label: "Max Daily Loss", value: "5%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Profit Split", value: "80/20" },
      { label: "Trading Period", value: "Unlimited" },
    ],
  },
]

const instantFundedPackages = [
  {
    amount: 5000,
    price: 150,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 10000,
    price: 300,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 25000,
    price: 600,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 50000,
    price: 1000,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 100000,
    price: 1800,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 250000,
    price: 3500,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
  {
    amount: 400000,
    price: 5000,
    details: [
      { label: "Profit Target", value: "-" },
      { label: "Max Daily Loss", value: "-" },
      { label: "Max Loss", value: "10%" },
      { label: "Profit Split", value: "70/30" },
      { label: "EA Trading", value: "Yes" },
      { label: "Trading Period", value: "Weekdays" },
      { label: "Scale Target", value: "10%" },
      { label: "Scaling Speed", value: "Account size doubles each time you scale" },
      { label: "Leverage - Currencies", value: "1:100" },
      { label: "Leverage - Commodities", value: "1:20" },
      { label: "Payouts", value: "14 days after your first trade and weekly after that" },
    ],
  },
]

const courses = [
  {
    title: "Trading Basics",
    description: "Learn the fundamentals of trading and financial markets.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    price: 49,
  },
  {
    title: "Advanced Strategies",
    description: "Master advanced trading techniques and strategies.",
    image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=2074",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 18,
    price: 99,
  },
  {
    title: "Risk Management",
    description: "Learn how to manage risk effectively and protect your capital.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 24,
    price: 149,
  },
]

const resources = [
  {
    title: "Trading Psychology",
    description: "Understand the psychological aspects of trading and how to control your emotions.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2187",
    category: "Psychology",
    readTime: 15,
  },
  {
    title: "Market Analysis",
    description: "Learn how to analyze financial markets and identify trading opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    category: "Analysis",
    readTime: 20,
  },
  {
    title: "Trading Tools",
    description: "Discover the best trading tools and software to enhance your trading performance.",
    image: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2069",
    category: "Tools",
    readTime: 12,
  },
]

const testimonials = [
  {
    name: "John Doe",
    title: "Professional Trader",
    text: "Kisiki Capital has transformed my trading career. The funding and mentorship are top-notch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Part-Time Trader",
    text: "I was able to achieve consistent profits with the help of Kisiki Capital's resources and support.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    title: "Full-Time Trader",
    text: "The funding options and profit splits are the best in the industry. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    rating: 5,
  },
]

const faqs = [
  {
    question: "How does the funding process work?",
    answer:
      "You sign up, complete an assessment, and get funded if you meet our criteria. Our assessment evaluates your trading skills, risk management, and consistency. Once approved, you'll receive your funded account within 24 hours.",
  },
  {
    question: "What is the profit split?",
    answer:
      "Our profit split ranges from 70% to 90%, depending on your chosen package. One Phase and Two Phase packages typically offer an 80/20 split, while Instant Funded accounts start with a 70/30 split that can increase as you demonstrate consistent performance.",
  },
  {
    question: "Do you offer mentorship?",
    answer:
      "Yes, we provide expert mentorship to help you improve your trading skills. Our mentors are experienced traders who have proven track records in the markets. Mentorship includes one-on-one sessions, group webinars, and access to our exclusive trading community.",
  },
  {
    question: "How often are payouts processed?",
    answer:
      "For One Phase and Two Phase accounts, payouts are processed bi-weekly. For Instant Funded accounts, the first payout is processed 14 days after your first trade, with weekly payouts thereafter. All payouts are processed within 24-48 hours of request.",
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header/Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white"}`}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-zinc-900">Kisiki Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8">
            <Link href="/" className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary">
              Trading
            </Link>
            <Link href="#resources" className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary">
              Markets
            </Link>
            <Link href="#packages" className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary">
              Platforms
            </Link>
            <Link href="#academy" className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary">
              Tools
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary">
              Company
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-primary flex items-center"
            >
              Partners <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center mr-2">
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
            <Button className="bg-primary text-black hover:bg-primary/90">
              <Link href="/signup">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-zinc-200">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-bold text-zinc-900">Kisiki Capital</span>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="text-base font-medium text-zinc-700 transition-colors hover:text-primary">
                    Trading
                  </Link>
                  <Link
                    href="#resources"
                    className="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
                  >
                    Markets
                  </Link>
                  <Link
                    href="#packages"
                    className="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
                  >
                    Platforms
                  </Link>
                  <Link
                    href="#academy"
                    className="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
                  >
                    Tools
                  </Link>
                  <Link
                    href="#about"
                    className="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
                  >
                    Company
                  </Link>
                  <Link
                    href="#partners"
                    className="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
                  >
                    Partners
                  </Link>
                </nav>

                <div className="mt-auto pt-8 flex flex-col space-y-4">
                  <div className="flex items-center justify-center mb-2">
                    <button className="flex items-center text-base font-medium text-zinc-700 hover:text-primary">
                      <Globe className="h-4 w-4 mr-2" />
                      EN
                    </button>
                  </div>
                  <Link href="/signin">
                    <Button
                      variant="outline"
                      className="w-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Button className="w-full bg-primary text-black hover:bg-primary/90">
                    <Link href="/signup">Register</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M400 0L800 400L400 800L0 400L400 0Z" fill="#EB9D2E" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900">
              Grow your financial portfolio with adequate funding
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-zinc-600">
              Unleash your trade potential with expert trade advice from expert trade professionals and adequate funding
              from a trusted prop firm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                <Link href="/signup">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              >
                Try free demo
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <div className="flex flex-col items-center text-center">
              <Users className="h-6 w-6 mb-2 text-zinc-700" />
              <p className="text-sm font-medium text-zinc-900">1 million+ active traders</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-6 w-6 mb-2 text-zinc-700" />
              <p className="text-sm font-medium text-zinc-900">Multiple regulatory licenses</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-6 w-6 mb-2 text-zinc-700" />
              <p className="text-sm font-medium text-zinc-900">24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-6 w-6 mb-2 text-zinc-700" />
              <p className="text-sm font-medium text-zinc-900">PCI DSS certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Why Trade With Us</h2>
            <p className="text-lg text-zinc-600">
              Simple. We ensure your trade success and security by assisting you every step of the way.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">How It Works</h2>
            <p className="text-lg text-zinc-600">Our simple process gets you funded and trading in no time</p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black font-semibold text-xl">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-zinc-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Our Trading Packages
            </h2>
            <p className="text-lg text-zinc-600">
              Choose the perfect package that suits your trading style and financial goals.
            </p>
          </div>

          {/* Funding Package Selector */}
          <div className="mx-auto max-w-5xl">
            <FundingPackageSelector />
          </div>
        </div>
      </section>

      {/* Academy Section */}
      {/* <section id="academy" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Our Trading Academy
            </h2>
            <p className="text-lg text-zinc-600">
              Learn from the best with our comprehensive trading courses and resources
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-black">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">{course.title}</h3>
                  <p className="mb-4 text-sm text-zinc-600">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{course.lessons} lessons</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-zinc-900">${course.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-primary text-black hover:bg-primary/90">View All Courses</Button>
          </div>
        </div>
      </section> */}

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Trading Resources</h2>
            <p className="text-lg text-zinc-600">
              Access our library of trading guides, market analysis, and educational content
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800">
                    {resource.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-primary">
                    {resource.title}
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{resource.readTime} min read</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-zinc-700 hover:text-zinc-900">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-primary text-black hover:bg-primary/90">Browse All Resources</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              What Our Traders Say
            </h2>
            <p className="text-lg text-zinc-600">Don't just take our word for it. Hear from our successful traders.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i <= testimonial.rating ? "fill-primary text-primary" : "fill-zinc-200 text-zinc-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-zinc-600">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-600">Find answers to common questions about our trading programs</p>
          </div>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-zinc-600">Still have questions?</p>
            <Button className="bg-primary text-black hover:bg-primary/90">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-zinc-50 p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="mb-8 text-lg text-zinc-600">
              Join thousands of successful traders who have transformed their financial future with Kisiki Capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                <Link href="/signup">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              >
                Try Free Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-zinc-50 p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="mb-8 text-lg text-zinc-600">
              Join thousands of successful traders who have transformed their financial future with Kisiki Capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                <Link href="/signup">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              >
                Try Free Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-zinc-900">Kisiki Capital</span>
              </Link>
              <p className="mt-4 text-zinc-600">
                Empowering traders with expert advice and adequate funding since 2018.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="rounded-full bg-zinc-100 p-2 text-zinc-500 transition-colors hover:bg-primary/10 hover:text-primary"
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
                  className="rounded-full bg-zinc-100 p-2 text-zinc-500 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-zinc-100 p-2 text-zinc-500 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-600 transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-zinc-600 transition-colors hover:text-primary">
                    Our Packages
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="text-zinc-600 transition-colors hover:text-primary">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#academy" className="text-zinc-600 transition-colors hover:text-primary">
                    Our Academy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-zinc-600">support@kisikicapital.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-zinc-600">+1 (234) 567-8901</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="mb-2 text-sm font-semibold text-zinc-900">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-l-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 focus:border-primary focus:outline-none"
                  />
                  <Button className="rounded-l-none rounded-r-md bg-primary hover:bg-primary/90 text-black">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-600 transition-colors hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 transition-colors hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 transition-colors hover:text-primary">
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Kisiki Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  )
}

function FundingPackageSelector() {
  const fundingAmounts = [5000, 10000, 25000, 50000, 100000, 250000, 400000]
  const [selectedAmount, setSelectedAmount] = useState(5000)
  const [pricingModel, setPricingModel] = useState<"one-phase" | "two-phase" | "instant-funded">("one-phase")

  // Find the package details for the selected amount
  const onePhasePackage = onePhasePackages.find((pkg) => pkg.amount === selectedAmount)
  const twoPhasePackage = twoPhasePackages.find((pkg) => pkg.amount === selectedAmount)
  const instantFundedPackage = instantFundedPackages.find((pkg) => pkg.amount === selectedAmount)

  // Get current package based on selected pricing model
  const currentPackage =
    pricingModel === "one-phase"
      ? onePhasePackage
      : pricingModel === "two-phase"
        ? twoPhasePackage
        : instantFundedPackage

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Tabs defaultValue="one-phase" className="w-full" onValueChange={(value) => setPricingModel(value as any)}>
        <div className="border-b border-zinc-200">
          <div className="container mx-auto px-4">
            <TabsList className="flex h-14 items-center space-x-4 bg-transparent">
              <TabsTrigger
                value="one-phase"
                className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-4 py-2 text-sm font-medium text-zinc-600 transition-all"
              >
                One Phase
              </TabsTrigger>
              <TabsTrigger
                value="two-phase"
                className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-4 py-2 text-sm font-medium text-zinc-600 transition-all"
              >
                Two Phase
              </TabsTrigger>
              <TabsTrigger
                value="instant-funded"
                className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-4 py-2 text-sm font-medium text-zinc-600 transition-all"
              >
                Instant Funded
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Select Account Size</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {fundingAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`rounded-md px-4 py-3 text-center transition-all ${
                      selectedAmount === amount
                        ? "bg-primary text-black font-medium"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <TabsContent value="one-phase" className="mt-0">
              <div className="bg-zinc-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900">One Phase Package</h4>
                    <p className="text-zinc-600">For experienced traders looking to meet their targets in one shot</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-zinc-900">${onePhasePackage?.price}</div>
                    <div className="text-zinc-500">One-time fee</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {onePhasePackage?.details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-zinc-600">{detail.label}</span>
                      <span className="font-medium text-zinc-900">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
              </div>
            </TabsContent>

            <TabsContent value="two-phase" className="mt-0">
              <div className="bg-zinc-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900">Two Phase Package</h4>
                    <p className="text-zinc-600">For experienced traders looking to meet their targets in two phases</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-zinc-900">${twoPhasePackage?.price}</div>
                    <div className="text-zinc-500">One-time fee</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {twoPhasePackage?.details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-zinc-600">{detail.label}</span>
                      <span className="font-medium text-zinc-900">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
              </div>
            </TabsContent>

            <TabsContent value="instant-funded" className="mt-0">
              <div className="bg-zinc-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900">Instant Funded Package</h4>
                    <p className="text-zinc-600">For experienced traders looking to get funded instantly</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-zinc-900">${instantFundedPackage?.price}</div>
                    <div className="text-zinc-500">One-time fee</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {instantFundedPackage?.details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-zinc-600">{detail.label}</span>
                      <span className="font-medium text-zinc-900">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

