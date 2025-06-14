import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Use your own images from /src/assets/images/
const team = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/src/assets/images/happy-african-american-businesswoman-working-touchpad-office.jpg",
  },
  {
    name: "John Smith",
    role: "Travel Consultant",
    image: "/src/assets/images/portrait-business-person-work.jpg",
  },
  {
    name: "Emily Lee",
    role: "Customer Experience Lead",
    image: "/src/assets/images/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg",
  },
];

function AboutPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-brand text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/src/assets/images/about-hero.jpg"
          alt="T&J Flyer"
          className="w-full h-full object-cover absolute inset-0 z-0"
          loading="eager"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About T&J Traveling Consultancy</h1>
          <p className="text-xl md:text-2xl font-medium text-accent mb-8">
            Your Journey, Our Passion
          </p>
        </div>
        <div className="w-20 h-1 bg-accent mx-auto mt-8"></div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            T&J Traveling Consultancy is dedicated to making your travel dreams a reality. With years of experience and a passion for exploration, we provide expert guidance, personalized itineraries, and seamless travel experiences for adventurers and families alike.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand mb-4 text-center">Our Story</h3>
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            Founded in 2015, T&J Traveling Consultancy started as a small team of passionate travelers. Over the years, we have grown into a trusted partner for hundreds of clients, helping them discover the world’s most beautiful destinations with ease and confidence.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand/10 rounded-xl p-6 text-center shadow flex flex-col items-center">
              <img
                src="/src/assets/images/global-consultation.png"
                alt="Global Expertise"
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h4 className="font-bold text-brand mb-2">Global Expertise</h4>
              <p className="text-gray-700">Our team has traveled extensively and brings firsthand knowledge to every itinerary.</p>
            </div>
            <div className="bg-brand/10 rounded-xl p-6 text-center shadow flex flex-col items-center">
              <img
                src="/src/assets/images/travel-with-passport.png"
                alt="Personalized Service"
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h4 className="font-bold text-brand mb-2">Personalized Service</h4>
              <p className="text-gray-700">Every trip is tailored to your unique interests, budget, and schedule.</p>
            </div>
            <div className="bg-brand/10 rounded-xl p-6 text-center shadow flex flex-col items-center">
              <img
                src="/src/assets/images/global-document-exchange.png"
                alt="Expert Guidance"
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h4 className="font-bold text-brand mb-2">Expert Guidance</h4>
              <p className="text-gray-700">We handle all the details, so you can focus on enjoying your journey.</p>
            </div>
            <div className="bg-brand/10 rounded-xl p-6 text-center shadow flex flex-col items-center">
              <img
                src="/src/assets/images/traveler-at-airport.png"
                alt="Trusted by Travelers"
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h4 className="font-bold text-brand mb-2">Trusted by Travelers</h4>
              <p className="text-gray-700">Our clients return to us year after year for memorable travel experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-brand/20"
                  loading="lazy"
                />
                <h4 className="font-bold text-brand mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-brand text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h3>
          <p className="text-lg md:text-xl mb-6">Contact us today and let’s make your dream trip a reality!</p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-accent/80 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;