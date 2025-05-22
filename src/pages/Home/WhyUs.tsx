import {
  ShieldCheck,
  Layers,
  UserCheck,
  Zap,
  Wallet,
  FileCheck2,
} from "lucide-react";
import SectionsCards from "../../components/SectionsCards";
import SectionSplit from "../../components/SectionSplit";
import HappyClient from "../../assets/images/medium-shot-people-chatting-work.jpg";
import HappyClientMobile from "../../assets/images/diverse-couple-colleagues-watching-discussing-content.jpg";

function WhyUs() {
  const whyChooseUs = [
    {
      title: "Trusted Experience",
      description:
        "With years of handling travel and legal documentation, we’ve built a reputation you can rely on.",
      icon: ShieldCheck,
    },
    {
      title: "All-in-One Services",
      description:
        "From visa processing to hotel reservations, we handle it all — so you don’t have to.",
      icon: Layers,
    },
    {
      title: "Personalized Support",
      description:
        "Get step-by-step assistance tailored to your travel goals, preferences, and timelines.",
      icon: UserCheck,
    },
    {
      title: "Fast & Reliable Processing",
      description:
        "We prioritize quick turnaround times without compromising accuracy or quality.",
      icon: Zap,
    },
    {
      title: "Affordable Rates",
      description:
        "Transparent pricing that fits your budget. No hidden fees, just great service.",
      icon: Wallet,
    },
    {
      title: "Verified Documentation",
      description:
        "All documents are 100% legitimate and compliant with international standards.",
      icon: FileCheck2,
    },
  ];

  return (
    <>
      <SectionSplit
        className="bg-muted/20"
        title="Why Choose Us"
        subtitle=""
        text=""
        imgSrc={HappyClient}
        imgSrcMobile={HappyClientMobile}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUs.map((item, idx) => (
            <SectionsCards key={idx} {...item} />
          ))}
        </div>
      </SectionSplit>
    </>
  );
}

export default WhyUs;
