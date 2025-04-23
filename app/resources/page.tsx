"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

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

const sections = [
  {
    title: "What is a Prop Firm?",
    content: "A proprietary trading firm (prop firm) is a company that provides traders with capital to trade financial markets. Traders use the firm's money to execute trades and share profits according to agreed terms. Prop firms typically offer various funding programs, risk management tools, and educational resources to help traders succeed.",
  },
  {
    title: "Benefits of Trading with a Prop Firm",
    content: "Trading with a prop firm offers several advantages: access to larger capital, professional trading environment, risk management support, profit sharing opportunities, and access to trading tools and resources. Prop firms also provide mentorship and training programs to help traders improve their skills.",
  },
  {
    title: "Our Rules of Operations",
    content: "Our prop firm operates under strict rules to ensure fair and transparent trading: 1) Risk management guidelines to protect capital, 2) Profit targets and drawdown limits, 3) Trading hours and market restrictions, 4) Profit split terms, 5) Account scaling rules, and 6) Compliance with trading regulations.",
  },
]

export default function ResourcesPage() {
  const [openSection, setOpenSection] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-content-light-bg dark:bg-content-dark-bg">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 md:py-32 overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M400 0L800 400L400 800L0 400L400 0Z" fill="#EB9D2E" fillOpacity="0.2" />
            </svg>
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 mx-auto px-4 text-center"
        >
          <div className="mx-auto max-w-4xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-content-light-text dark:text-content-dark-text"
            >
              Trading Resources
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-content-light-text/70 dark:text-content-dark-text/70"
            >
              Everything you need to know about proprietary trading and our operations.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="mb-6 bg-content-light-bg dark:bg-content-dark-bg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-content-light-border dark:border-content-dark-border"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-6 flex items-center justify-between cursor-pointer"
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-left text-content-light-text dark:text-content-dark-text">
                    {section.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openSection === index ? (
                      <Minus className="h-5 w-5 text-primary transition-transform duration-200" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary transition-transform duration-200" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-content-light-text/70 dark:text-content-dark-text/70">
                          {section.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-2xl bg-content-light-bg dark:bg-content-dark-bg p-8 md:p-12 text-center shadow-sm border border-content-light-border dark:border-content-dark-border"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-content-light-text dark:text-content-dark-text"
            >
              Ready to Start Your Trading Journey?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 text-lg text-content-light-text/70 dark:text-content-dark-text/70"
            >
              Join thousands of successful traders who have transformed their financial future with Kisiki Capital.
            </motion.p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                Register Now
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