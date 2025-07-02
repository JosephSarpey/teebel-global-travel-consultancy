import { useEffect, useState, useMemo } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegionCard from "../../components/RegionCard";
import asiaImg from "../../assets/images/asia.jpg";
import europeImg from "../../assets/images/europe.jpg";
import africaImg from "../../assets/images/africa.jpg";
import naImg from "../../assets/images/north-america.jpg";
import worldMap from "../../assets/images/world-map.jpg";
import { FaSearch } from 'react-icons/fa';

interface Region {
  region: string;
  image: string;
  countries: string[];
  description?: string;
  popularDestinations?: string[];
}

const regions: Region[] = [
  {
    region: "Asia",
    image: asiaImg,
    description: "Experience the perfect blend of ancient traditions and modern wonders in Asia's most vibrant destinations.",
    popularDestinations: ["Dubai's Burj Khalifa", "Singapore's Gardens by the Bay", "Malaysia's Petronas Towers"],
    countries: [
      "Dubai", "Qatar", "Kuwait", "Jordan", "Singapore", 
      "Malaysia", "Bahrain", "China"
    ],
  },
  {
    region: "Europe",
    image: europeImg,
    description: "Discover Europe's rich history, stunning architecture, and diverse cultures across its iconic cities.",
    popularDestinations: ["Eiffel Tower, France", "Colosseum, Italy", "Big Ben, UK"],
    countries: [
      "France", "Italy", "UK", "Luxembourg", "Belgium", 
      "Albania", "Hungary", "Romania", "Poland", "Denmark", "Norway"
    ],
  },
  {
    region: "North America",
    image: naImg,
    description: "From bustling cities to breathtaking natural wonders, North America offers endless adventures.",
    popularDestinations: ["New York City", "Niagara Falls", "Grand Canyon"],
    countries: ["USA", "Canada"],
  },
  {
    region: "Africa",
    image: africaImg,
    description: "Experience the wild beauty, diverse cultures, and stunning landscapes of Africa.",
    popularDestinations: ["Cape Town", "Kruger National Park", "Victoria Falls"],
    countries: ["South Africa"],
  },
];

function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []); 

  const filteredRegions = useMemo(() => {
    if (!searchQuery.trim()) return regions;
    const query = searchQuery.trim().toLowerCase();
    return regions.filter(region => {
      const regionName = region.region.toLowerCase();
      return (
        regionName.includes(query) ||
        region.countries.some(country => 
          country.toLowerCase().includes(query)
        ) ||
        (region.popularDestinations?.some(dest => 
          dest.toLowerCase().includes(query)
        ) || false)
      );
    });
  }, [searchQuery]);

  const allCountries = useMemo(() => {
    return regions.flatMap(region => 
      region.countries.map(country => ({
        name: country,
        region: region.region
      }))
    );
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="relative bg-brand text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/src/assets/images/travel-world.jpg" 
            alt="World Travel" 
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the World with Us</h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-8">Your Journey Begins Here</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations or countries..."
                className="w-full px-6 py-4 rounded-full bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    setSearchQuery(prev => prev.trim());
                  }
                }}
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-full transition-colors shadow-md"
                onClick={() => {
                  setSearchQuery(prev => prev.trim());
                }}
                aria-label="Search destinations"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
            
            {/* Search Results Dropdown */}
            {searchQuery.trim() && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-2xl max-h-96 overflow-y-auto">
                {filteredRegions.length > 0 ? (
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                      Matching Destinations
                    </h3>
                    <div className="space-y-2">
                      {filteredRegions.map((region, idx) => (
                        <div 
                          key={idx}
                          className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedRegion(region);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <img 
                              src={region.image} 
                              alt={region.region}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{region.region}</h4>
                              <p className="text-sm text-gray-500">
                                {region.countries.slice(0, 3).join(', ')}
                                {region.countries.length > 3 ? '...' : ''}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : searchQuery.trim() ? (
                  <div className="p-4 text-center text-gray-500">
                    No destinations found matching "{searchQuery}"
                  </div>
                ) : null}
              </div>
            )}
          </div>
          
          <div className="w-20 h-1 bg-accent mx-auto mt-8"></div>
        </div>
      </section>

      {/* World Map Visualization */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand mb-8">Our Global Reach</h2>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={worldMap} 
              alt="World Map" 
              className="w-full h-auto opacity-90"
              loading="lazy"
            />
            {allCountries.map((country, idx) => (
              <div 
                key={idx}
                className="absolute text-xs font-medium bg-white/90 text-brand px-2 py-1 rounded-full shadow-sm cursor-pointer hover:bg-accent hover:text-white transition-colors"
                style={getCountryPosition(country.name)}
                title={country.name}
              >
                {country.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              {searchQuery ? 'Search Results' : 'Our Destinations'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover the world with T&J Traveling Consultancy. We offer comprehensive travel services to various destinations across the globe.
            </p>
          </div>
          
          {filteredRegions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredRegions.map((region, idx) => (
                <div 
                  key={idx} 
                  className="transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedRegion(region)}
                >
                  <RegionCard 
                    {...region}
                    className={selectedRegion?.region === region.region ? 'ring-2 ring-accent' : ''}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No destinations found matching "{searchQuery}"</p>
              <button 
                className="mt-4 text-brand hover:underline"
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </button>
            </div>
          )}

          {/* Region Details Modal */}
          {selectedRegion && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img 
                    src={selectedRegion.image} 
                    alt={selectedRegion.region}
                    className="w-full h-64 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <button 
                    onClick={() => setSelectedRegion(null)}
                    className="absolute top-4 right-4 bg-white/90 text-brand rounded-full p-2 hover:bg-accent hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand mb-4">{selectedRegion.region}</h3>
                  <p className="text-muted-foreground mb-6">{selectedRegion.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Popular Destinations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.popularDestinations?.map((dest, i) => (
                        <span key={i} className="bg-muted text-sm px-3 py-1 rounded-full">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Countries We Serve:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.countries.map((country, i) => (
                        <span key={i} className="bg-brand/10 text-brand text-sm px-3 py-1 rounded-full">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-brand text-white py-3 rounded-lg hover:bg-brand/90 transition-colors">
                    Plan Your Trip to {selectedRegion.region}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-brand mb-6 text-center">Why Choose Our Travel Services?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-secondary">Expert Guidance</h4>
                  <p className="text-muted-foreground">
                    Our experienced travel consultants provide personalized advice and support for all your travel needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-secondary">Comprehensive Services</h4>
                  <p className="text-muted-foreground">
                    From visa assistance to flight bookings, we handle all aspects of your travel arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

// Helper function to position country markers on the map
function getCountryPosition(country: string) {
  // These are rough estimates and would need adjustment based on your map
  const positions: Record<string, { top: string; left: string }> = {
    'USA': { top: '40%', left: '20%' },
    'Canada': { top: '20%', left: '20%' },
    'UK': { top: '30%', left: '45%' },
    'France': { top: '35%', left: '48%' },
    'Italy': { top: '42%', left: '52%' },
    'Germany': { top: '35%', left: '52%' },
    'Dubai': { top: '50%', left: '65%' },
    'Qatar': { top: '55%', left: '65%' },
    'China': { top: '45%', left: '80%' },
    'Singapore': { top: '65%', left: '80%' },
    'Malaysia': { top: '65%', left: '78%' },
    'South Africa': { top: '75%', left: '55%' },
  };

  return positions[country] || { top: '50%', left: '50%' };
}

export default DestinationsPage;
