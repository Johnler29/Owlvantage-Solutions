import { Link } from "wouter";
import { Calendar, Users, Award, Network } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Seminars Page
 * Design Philosophy: Modern Corporate Minimalism
 * - Featured programs showcase
 * - Upcoming seminars schedule
 * - Benefits of attending
 * - Professional layout with teal accents
 */
export default function Seminars() {
  const featuredPrograms = [
    {
      title: "Leadership for the Digital Age",
      description: "Develop leadership skills in a rapidly changing digital landscape.",
      duration: "2 days",
      level: "Intermediate",
    },
    {
      title: "Workplace Productivity Training",
      description: "Enhance team efficiency and individual productivity with proven strategies.",
      duration: "1 day",
      level: "Beginner",
    },
    {
      title: "Effective Team Management",
      description: "Master the art of leading and managing high-performing teams.",
      duration: "3 days",
      level: "Intermediate",
    },
    {
      title: "Modern Learning Technologies",
      description: "Explore cutting-edge technologies transforming corporate training.",
      duration: "2 days",
      level: "Advanced",
    },
  ];

  const upcomingSeminars = [
    {
      date: "July 15",
      title: "Leadership Fundamentals",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual & In-Person",
    },
    {
      date: "July 28",
      title: "Workplace Productivity",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual & In-Person",
    },
    {
      date: "August 10",
      title: "Digital Learning Strategies",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual & In-Person",
    },
  ];

  const benefits = [
    { icon: Award, text: "Learn from industry experts" },
    { icon: Users, text: "Gain practical, applicable skills" },
    { icon: Network, text: "Network with professionals" },
    { icon: Calendar, text: "Improve leadership and productivity" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#25badf]/5 to-[#1b2e45]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Seminars & Workshops</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover our comprehensive range of seminars and workshops designed to develop skills, enhance leadership,
              and drive organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular seminars and training programs designed for professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPrograms.map((program, idx) => (
              <div key={idx} className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="heading-sm text-[#1b2e45] flex-1">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-[#25badf]/10 text-[#25badf] px-3 py-1 rounded-full font-semibold">
                    {program.duration}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-semibold">
                    {program.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Upcoming Seminars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register for our upcoming seminars and start your learning journey today.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingSeminars.map((seminar, idx) => (
              <div key={idx} className="card-hover bg-white p-8 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div>
                    <div className="text-[#25badf] font-bold text-lg">{seminar.date}</div>
                    <p className="text-gray-600 text-sm">{seminar.time}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="heading-sm text-[#1b2e45] mb-2">{seminar.title}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Calendar size={16} />
                      {seminar.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <Link href="/contact">
                      <span className="btn-primary inline-block">Register Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Benefits of Attending</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what our participants gain from our seminars and workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="card-hover bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Icon className="w-10 h-10 text-[#25badf] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 font-medium">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 md:py-32 bg-[#1b2e45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Enhance Your Skills?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their careers through our seminars and workshops.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-[#25badf] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1a8fb8] transition-all duration-300">
              Book a Seminar
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
