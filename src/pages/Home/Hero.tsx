import Button from "../../components/Button";
import heroImg from "../../assets/images/traveler-at-airport.png"; // adjust path if needed

function Hero() {
  return (
    <section className="hero w-full min-h-[60vh] md:h-screen bg-surface flex flex-col md:flex-row">
      {/* Image for mobile */}
      <div className="block md:hidden w-full">
        <img
          src={heroImg}
          alt="Traveler at airport"
          className="min-h-[40vh] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="container m-auto z-10">
        <div className="md:w-[50%] flex flex-col justify-center items-center md:items-start gap-5 py-8 md:py-0 md:gap-10">
          <h1 className="font-bold text-brand text-2xl md:text-5xl text-center md:text-left">
            Explore the World with Us
          </h1>
          <h2 className="font-bold text-muted text-lg md:text-2xl text-center md:text-left">
            TeeBel Global Travel Consultants – Your Trusted Partner in Travel &
            Documentation
          </h2>
          <div>
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Background image for md+ screens */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 mt-20">
        <img
          src={heroImg}
          alt="Traveler at airport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background opacity-10"></div>
      </div>
    </section>
  );
}

export default Hero;
