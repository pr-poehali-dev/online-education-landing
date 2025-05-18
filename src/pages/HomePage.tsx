
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Directions from "@/components/Directions";
import Programs from "@/components/Programs";
import Instructors from "@/components/Instructors";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Directions />
        <Programs />
        <Instructors />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
