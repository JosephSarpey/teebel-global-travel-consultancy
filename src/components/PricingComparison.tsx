import { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 199,
    description: 'Essential services for individual travelers',
    features: [
      'Visa Application Assistance',
      'Document Checklist',
      'Basic Support',
      'Email Updates',
    ],
  },
  {
    name: 'Standard',
    price: 399,
    description: 'Comprehensive support for individuals and families',
    features: [
      'Everything in Basic',
      'Document Review',
      'Priority Processing',
      '24/7 Support',
      'Interview Preparation',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 699,
    description: 'End-to-end service for complex cases',
    features: [
      'Everything in Standard',
      'Dedicated Case Manager',
      'Expedited Processing',
      'In-Person Consultations',
      'Document Translation',
      'Airport Pickup Arrangement',
    ],
  },
];

const PricingComparison = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.name}
            whileHover={{ y: -5 }}
            className={`relative rounded-2xl p-6 border ${
              tier.popular
                ? 'border-brand shadow-lg transform scale-105 z-10 bg-white'
                : 'border-border bg-white'
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 -mt-3 mr-6">
                <span className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
            <p className="mt-2 text-gray-600">{tier.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-brand">${tier.price}</span>
              <span className="text-gray-500">/application</span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedTier(tier.name)}
              className={`mt-8 w-full py-3 px-4 rounded-md font-medium transition-colors ${
                tier.popular
                  ? 'bg-brand text-white hover:bg-brand/90'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Select {tier.name}
            </button>
          </motion.div>
        ))}
      </div>

      {selectedTier && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 bg-white rounded-xl border border-border"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Calculate Your Total Cost
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <label htmlFor="people" className="block text-sm font-medium text-gray-700">
                Number of People
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="people"
                  min="1"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(Number(e.target.value) || 1)}
                  className="w-24 px-3 py-2 border border-border rounded-md shadow-sm focus:ring-brand focus:border-brand"
                />
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Price per application</p>
              <p className="text-2xl font-bold text-brand">
                ${pricingTiers.find((t) => t.name === selectedTier)?.price}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-3xl font-bold text-brand">
                ${(pricingTiers.find((t) => t.name === selectedTier)?.price || 0) * numberOfPeople}
              </p>
            </div>
            <button className="px-6 py-3 bg-brand text-white font-medium rounded-md hover:bg-brand/90 transition-colors">
              Proceed with {selectedTier}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PricingComparison;
