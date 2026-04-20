import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArticle from "@/components/FeaturedArticle";

import WhyOzoTech from "@/components/WhyOzoTech";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedArticle />
      <WhyOzoTech />
      <Services />
      <HowWeWork />
      <SelectedWork />
      <About />
      <WhoWeWorkWith />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
