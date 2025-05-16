import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {

  return (
    <>
      <Header />
      <div className="grow-1">
        <div className="bg-brand text-base">Primary color</div>
        <div className="bg-secondary">secondary color</div>
        <div className="bg-background">Background color</div>
        <div className="bg-surface">Surface color</div>
        <div className="bg-muted">Muted color</div>
        <div className="bg-accent">Accent color</div>
        <div className="bg-border">Border color</div>
        <div className="text-section-title">Productivity</div>
        <div className="text-section-heading">Productivity is my surrender</div>
        <div className="text-base text-muted">Productivity is my goal</div>
        <i>small</i>
        <em>small</em>
        <b>small</b>
        <code>small</code>
        <q>small</q>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
