import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {

  return (
    <>
      <Header />
      <div className="grow-1">
        <div className="bg-primary">Primary color</div>
        <div className="bg-accent">Accent color</div>
        <div className="bg-highlight">Highlight color</div>
        <div className="bg-muted">Muted color</div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
