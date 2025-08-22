"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const FooterNewsletter = () => {
  return (
    <div className="relative max-w-[400px]">
      <Input type="email" placeholder="Enter Your Email" />
      <ArrowRight
        className="absolute right-3 top-1/2 -translate-y-1/2"
        strokeWidth={1}
      />
    </div>
  );
};

export default FooterNewsletter;
