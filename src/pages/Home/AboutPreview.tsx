import SectionSplit from "../../components/SectionSplit";
// import AboutImage from "../../assets/images/global-document-exchange.png";
import AboutImage2 from "../../assets/images/global-consultation.png";

function AboutPreview() {
  return (
    <>
      <SectionSplit
        title="About Us"
        subtitle="WELCOME TO T&J"
        text="At T&J Traveling Consultancy, we believe that exploring the world should be exciting — not overwhelming. That’s why we’re committed to making your travel and documentation journey as smooth and stress-free as possible.
        From visa assistance and ticketing to document verification and work permits, our experienced team provides tailored support every step of the way. Whether you're applying for a passport, securing a travel insurance plan, or preparing documents for international employment, we guide you with clarity, reliability, and care
        With strong values of trust, transparency, and excellence, we’ve helped countless individuals take confident steps toward their global goals. Your journey starts here — and we're with you all the way."
        // imgSrc={AboutImage}
        imgSrc={AboutImage2}
        // mdReverse
        // smReverse
      />
    </>
  );
}

export default AboutPreview;
