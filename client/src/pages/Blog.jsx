import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the fundamentals of building scalable web applications with React and Tailwind CSS.",
      category: "tech",
      author: "John Doe",
      date: "Mar 28, 2026",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Best Practices for API Integration",
      excerpt: "Discover the best practices for integrating third-party APIs into your applications safely and efficiently.",
      category: "tech",
      author: "Jane Smith",
      date: "Mar 25, 2026",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Mastering Responsive Design",
      excerpt: "A comprehensive guide to creating beautiful, responsive designs that work on all devices.",
      category: "design",
      author: "Alex Johnson",
      date: "Mar 22, 2026",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Performance Optimization Tips",
      excerpt: "Learn how to optimize your web applications for better performance and user experience.",
      category: "tech",
      author: "Mike Wilson",
      date: "Mar 20, 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "UI/UX Design Trends 2026",
      excerpt: "Explore the latest trends in user interface and user experience design for this year.",
      category: "design",
      author: "Sarah Lee",
      date: "Mar 18, 2026",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Security Best Practices for Web Apps",
      excerpt: "Essential security practices to protect your web applications and user data.",
      category: "security",
      author: "David Brown",
      date: "Mar 15, 2026",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      readTime: "9 min read",
    },
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "tech", label: "Technology" },
    { id: "design", label: "Design" },
    { id: "security", label: "Security" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Insights & Tech Tips
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Stay updated with the latest trends, best practices, and insights in technology and design.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-900"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-100 mb-8">
            Get the latest tech tips and insights delivered to your inbox.
          </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
