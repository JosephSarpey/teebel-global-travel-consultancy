import FormInput from "../../components/FormInput";
import SectionSplit from "../../components/SectionSplit";
import ContactImg from "../../assets/images/woman-having-online-meeting-work-str.jpg";
import ContactImgMobile from "../../assets/images/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg";

function ContactUs() {
  return (
    <SectionSplit
      className="bg-surface"
      title="Let’s Start Your Journey"
      subtitle="We’re ready to help you take the first step."
      text=""
      imgSrc={ContactImg}
      imgSrcMobile={ContactImgMobile}
      mdReverse
    >
      <FormInput />
    </SectionSplit>
  );
}

export default ContactUs;
