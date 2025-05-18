import { Airplay, Briefcase, FileText, ShieldCheck } from "lucide-react";
import ServiceCard from "../../components/ServiceCard";
import Button from "../../components/Button";

const services = [
  {
    title: "Visa & Ticket Assistance",
    description:
      "Reliable support with all your visa applications and flight arrangements.",
    icon: Briefcase,
  },
  {
    title: "Work Permit & Employment",
    description: "We help secure legit job offers and permits abroad.",
    icon: Airplay,
  },
  {
    title: "Legal & Travel Documents",
    description:
      "Passport, birth certificate, police report, attestation & more.",
    icon: FileText,
  },
  {
    title: "Trusted Guidance",
    description: "From start to finish, we’re with you through your journey.",
    icon: ShieldCheck,
  },
];

// - Tickets & Visa Assistance
// - Travel Consultancy
// - Work Permit & Employment Support
// - Legal and Travel Documentation
// - Passport Applications & Renewals
// - Birth & Marriage Certificates
// - Travel Insurance, Police Reports, Bank Statements
// - Certificate Attestation & Documentaries
// - Hotel Reservations

function ServicesPreview() {
  return (
    <>
      <section className="py-10 md:py-15 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <div className="m-auto flex flex-col items-center w-full gap-5 h-full px-5 md:px-10">
            <h1 className="text-secondary font-semibold text-sm text-center bg-muted rounded-lg p-2">
              Our Services
            </h1>
            <h2 className="text-brand font-bold text-2xl text-center">
              We provide complete travel support and legal documentation
              services to make your journey smooth, secure, and successful.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
            <div className="flex flex-row gap-5">
              <div className="button">
                <Button variant="outline" size="md">
                  Explore All Services
                </Button>
              </div>
              <div className="button">
                <Button
                  variant="primary"
                  size="md"
                  className="hover:bg-muted hover:text-secondary"
                >
                  Contact Us for a Custom Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPreview;
