import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero-image.png";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="px-10 pb-10 h-screen">
      <div className=" w-full h-full grid grid-cols-5 bg-red-200 overflow-hidden">
        <div className="col-span-3">
          <Image src={heroImage} alt="Hero Image" className="object-cover" />
        </div>
        <div className="bg-brand-blue col-span-2 h-full w-full p-10 flex items-center justify-center ">
          <div className="flex flex-col gap-8 items-start justify-center max-w-[550px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-7xl">Whispers of Gold, Echoes of Forever</h1>
              <p className="text-xl">
                Each piece tells a story of beauty, devotion, and artistry, an
                intimate symphony in precious metals and stones.
              </p>
            </div>
            <Button size="xl">Shop by Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
