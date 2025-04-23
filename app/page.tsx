"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
  Wallet,
  Lock,
  GraduationCap,
  Plus,
  Minus,
  CheckCircle2,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatBot } from "@/components/chat-bot"
import { ClientDataCollector } from "@/components/client-data-collector"

const stats = [
  { label: "Traders Funded", value: "1,000+" },
  { label: "Total Payouts", value: "$5M+" },
  { label: "Average Profit Split", value: "80%" },
  { label: "Years in Business", value: "5+" },
]

const features = [
  {
    title: "Adequate funding",
    description: "We fund your trade ventures 100%, allowing you to trade without fear of losing your money.",
    icon: Wallet,
  },
  {
    title: "Secure Data Management",
    description: "Any and all transactions within the platform are end-to-end encrypted to ensure that your winnings are safe",
    icon: Lock,
  },
  {
    title: "Learning from the best",
    description: "Access the best advice from the best trade experts to help you learn to maneuver the trade landscape.",
    icon: GraduationCap,
  },
]

const steps = [
  {
    title: "Package Purchase & getting started",
    description: "You purchase a package to allow us to assign you to a professional who will help you handle your trade ventures",
  },
  {
    title: "Discovery call & ratio agreement",
    description: "You engage your assigned professional, who takes you through our terms and conditions and you agree on a set ratio of profit sharing",
  },
  {
    title: "Strategy and fund assigning",
    description: "Along with your assigned professional, you strategize and then you are assigned you initial funds",
  },
  {
    title: "Maintenance and risk management",
    description: "Constant assistance from your assigned professional, helping you reduce your losses and maximize your wins",
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
    date: "2 days ago",
    verified: true,
  },
  {
    name: "Jane Smith",
    title: "Part-Time Trader",
    text: "I was able to achieve consistent profits with the help of Kisiki Capital's resources and support.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 4,
    date: "1 week ago",
    verified: true,
  },
  {
    name: "Mike Johnson",
    title: "Full-Time Trader",
    text: "The funding options and profit splits are the best in the industry. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
  },
]

const faqs = [
  {
    question: "What is a prop firm?",
    answer: "A prop firm is a proprietary trading firm that invests its own capital to trade in financial markets. Traders use the firm's money to make trades and share the profits.",
  },
  {
    question: "How do I become a trader at a prop firm?",
    answer: "Typically, you need to apply, pass an evaluation process, and demonstrate your trading skills. Each firm may have specific requirements and assessment methods.",
  },
  {
    question: "What are the benefits of trading with a prop firm?",
    answer: "You can trade with larger capital and potentially earn higher profits. Prop firms also offer training, support, and resources for traders.",
  },
  {
    question: "Do I need to invest my own money to trade with a prop firm?",
    answer: "Most prop firms do not require traders to invest their own money. The firm provides the capital, and traders share a portion of the profits.",
  },
  {
    question: "What is the profit split at a prop firm?",
    answer: "Profit splits vary by firm, but common splits range from 50/50 to 80/20, with traders typically receiving the larger share. Specific terms are outlined in the trader's contract.",
  },
  {
    question: "What markets can I trade with a prop firm?",
    answer: "We offer FX, Indices, spot metals, crude oil. We do not offer options or stocks. Futures will be available in 2025.",
  },
]

const fundingAmounts = [5000, 10000, 25000, 50000, 100000, 250000, 400000]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
}

