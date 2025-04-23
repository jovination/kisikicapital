"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What is Kisiki Capital?",
        answer: "Kisiki Capital is a proprietary trading firm that provides funding to talented traders. We offer various funding programs and trading resources to help traders succeed in the financial markets.",
      },
      {
        question: "How does the funding process work?",
        answer: "Our funding process is simple: 1) Sign up and choose your desired funding package, 2) Complete our trading assessment, 3) Get funded and start trading with our capital. We offer different funding options to suit various trading styles and experience levels.",
      },
      {
        question: "What markets can I trade?",
        answer: "We offer trading in major forex pairs, commodities, indices, and cryptocurrencies. The specific markets available depend on your chosen funding package and trading experience.",
      },
    ],
  },
  {
    title: "Funding & Payouts",
    questions: [
      {
        question: "What are the profit targets?",
        answer: "Profit targets vary depending on your chosen funding package. For One Phase accounts, the target is typically 10%. For Two Phase accounts, targets are 8% in Phase One and 5% in Phase Two. Instant Funded accounts have different scaling targets.",
      },
      {
        question: "How often are payouts processed?",
        answer: "Payouts are processed bi-weekly for One Phase and Two Phase accounts. For Instant Funded accounts, the first payout is processed 14 days after your first trade, with weekly payouts thereafter.",
      },
      {
        question: "What is the profit split?",
        answer: "Our profit split ranges from 70% to 90%, depending on your chosen package. One Phase and Two Phase packages typically offer an 80/20 split, while Instant Funded accounts start with a 70/30 split that can increase as you demonstrate consistent performance.",
      },
    ],
  },
  {
    title: "Trading Rules",
    questions: [
      {
        question: "What are the trading rules?",
        answer: "Our trading rules include: 1) Maximum daily loss limit, 2) Maximum drawdown limit, 3) Minimum trading days requirement, 4) News trading restrictions, and 5) Weekend holding restrictions. Specific rules vary by funding package.",
      },
      {
        question: "Can I use Expert Advisors (EAs)?",
        answer: "Yes, we allow the use of Expert Advisors on most of our funding packages. However, there are some restrictions on certain types of EAs, and they must be approved by our team before use.",
      },
      {
        question: "What is the maximum position size?",
        answer: "Maximum position sizes vary by funding package and market. Generally, we allow up to 1 lot per $10,000 of account size for forex pairs, with different limits for other instruments.",
      },
    ],
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "What trading platforms do you support?",
        answer: "We support MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms. These are available for both desktop and mobile devices.",
      },
      {
        question: "How do I get technical support?",
        answer: "We offer 24/7 technical support through our live chat, email, and phone. Our support team is available to help with any platform-related issues or trading questions.",
      },
      {
        question: "Do you provide VPS services?",
        answer: "Yes, we offer free VPS services to all funded traders. This ensures stable and fast execution of your trades, especially when using automated trading systems.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategories, setOpenCategories] = useState<number[]>([])
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({})

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zinc-600">
              Find answers to common questions about our trading programs and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full flex items-center justify-between p-4 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-zinc-900">{category.title}</h2>
                  {openCategories.includes(categoryIndex) ? (
                    <ChevronUp className="h-5 w-5 text-zinc-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-600" />
                  )}
                </button>

                {openCategories.includes(categoryIndex) && (
                  <div className="mt-4 space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="border border-zinc-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-zinc-900 text-left">
                            {item.question}
                          </h3>
                          {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                            <ChevronUp className="h-5 w-5 text-zinc-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-zinc-600" />
                          )}
                        </button>
                        {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                          <div className="p-4 bg-zinc-50">
                            <p className="text-zinc-600">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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
              Still have questions?
            </h2>
            <p className="text-xl text-zinc-600 mb-8">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 