import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

/**
 * Contact Page
 * Design Philosophy: Modern Corporate Minimalism
 * - Contact form with validation
 * - Company contact information
 * - Social media links
 * - Professional layout with teal accents
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#25badf]/5 to-[#1b2e45]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Have questions or ready to discuss your learning and development needs? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-[#25badf] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1b2e45] mb-2">Email</h3>
                      <a
                        href="mailto:info@owlvantage.com"
                        className="text-gray-600 hover:text-[#25badf] transition-colors"
                      >
                        info@owlvantage.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-[#25badf] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1b2e45] mb-2">Phone</h3>
                      <p className="text-gray-600">Available during business hours</p>
                      <p className="text-gray-600 text-sm mt-2">Contact us for phone number</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-[#25badf] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1b2e45] mb-2">Location</h3>
                      <p className="text-gray-600">Serving clients globally</p>
                      <p className="text-gray-600 text-sm mt-2">Virtual and in-person options available</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-[#25badf]/10 p-8 rounded-lg border border-[#25badf]/20">
                  <h3 className="font-bold text-[#1b2e45] mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-[#25badf] hover:underline font-medium"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="block text-[#25badf] hover:underline font-medium"
                      aria-label="Facebook"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="block text-[#25badf] hover:underline font-medium"
                      aria-label="Twitter"
                    >
                      Twitter/X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1b2e45] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25badf] focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1b2e45] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25badf] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1b2e45] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25badf] focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#1b2e45] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25badf] focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1b2e45] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25badf] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll get back to you as soon as possible. Thank you for reaching out!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1b2e45] mb-6">Prefer to Call?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to discuss your learning and development needs. Reach out via email or contact form above.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
