import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BarChart2, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "Former hedge fund manager with over 15 years of experience in financial markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Trading Officer",
    bio: "Professional trader with expertise in forex and commodities markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
  },
  {
    name: "Michael Chen",
    role: "Head of Risk Management",
    bio: "Specializes in developing risk management strategies for prop trading firms.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Trader Development",
    bio: "Passionate about helping traders reach their full potential through education and mentorship.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
  },
]

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Kisiki Capital was founded with a mission to provide traders with the capital they need to succeed.",
  },
  {
    year: "2019",
    title: "First 100 Traders Funded",
    description: "Reached the milestone of funding our first 100 traders across various markets.",
  },
  {
    year: "2020",
    title: "Trading Academy Launched",
    description: "Launched our comprehensive trading academy to help traders improve their skills.",
  },
  {
    year: "2021",
    title: "Expanded to Global Markets",
    description: "Expanded our operations to serve traders from over 50 countries worldwide.",
  },
  {
    year: "2022",
    title: "Instant Funding Program",
    description: "Introduced our innovative Instant Funding program for experienced traders.",
  },
  {
    year: "2023",
    title: "Reached $5M in Payouts",
    description: "Celebrated reaching $5 million in total payouts to our successful traders.",
  },
]

const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our platform to our support.",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "We continuously innovate to provide the best trading experience for our clients.",
    icon: BarChart2,
  },
  {
    title: "Community",
    description: "We foster a supportive community where traders can learn and grow together.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="container relative z-20 mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 gold-text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              About Kisiki Capital
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              We're on a mission to empower traders with the capital and resources they need to succeed in the financial
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-zinc-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2018, Kisiki Capital was born out of a simple observation: many talented traders lack the
                  capital needed to generate meaningful returns. Our founder, John Smith, experienced this challenge
                  firsthand during his early trading career.
                </p>
                <p>
                  After building a successful career as a hedge fund manager, John decided to create a platform that
                  would provide traders with the capital they need to succeed, while also offering education and
                  mentorship to help them develop their skills.
                </p>
                <p>
                  What started as a small operation funding a handful of traders has grown into a global community of
                  over 1,000 funded traders across more than 50 countries. We've paid out millions in profits to our
                  traders and continue to innovate with new funding models and educational resources.
                </p>
                <p>
                  Today, Kisiki Capital stands as one of the leading proprietary trading firms, known for our
                  transparent terms, competitive profit splits, and commitment to trader success.
                </p>
              </div>
              <div className="mt-8">
                <Link href="#packages">
                  <Button className="rounded-full gold-button-gradient text-black">
                    Explore Our Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
                alt="Traders at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Values</h2>
            <p className="mb-16 text-lg text-gray-300">These core values guide everything we do at Kisiki Capital</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-primary-900/20 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-primary-600/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-primary-900/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600/20 text-primary-500">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Team</h2>
            <p className="mb-16 text-lg text-gray-300">Meet the experienced professionals behind Kisiki Capital</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-zinc-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary-500">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Journey</h2>
            <p className="mb-16 text-lg text-gray-300">Key milestones in our growth and evolution</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary-600 to-primary-600/0 md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="md:w-1/2">
                    <div
                      className={`relative flex flex-col items-center ${
                        index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                      }`}
                    >
                      <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-xl font-bold text-black">
                        {milestone.year}
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-white">{milestone.title}</h3>
                      <p className="mt-2 max-w-md text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden h-0.5 w-12 bg-primary-600/50 md:block"></div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900/20 to-primary-900/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary-500/20 bg-black/50 p-8 text-center backdrop-blur-sm md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Join Our Community?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Take the first step towards becoming a funded trader with Kisiki Capital.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full rounded-full gold-button-gradient text-black sm:w-auto">
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-primary-600/50 text-primary-500 hover:bg-primary-950 hover:text-primary-400 sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

