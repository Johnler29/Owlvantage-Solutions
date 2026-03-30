import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, User, Briefcase, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const leadFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  interestArea: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

const LeadCaptureForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      interestArea: "",
      message: "",
    },
  });

  const interestArea = watch("interestArea");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Lead captured:", data);
      toast.success("Thank you! We'll be in touch soon.");
      setIsSuccess(true);
      reset();

      if (onSuccess) {
        onSuccess(data);
      }

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          We've received your inquiry and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              First Name
            </label>
            <Input
              {...register("firstName")}
              placeholder="John"
              className="w-full"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <Input
              {...register("lastName")}
              placeholder="Doe"
              className="w-full"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </motion.div>

        {/* Email and Phone */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="inline h-4 w-4 mr-2" />
              Email
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="inline h-4 w-4 mr-2" />
              Phone
            </label>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </motion.div>

        {/* Company and Interest Area */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Briefcase className="inline h-4 w-4 mr-2" />
              Company
            </label>
            <Input
              {...register("company")}
              placeholder="Your Company"
              className="w-full"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Area of Interest
            </label>
            <Select value={interestArea} onValueChange={(value) => setValue("interestArea", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="cloud-services">Cloud Services</SelectItem>
                <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectContent>
            </Select>
            {errors.interestArea && (
              <p className="text-red-500 text-sm mt-1">{errors.interestArea.message}</p>
            )}
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <Textarea
            {...register("message")}
            placeholder="Tell us about your inquiry or training needs..."
            rows={5}
            className="w-full"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                ⏳
              </motion.div>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </motion.div>

        {/* Privacy Notice */}
        <motion.p
          variants={itemVariants}
          className="text-xs text-gray-500 dark:text-gray-400 text-center"
        >
          We respect your privacy. Your information will be used only to contact you about your inquiry.
        </motion.p>
      </form>
    </motion.div>
  );
};

export default LeadCaptureForm;
