import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * NotFound Page (404)
 * Design Philosophy: Modern Corporate Minimalism
 * - Professional 404 error page
 * - Clear navigation back to home
 * - Helpful links to main sections
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* 404 Section */}
      <section className="flex-1 py-20 md:py-32 bg-gradient-to-br from-[#25badf]/5 to-[#1b2e45]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-9xl font-bold text-[#25badf] mb-4">404</div>
              <h1 className="heading-xl mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">
                Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 mb-12">
              <Link href="/">
                <span className="inline-flex items-center gap-2 bg-[#25badf] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1a8fb8] transition-all duration-300">
                  Go to Home <ArrowRight size={18} />
                </span>
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="heading-sm mb-6 text-[#1b2e45]">Popular Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/about">
                  <span className="block p-4 bg-white rounded border border-gray-200 hover:border-[#25badf] hover:text-[#25badf] transition-all text-gray-700 font-medium">
                    About Us
                  </span>
                </Link>
                <Link href="/services">
                  <span className="block p-4 bg-white rounded border border-gray-200 hover:border-[#25badf] hover:text-[#25badf] transition-all text-gray-700 font-medium">
                    Services
                  </span>
                </Link>
                <Link href="/seminars">
                  <span className="block p-4 bg-white rounded border border-gray-200 hover:border-[#25badf] hover:text-[#25badf] transition-all text-gray-700 font-medium">
                    Seminars
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block p-4 bg-white rounded border border-gray-200 hover:border-[#25badf] hover:text-[#25badf] transition-all text-gray-700 font-medium">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
