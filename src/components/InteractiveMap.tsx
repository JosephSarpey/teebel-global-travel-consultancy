import { useState } from 'react';
import { motion } from 'framer-motion';

interface Country {
  id: string;
  name: string;
  services: string[];
}

const countries: Country[] = [
  { id: 'us', name: 'USA', services: ['Visa Processing', 'Work Permits', 'Student Visas'] },
  { id: 'gb', name: 'UK', services: ['Tier 2 Visas', 'Student Visas', 'Visitor Visas'] },
  { id: 'ca', name: 'Canada', services: ['Express Entry', 'Work Permits', 'Study Permits'] },
  { id: 'ae', name: 'UAE', services: ['Employment Visas', 'Tourist Visas', 'Business Visas'] },
  { id: 'sg', name: 'Singapore', services: ['Employment Pass', 'Dependent Pass', 'Student Pass'] },
  // Add more countries as needed
];

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="mt-8">
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        {/* This is a simplified representation - in a real app, you'd use a proper SVG map */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 p-4">
          {countries.map((country) => (
            <motion.div
              key={country.id}
              className={`p-2 rounded-md text-center cursor-pointer transition-all ${
                selectedCountry?.id === country.id 
                  ? 'bg-brand text-white' 
                  : hoveredCountry === country.id 
                    ? 'bg-brand/20' 
                    : 'bg-white hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCountry(country)}
              onMouseEnter={() => setHoveredCountry(country.id)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div className="text-lg font-medium">{country.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedCountry && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-brand mb-3">Services in {selectedCountry.name}</h3>
          <ul className="space-y-2">
            {selectedCountry.services.map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors">
            Get Started with {selectedCountry.name}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveMap;
