import { Link } from "wouter";
import { BookOpen, Code, Users, BarChart3, Zap, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Services Page
 * Design Philosophy: Modern Corporate Minimalism
 * - Three major service categories
 * - Detailed service descriptions
 * - Professional layout with teal accents
 */
export default function Services() {
  const learningServices = [
    {
      icon: BookOpen,
      title: "Corporate Training Programs",
      description: "Professional training tailored for organizational growth and employee development.",
    },
    {
      icon: Users,
      title: "Professional Development Courses",
      description: "Courses designed to upgrade workplace skills and enhance career prospects.",
    },
    {
      icon: Zap,
      title: "Online & Blended Learning",
      description: "Flexible digital and hybrid learning solutions that fit modern work environments.",
    },
  ];

  const workshopServices = [
    {
      icon: BarChart3,
      title: "Skills Enhancement Workshops",
      description: "Hands-on sessions for practical skills development in specialized areas.",
    },
    {
      icon: Shield,
      title: "Leadership & Management Seminars",
      description: "Programs designed to strengthen leadership capabilities and management effectiveness.",
    },
    {
      icon: Code,
      title: "Customized Training Sessions",
      description: "Training designed specifically for your company's unique needs and challenges.",
    },
  ];

  const itServices = [
    {
      title: "Learning Management System Implementation",
      description:
        "Deployment and customization of LMS platforms for organizations seeking to centralize and scale their training programs.",
    },
    {
      title: "E-learning Platform Development",
      description:
        "Custom learning portals and training systems built to your specifications and integrated with existing systems.",
    },
    {
      title: "IT Consulting for Training Solutions",
      description:
        "Technology consulting for modern learning environments, including infrastructure planning and implementation.",
    },
  ];

  const advisoryServices = [
    {
      title: "Curriculum & Training Program Design",
      description: "Strategic design of comprehensive training programs aligned with organizational objectives.",
    },
    {
      title: "Learning Program Evaluation",
      description: "Assessment and evaluation of existing programs to identify improvement opportunities.",
    },
    {
      title: "Strategic IT Integration for Learning",
      description: "Planning and implementation of technology solutions to enhance learning effectiveness.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#25badf]/5 to-[#1b2e45]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive solutions across learning, technology, and professional development designed to drive
              organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Solutions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-4 text-[#1b2e45]">Learning Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive training programs designed to build skills and drive organizational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <Icon className="w-12 h-12 text-[#25badf] mb-4" />
                  <h3 className="heading-sm mb-3 text-[#1b2e45]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops & Seminars */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-4 text-[#1b2e45]">Workshops & Seminars</h2>
            <p className="text-lg text-gray-600 mb-8">
              Interactive sessions and seminars focused on practical skill development and leadership excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card-hover bg-white p-8 rounded-lg border border-gray-200">
                  <Icon className="w-12 h-12 text-[#25badf] mb-4" />
                  <h3 className="heading-sm mb-3 text-[#1b2e45]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-4 text-[#1b2e45]">IT Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Technology solutions and consulting services to modernize your learning infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            {itServices.map((service, idx) => (
              <div key={idx} className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="heading-sm mb-3 text-[#1b2e45]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="heading-lg mb-4 text-[#1b2e45]">Advisory Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Strategic consulting to optimize your learning and development initiatives.
            </p>
          </div>

          <div className="space-y-6">
            {advisoryServices.map((service, idx) => (
              <div key={idx} className="card-hover bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="heading-sm mb-3 text-[#1b2e45]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#1b2e45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your organization and how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-[#25badf] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1a8fb8] transition-all duration-300">
              Schedule a Consultation
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
