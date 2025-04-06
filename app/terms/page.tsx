import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary-500 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: March 14, 2025</p>

            <p className="text-gray-300">
              Please read these Terms of Service ("Terms") carefully before using the Kisiki Capital website or any of
              our services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to all the
              terms and conditions, you may not access or use our services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">2. Description of Services</h2>
            <p className="text-gray-300">
              Kisiki Capital provides proprietary trading services, including but not limited to, funded trading
              accounts, educational resources, and trading tools. We reserve the right to modify, suspend, or
              discontinue any part of our services at any time.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">3. Eligibility</h2>
            <p className="text-gray-300">
              You must be at least 18 years old to use our services. By using our services, you represent and warrant
              that you meet all eligibility requirements.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">4. Account Registration</h2>
            <p className="text-gray-300">
              To access certain features of our services, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">5. Trading Rules and Guidelines</h2>
            <p className="text-gray-300">
              When using our funded trading accounts, you agree to abide by all trading rules and guidelines specified
              for your account type. Violation of these rules may result in the termination of your account and
              forfeiture of any profits.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">6. Risk Disclosure</h2>
            <p className="text-gray-300">
              Trading in financial markets involves significant risk. Past performance is not indicative of future
              results. You should carefully consider your investment objectives, level of experience, and risk appetite
              before trading.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">7. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, features, and functionality of our services, including but not limited to text, graphics,
              logos, and software, are owned by Kisiki Capital and are protected by copyright, trademark, and other
              intellectual property laws.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">8. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall Kisiki Capital be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
              losses.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">9. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York,
              without regard to its conflict of law provisions.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">10. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
              posting the new Terms on our website. Your continued use of our services after such modifications will
              constitute your acknowledgment of the modified Terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">11. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at legal@kisikicapital.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

