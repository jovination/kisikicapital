import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: March 14, 2025</p>

            <p className="text-gray-300">
              At Kisiki Capital, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">1. Information We Collect</h2>
            <p className="text-gray-300">
              We may collect personal information that you voluntarily provide to us when you register for an account,
              express interest in obtaining information about us or our services, or otherwise contact us. The personal
              information we collect may include:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Name, email address, and contact information</li>
              <li>Financial information for payment processing</li>
              <li>Account credentials</li>
              <li>Trading history and performance</li>
              <li>Information provided in communication with us</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300">We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your requests and inquiries</li>
              <li>Sending administrative information, updates, and marketing communications</li>
              <li>Monitoring and analyzing usage patterns and trends</li>
              <li>Protecting our services and users</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-white">3. Disclosure of Your Information</h2>
            <p className="text-gray-300">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-white">4. Security of Your Information</h2>
            <p className="text-gray-300">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, no data transmission over the Internet or storage system can be guaranteed to be 100% secure.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">5. Your Privacy Rights</h2>
            <p className="text-gray-300">
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to access, correct, or delete your personal information. To exercise these rights, please contact us
              using the information provided below.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-white">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions or concerns about this Privacy Policy, please contact us at
              privacy@kisikicapital.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

