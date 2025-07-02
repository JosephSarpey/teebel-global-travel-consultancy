import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaPassport, FaBriefcase, FaFileAlt, FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const services = [
  { id: 1, name: 'Tickets & Visa Assistance', icon: <FaPlane className="mr-2" /> },
  { id: 2, name: 'Traveling Consultancy', icon: <FaPassport className="mr-2" /> },
  { id: 3, name: 'Work Permit & Employment', icon: <FaBriefcase className="mr-2" /> },
  { id: 4, name: 'Verified Legal Documents', icon: <FaFileAlt className="mr-2" /> },
];

const faqs = [
  {
    question: 'How far in advance should I book my consultation?',
    answer: 'We recommend booking at least 2-3 weeks in advance for standard services. For complex cases like work permits or visa applications, 4-6 weeks is ideal.'
  },
  {
    question: 'What documents do I need for my first appointment?',
    answer: 'Please bring a valid ID, passport photos, proof of address, and any relevant documents related to your service. Our team will provide a complete checklist after booking.'
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: 'Yes, you can reschedule your appointment up to 24 hours in advance. Please contact us through our customer service channels to make changes.'
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we offer expedited services for urgent cases. Additional fees may apply for rush processing.'
  },
  {
    question: 'How do I track the status of my application?',
    answer: 'You will receive regular email updates, and you can also check your application status through our client portal after creating an account.'
  }
];

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', formData);
    // Add your API call or form submission logic here
    alert('Thank you for your booking! We will contact you shortly to confirm your appointment.');
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Service</h1>
            <p className="text-xl text-gray-600">Schedule an appointment with our travel experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Appointment Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      required
                    >
                      <option value="">Choose a service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                          required
                        />
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                          required
                        />
                        <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                          placeholder="your@email.com"
                          required
                        />
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      placeholder="Any special requirements or questions you have..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-brand hover:bg-brand-dark text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQs */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm text-gray-500">123 Travel Street, Suite 100<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-800 text-white">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-500">info@teebeltravel.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FaQuestionCircle className="text-brand mr-2" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center w-full text-left focus:outline-none"
                      >
                        <span className="text-sm font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-2 text-gray-500">
                          {activeFaq === index ? '−' : '+'}
                        </span>
                      </button>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2"
                        >
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

export default BookingPage;
