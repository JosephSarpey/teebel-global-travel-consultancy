import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaPassport, FaBriefcase, FaFileAlt, FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InteractiveMap from '../../components/InteractiveMap';
import FAQAccordion from '../../components/FAQAccordion';
import PricingComparison from '../../components/PricingComparison';
import { Link } from 'react-router-dom';

import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    icon: <FaPlane className="w-12 h-12 text-brand" />,
    title: "Tickets & Visa Assistance",
    description: "Comprehensive support for flight bookings and visa processing.",
    details: "Our team handles all aspects of your travel documentation, from visa applications to flight bookings, ensuring a hassle-free experience. We provide personalized assistance based on your destination and travel needs.",
    popular: true
  },
  {
    icon: <FaPassport className="w-12 h-12 text-brand" />,
    title: "Traveling Consultancy",
    description: "Expert advice and planning for your dream vacation or business trip.",
    details: "Get customized travel itineraries, accommodation recommendations, and local insights. Our consultants have first-hand experience with global destinations to provide you the best travel advice."
  },
  {
    icon: <FaBriefcase className="w-12 h-12 text-brand" />,
    title: "Work Permit & Employment",
    description: "Assistance with work permits and employment opportunities abroad.",
    details: "We guide you through the entire work visa process, from document preparation to interview coaching. Our network of international employers helps connect you with global opportunities."
  },
  {
    icon: <FaFileAlt className="w-12 h-12 text-brand" />,
    title: "Verified Legal Documents",
    description: "Authentication and processing of all necessary travel and legal documents.",
    details: "Our document verification service ensures all your paperwork meets international standards. We handle everything from birth certificates to police clearances with complete confidentiality."
  }
];

const allServices = [
  "Birth Certificate", "Passport Application", "Travel Insurance", 
  "Bank Statement Documentation", "Certificate Attestation", 
  "Marriage Certificate", "Hotel Reservations", "Police Report"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [compareServices, setCompareServices] = useState<number[]>([]);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const toggleCompare = (index: number) => {
    setCompareServices(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index].slice(-3) // Limit to comparing 3 services
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Your Trusted Partner in Travel & Documentation
          </p>
        </motion.section>

        {/* Service Comparison Tool */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-brand">Compare Services</h2>
            {compareServices.length > 0 && (
              <button 
                onClick={() => setCompareServices([])}
                className="text-sm text-brand hover:underline"
              >
                Clear Selection
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`border rounded-lg p-4 transition-all ${
                  compareServices.includes(index) 
                    ? 'border-brand shadow-lg' 
                    : 'border-border hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="font-medium text-lg">{service.title}</h3>
                  </div>
                  <button
                    onClick={() => toggleCompare(index)}
                    className={`p-1 rounded-full ${
                      compareServices.includes(index)
                        ? 'bg-brand text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {compareServices.includes(index) ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </button>
                </div>
                {compareServices.includes(index) && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm text-gray-600">{service.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {compareServices.length > 1 && (
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-brand mb-4">Compare Selected Services</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Feature</th>
                      {compareServices.map(index => (
                        <th key={index} className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                          {services[index].title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-500">Description</td>
                      {compareServices.map(index => (
                        <td key={index} className="px-4 py-3 text-sm text-gray-700">
                          {services[index].description}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-500">Best For</td>
                      {compareServices.map(index => (
                        <td key={index} className="px-4 py-3 text-sm text-gray-700">
                          {services[index].popular ? 'Most Popular' : 'Specific Needs'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-6 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors">
                  Get Started with Selected Services
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Interactive Map */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-brand mb-8">Global Coverage</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide comprehensive travel and documentation services across multiple countries. 
            Click on a country to see the specific services we offer there.
          </p>
          <InteractiveMap />
        </section>

        {/* Main Services with Expandable Details */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-brand mb-8">Our Core Services</h2>
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${service.popular ? 'bg-brand/10' : 'bg-gray-100'}`}>
                      {service.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-brand">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  {expandedService === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-2 border-t border-border"
                  >
                    <p className="text-gray-700 mb-4">{service.details}</p>
                    <div className="flex space-x-4">
                      <button className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors">
                        Learn More
                      </button>
                      <button className="px-4 py-2 border border-brand text-brand rounded-md hover:bg-brand/5 transition-colors">
                        Get a Quote
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-brand mb-2">Pricing Plans</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our signature service quality.
          </p>
          <PricingComparison />
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-brand mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </section>

        {/* All Services Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-brand mb-8">All Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-md text-center text-gray-800 border border-border hover:shadow-md transition-colors"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-brand mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts is here to guide you through every step of your travel and documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/book-consultation" 
              className="px-8 py-3 bg-brand text-white font-medium rounded-md hover:bg-brand/90 transition-colors text-center"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-brand text-brand font-medium rounded-md hover:bg-brand/5 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;