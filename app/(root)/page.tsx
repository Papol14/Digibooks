"use client";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Specials from "../components/Specials";
import Featured from "../components/Featured";

const page = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
      <Footer />
    </div>
  );
};

export default page;
