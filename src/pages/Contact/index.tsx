import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[40vh] bg-surface flex items-center">
          <div className="container mx-auto px-4 z-10">
            <motion.h1 
              className="font-bold text-brand text-3xl md:text-5xl mb-4 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-muted text-lg md:text-xl max-w-3xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions? We're here to help. Get in touch with our team today.
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-6 text-brand">Send us a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6" role="alert">
                    <div className="flex items-center">
                      <FaCheck className="mr-2" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-muted mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="Tell us more about your needs..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-brand">Get in Touch</h2>
                  <p className="text-muted mb-8">
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand/10 p-3 rounded-full">
                      <FaMapMarkerAlt className="h-6 w-6 text-brand" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Our Office</h3>
                      <p className="text-muted">123 Travel Street, Suite 100<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand/10 p-3 rounded-full">
                      <FaPhone className="h-6 w-6 text-brand" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Phone</h3>
                      <p className="text-muted">+1 (555) 123-4567</p>
                      <p className="text-muted">+1 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand/10 p-3 rounded-full">
                      <FaEnvelope className="h-6 w-6 text-brand" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Email</h3>
                      <p className="text-muted">info@tjtebelconsultancy.com</p>
                      <p className="text-muted">support@tjtebelconsultancy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand/10 p-3 rounded-full">
                      <FaClock className="h-6 w-6 text-brand" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Working Hours</h3>
                      <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full bg-surface">
          <div className="h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.21520905654!2d-73.98784472429444!3d40.74844053932794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
