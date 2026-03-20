import { Link } from "wouter";
import { Lightbulb, Target, Crown, Compass } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * About Page
 * Design Philosophy: Modern Corporate Minimalism
 * - Company overview and mission
 * - Vision statement
 * - Core values with icons
 * - Professional, clean layout
 */
export default function About() {
  const coreValues = [
    {
      icon: Compass,
      title: "Opportunity",
      description: "We create opportunities for growth, learning, and professional advancement.",
    },
    {
      icon: Lightbulb,
      title: "Wisdom",
      description: "We apply industry expertise and thoughtful solutions to every challenge.",
    },
    {
      icon: Crown,
      title: "Leadership",
      description: "We lead by example, setting standards for excellence in training and technology.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to delivering exceptional results and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#25badf]/5 to-[#1b2e45]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">About Owlvantage Solutions</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are a forward-thinking organization dedicated to empowering businesses and professionals through
              innovative learning solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Owlvantage Solutions was founded on the belief that organizations deserve learning and technology
                solutions that truly transform their capabilities. We combine deep industry expertise with innovative
                approaches to create programs that deliver measurable results.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our name reflects our core philosophy: the owl represents wisdom, knowledge, and insight. We help our
                clients "see smarter" by providing the tools, training, and guidance they need to thrive in an
                increasingly complex business environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we partner with leading organizations across industries to design and deliver learning solutions
                that drive business results and employee engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 card-hover">
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-gray-200">
                <div className="py-4 sm:py-0 px-4 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#25badf] leading-none">500+</div>
                  <p className="mt-3 text-gray-700 font-semibold">Organizations Served</p>
                </div>

                <div className="py-4 sm:py-0 px-4 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#25badf] leading-none">50K+</div>
                  <p className="mt-3 text-gray-700 font-semibold">Professionals Trained</p>
                </div>

                <div className="py-4 sm:py-0 px-4 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#25badf] leading-none">15+</div>
                  <p className="mt-3 text-gray-700 font-semibold">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-md mb-4 text-[#1b2e45]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To empower organizations and professionals through innovative learning and technology solutions that
                drive growth, enhance capabilities, and create lasting impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering programs that are relevant, engaging, and measurably effective in
                transforming how people work and learn.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-md mb-4 text-[#1b2e45]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To become the trusted leader in technology-driven learning and professional development, recognized for
                our innovation, expertise, and commitment to client success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where organizations have access to world-class learning solutions that enable their
                teams to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-10 h-10 text-[#25badf]" />
                    </div>
                    <div>
                      <h3 className="heading-sm mb-2 text-[#1b2e45]">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#1b2e45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how Owlvantage Solutions can help your organization achieve its learning and development goals.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-[#25badf] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1a8fb8] transition-all duration-300">
              Get in Touch
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
