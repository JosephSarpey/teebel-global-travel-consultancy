import RegionCard from "../../components/RegionCard";
import asiaImg from "../../assets/images/31202.jpg";
import europeImg from "../../assets/images/41609.jpg";
import africaImg from "../../assets/images/42938.jpg";
import naImg from "../../assets/images/11429595.png";

const regions = [
  {
    region: "Asia",
    image: asiaImg,
    countries: [
      "Dubai",
      "Qatar",
      "Kuwait",
      "Jordan",
      "Singapore",
      "Malaysia",
      "Bahrain",
      "China",
    ],
  },
  {
    region: "Europe",
    image: europeImg,
    countries: [
      "France",
      "Italy",
      "Germany",
      "UK",
      "Luxembourg",
      "Belarus",
      "Belgium",
      "Albania",
      "Hungary",
      "Romania",
      "Poland",
      "Denmark",
      "Norway",
    ],
  },
  {
    region: "Africa",
    image: africaImg,
    countries: ["South Africa"],
  },
  {
    region: "North America",
    image: naImg,
    countries: ["Canada"],
  },
];

function DestinationsHighLight() {
  return (
    <section className="py-12 bg-muted/10">
      <div className="m-auto flex flex-col items-center max-w-full gap-5 h-full px-5 md:px-10">
        <h1 className="text-secondary font-semibold text-sm text-center bg-muted rounded-lg p-2">
          Destinations We Offer
        </h1>
        <h2 className="text-brand font-extrabold text-2xl md:text-4xl text-center mb-4 md:hidden">
          Where Can You Go?
        </h2>
        <h2 className="hidden text-brand font-extrabold text-3xl md:text-4xl text-center mb-4 md:block">
          Discover Where We Can Take You
        </h2>
        <div className="group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, idx) => (
            <RegionCard key={idx} {...region} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationsHighLight;
