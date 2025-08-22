import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import featureImage from "../../public/feature-image.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="px-10 py-40">
      <div className="w-full grid grid-cols-2 max-w-7xl gap-20 mx-auto">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={featureImage}
            alt="Feature"
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>

        <div className="w-full h-full flex items-start justify-center flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-[550px]">
            <h2 className="text-6xl font-medium">
              Exploring the Beauty of Adornments
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mi
              rutrum, lobortis dolor nec, feugiat sapien. Vivamus dolor nisl,
              rutrum quis libero non, lobortis mollis arcu.
            </p>
          </div>
          <Button size="xl" variant={"link"} className="!px-0">
            <span>Shop by Collection</span>
            <ArrowRight className="!h-5 !w-5" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
