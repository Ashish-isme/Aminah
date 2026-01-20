import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Steps from "./components/sections/Steps";
import FeatureShowcase from "./components/sections/FeatureShowcase";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Steps />
        <FeatureShowcase />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
