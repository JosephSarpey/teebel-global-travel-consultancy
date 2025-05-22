import SectionSplit from "../../components/SectionSplit";
// import AboutImage from "../../assets/images/global-document-exchange.png";
import AboutImage2 from "../../assets/images/global-consultation.png";

function AboutPreview() {
  return (
    <>
      <SectionSplit
      className=""
        title="About Us"
        subtitle="Welcome to T&J"
        text="T&J Traveling Consultancy makes your travel and documentation journey smooth and stress-free. From visas and tickets to verified documents and work permits, our expert team guides you every step of the way. Start your global adventure with confidence — your journey begins here."
        imgSrc={AboutImage2}
        imgSrcMobile={AboutImage2}
        // imgSrc={AboutImage}
        // mdReverse
        // smReverse
      />
    </>
  );
}

export default AboutPreview;
