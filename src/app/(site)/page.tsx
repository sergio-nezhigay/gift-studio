import React from "react";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Advantages from "@/sections/Advantages";
import Faq from "@/sections/Faq";
import Feedback from "@/sections/Feedback";
import Gallery from "@/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Faq />
      <Feedback />
      <Gallery />
    </>
  );
}
