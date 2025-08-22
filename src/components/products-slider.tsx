"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsSlider = () => {
  return (
    <section className="px-10 py-40">
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <div className="flex flex-col gap-16">
          <div className="flex flex-row gap-2  items-center justify-between">
            <h2 className="text-6xl font-medium">Our Curated Treasures</h2>
            <div className="flex flex-row gap-2 items-center">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="w-full py-4 bg-blue-200">123</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="w-full py-4 bg-blue-200">123</div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="w-full py-4 bg-blue-200">123</div>
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default ProductsSlider;
