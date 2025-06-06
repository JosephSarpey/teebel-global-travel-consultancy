import TestimonialItem from "../../components/TestimonialItem";
import SectionSplit from "../../components/SectionSplit";
import TestimonialImg from "../../assets/images/portrait-young-school-student-square.jpg";
import TestimonialImgMobile from "../../assets/images/travel-world-mini.jpg";

const testimonies = [
  {
    title: "Joseph",
    testify: "TeeBel Global Travel Consultants made my travel process seamless and stress-free!",
  },
  {
    title: "Emmanuel",
    testify: "Professional and reliable service. Highly recommended!",
  },
  {
    title: "John",
    testify: "They handled my documents quickly and efficiently.",
  },
  { title: "Fatima", testify: "Great support from start to finish!" },
];

function Testimonials() {
  return (
    <>
      <SectionSplit
        className="bg-surface"
        title="Testimonials"
        subtitle="What Our Clients Say"
        imgSrc={TestimonialImg}
        imgClassName="rounded-3xl shadow-xl md:object-contain"
        imgSrcMobile={TestimonialImgMobile}
        mdReverse
        text=""
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonies.map((item, idx) => (
            <TestimonialItem key={idx} {...item} />
          ))}
        </div>
      </SectionSplit>
    </>
  );
}

export default Testimonials;
