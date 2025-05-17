import travelWithPassport from "../../src/assets/images/travel-with-passport.png";

function SectionSplit() {
  return (
    <>
      <section className="hero flex flex-col md:flex-row">
        <div className=""></div>
        <div className="">
          <img src={travelWithPassport} alt="" />
        </div>
      </section>
    </>
  );
}

export default SectionSplit;
