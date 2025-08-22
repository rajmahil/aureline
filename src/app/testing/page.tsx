import CatelogueSlider from "@/components/catelogue-slider";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import ProductsSlider from "@/components/products-slider";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CatelogueSlider />
      <ProductsSlider />
    </>
  );
};

export default page;
