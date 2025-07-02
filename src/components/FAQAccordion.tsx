import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does visa processing take?',
    answer: 'Processing times vary by country and visa type. Typically, it takes between 2-8 weeks. Contact us for specific timelines.'
  },
  {
    question: 'What documents do I need for a work permit?',
    answer: 'Requirements vary by country but generally include a job offer, educational certificates, and a clean criminal record.'
  },
  {
    question: 'Do you offer document translation services?',
    answer: 'Yes, we provide certified translation services for all required documents.'
  },
  {
    question: 'Can you help with family visa applications?',
    answer: 'Absolutely! We assist with all types of family-based visa applications.'
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-border rounded-lg overflow-hidden">
          <button
            className={`w-full px-6 py-4 text-left flex justify-between items-center ${
              openIndex === index ? 'bg-surface' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              className="text-brand"
            >
              ▼
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-2 text-gray-700">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
