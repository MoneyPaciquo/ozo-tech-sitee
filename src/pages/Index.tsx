import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Escalator from "@/components/Escalator";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Escalator />
      <Products />
      <Services />
      <LeadMagnet />
      <Footer />
    </div>
  );
};

export default Index;