const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pricingModel, setPricingModel] = useState<"one-phase" | "two-phase" | "instant-funded">("one-phase")
  const [selectedAmount, setSelectedAmount] = useState(5000)
  const [isVisible, setIsVisible] = useState(false)

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

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex flex-col justify-between overflow-hidden py-12 sm:py-20 md:py-32"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] md:w-[800px] h-[600px] sm:h-[700px] md:h-[800px]">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M400 0L800 400L400 800L0 400L400 0Z" fill="#EB9D2E" fillOpacity="0.2" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 mx-auto px-4 text-center mt-20"
        >
          <div className="mx-auto md:space-y-12 max-w-3xl sm:max-w-4xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
            >
              Grow your financial portfolio with adequate funding
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mx-auto mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base md:text-lg"
            >
              Unleash your trade potential with expert trade advice from expert trade professionals and adequate funding
              from a trusted prop firm.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-12"
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                <Link href="/signup">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-content-light-border dark:border-content-dark-border hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                Try free demo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="container mx-auto px-4 mt-12 sm:mt-20"
        >
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { icon: Users, text: "1 million+ active traders" },
              { icon: Shield, text: "Multiple regulatory licenses" },
              { icon: Clock, text: "24/7 customer support" },
              { icon: Award, text: "PCI DSS certified" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-primary" />
                <p className="text-xs sm:text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Trade With Us</h2>
            <p className="text-base sm:text-lg">
              Simple. We ensure your trade success and security by assisting you every step of the way.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-content-light-bg dark:bg-content-dark-bg rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-content-light-border dark:border-content-dark-border"
              >
                <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20 px-4"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Process</h2>
            <p className="text-base sm:text-lg">As a prop firm, we've researched on the safest and best ways to approach trading through expert algorithms to ensure that risk is maximized within the bounds of sense to ensure that</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative bg-content-light-bg dark:bg-content-dark-bg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 border border-content-light-border dark:border-content-dark-border hover:border-primary/20"
              >
                <div className="absolute -top-4 -left-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-black font-semibold text-lg sm:text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="packages" 
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Our Trading Packages
            </h2>
            <p className="text-base sm:text-lg">
              Choose the perfect package that suits your trading style and financial goals.
            </p>
          </motion.div>

          {/* Funding Package Selector */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-4xl sm:max-w-5xl"
          >
            <div className="bg-content-light-bg dark:bg-content-dark-bg rounded-lg shadow-sm overflow-hidden border border-content-light-border dark:border-content-dark-border">
              <Tabs defaultValue="one-phase" className="w-full" onValueChange={(value) => setPricingModel(value as any)}>
                <div className="border-b border-content-light-border dark:border-content-dark-border">
                  <div className="container mx-auto px-4">
                    <TabsList className="flex h-12 sm:h-14 items-center space-x-2 sm:space-x-4 bg-transparent overflow-x-auto">
                      <TabsTrigger
                        value="one-phase"
                        className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
                      >
                        One Phase
                      </TabsTrigger>
                      <TabsTrigger
                        value="two-phase"
                        className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
                      >
                        Two Phase
                      </TabsTrigger>
                      <TabsTrigger
                        value="instant-funded"
                        className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
                      >
                        Instant Funded
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>

                <div className="py-6 sm:py-8">
                  <div className="container mx-auto px-4">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Select Account Size</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4">
                        {fundingAmounts.map((amount) => (
                          <motion.button
                            key={amount}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedAmount(amount)}
                            className={`rounded-md px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center transition-all ${
                              selectedAmount === amount
                                ? "bg-primary text-black font-medium"
                                : "bg-content-light-bg/50 dark:bg-content-dark-bg/50 hover:bg-content-light-bg/70 dark:hover:bg-content-dark-bg/70"
                            }`}
                          >
                            ${amount.toLocaleString()}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pricingModel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TabsContent value="one-phase" className="mt-0">
                          <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="bg-content-light-bg dark:bg-content-dark-bg rounded-lg p-4 sm:p-6 border border-content-light-border dark:border-content-dark-border"
                          >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                              <div>
                                <h4 className="text-base sm:text-lg font-semibold">One Phase Package</h4>
                                <p className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">For experienced traders looking to meet their targets in one shot</p>
                              </div>
                              <div className="text-left sm:text-right">
                                <div className="text-xl sm:text-2xl font-semibold">${onePhasePackage?.price}</div>
                                <div className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">One-time fee</div>
                              </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                              {onePhasePackage?.details.map((detail, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">{detail.label}</span>
                                  <span className="text-sm sm:text-base font-medium">{detail.value}</span>
                                </div>
                              ))}
                            </div>

                            <Button className="w-full mt-6 sm:mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
                          </motion.div>
                        </TabsContent>

                        <TabsContent value="two-phase" className="mt-0">
                          <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="bg-content-light-bg dark:bg-content-dark-bg rounded-lg p-4 sm:p-6 border border-content-light-border dark:border-content-dark-border"
                          >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                              <div>
                                <h4 className="text-base sm:text-lg font-semibold">Two Phase Package</h4>
                                <p className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">For experienced traders looking to meet their targets in two phases</p>
                              </div>
                              <div className="text-left sm:text-right">
                                <div className="text-xl sm:text-2xl font-semibold">${twoPhasePackage?.price}</div>
                                <div className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">One-time fee</div>
                              </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                              {twoPhasePackage?.details.map((detail, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">{detail.label}</span>
                                  <span className="text-sm sm:text-base font-medium">{detail.value}</span>
                                </div>
                              ))}
                            </div>

                            <Button className="w-full mt-6 sm:mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
                          </motion.div>
                        </TabsContent>

                        <TabsContent value="instant-funded" className="mt-0">
                          <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="bg-content-light-bg dark:bg-content-dark-bg rounded-lg p-4 sm:p-6 border border-content-light-border dark:border-content-dark-border"
                          >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                              <div>
                                <h4 className="text-base sm:text-lg font-semibold">Instant Funded Package</h4>
                                <p className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">For experienced traders looking to get funded instantly</p>
                              </div>
                              <div className="text-left sm:text-right">
                                <div className="text-xl sm:text-2xl font-semibold">${instantFundedPackage?.price}</div>
                                <div className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">One-time fee</div>
                              </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                              {instantFundedPackage?.details.map((detail, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">{detail.label}</span>
                                  <span className="text-sm sm:text-base font-medium">{detail.value}</span>
                                </div>
                              ))}
                            </div>

                            <Button className="w-full mt-6 sm:mt-8 bg-primary text-black hover:bg-primary/90">Get Started</Button>
                          </motion.div>
                        </TabsContent>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              What Our Traders Say
            </h2>
            <p className="text-base sm:text-lg">Don't just take our word for it. Hear from our successful traders.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-content-light-bg dark:bg-content-dark-bg rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-content-light-border dark:border-content-dark-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">{testimonial.title}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-primary">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        i <= testimonial.rating ? "fill-primary text-primary" : "fill-content-light-border dark:fill-content-dark-border text-content-light-border dark:text-content-dark-border"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-content-light-text/70 dark:text-content-dark-text/70">
                  <span>{testimonial.date}</span>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Reply</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">Got questions?</h2>
            <p className="text-base sm:text-lg">
              Frequently asked questions by various of our current and prospective customers.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl sm:max-w-3xl"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="mb-4 bg-content-light-bg dark:bg-content-dark-bg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-content-light-border dark:border-content-dark-border"
              >
                <button 
                  className="w-full p-4 sm:p-6 flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(`faq-${index}`);
                    const button = document.getElementById(`faq-button-${index}`);
                    if (element && button) {
                      const isExpanded = element.style.maxHeight !== '0px';
                      // Close all FAQs
                      faqs.forEach((_, i) => {
                        const el = document.getElementById(`faq-${i}`);
                        const btn = document.getElementById(`faq-button-${i}`);
                        if (el && btn) {
                          el.style.maxHeight = '0px';
                          btn.classList.remove('rotate-45');
                        }
                      });
                      // Toggle clicked FAQ
                      if (!isExpanded) {
                        element.style.maxHeight = element.scrollHeight + 'px';
                        button.classList.add('rotate-45');
                      }
                    }
                  }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-left">{faq.question}</h3>
                  <Plus 
                    id={`faq-button-${index}`}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4"
                  />
                </button>
                <div 
                  id={`faq-${index}`}
                  className="overflow-hidden transition-all duration-200"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="mb-4 text-sm sm:text-base text-content-light-text/70 dark:text-content-dark-text/70">Questions not answered?</p>
            <p className="text-sm sm:text-base text-content-light-text/70 dark:text-content-dark-text/70">
              Feel free to shoot us an email at{" "}
              <a 
                href="mailto:enquiries@kisikicapital.com" 
                className="text-primary hover:text-primary/90 font-medium"
              >
                enquiries@kisikicapital.com
              </a>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:max-w-3xl rounded-2xl bg-content-light-bg dark:bg-content-dark-bg p-6 sm:p-8 md:p-12 text-center shadow-sm border border-content-light-border dark:border-content-dark-border"
          >
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg">
              Join thousands of successful traders who have transformed their financial future with Kisiki Capital.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                <Link href="https://kisikicapitaldashboard.propaccount.com/en/sign-up">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-content-light-border dark:border-content-dark-border hover:bg-content-light-bg/50 dark:hover:bg-content-dark-bg/50"
              >
                Try Free Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
