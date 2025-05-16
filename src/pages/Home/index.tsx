import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {

  return (
    <>
      <Header />
      <div className="grow-1">
        <div className="bg-brand">Primary color</div>
        <div className="bg-secondary">secondary color</div>
        <div className="bg-background">Background color</div>
        <div className="bg-surface">Surface color</div>
        <div className="bg-muted">Muted color</div>
        <div className="bg-accent">Accent color</div>
        <div className="bg-border">Border color</div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
