import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import ServicesPreview from "./ServicesPreview";
import DestinationsHighLight from "./DestinationsHighLight";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <DestinationsHighLight />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default HomePage;
