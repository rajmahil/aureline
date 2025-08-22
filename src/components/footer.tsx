import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/aureline-logo.png";
import FooterNewsletter from "./footer-newsletter";

const Footer = () => {
  return (
    <footer className="p-10 flex flex-col gap-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">Resources</h4>
            <ul className="uppercase text-sm">
              <li>Returns </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">Resources</h4>
            <ul className="uppercase text-sm">
              <li>Returns </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">Resources</h4>
            <ul className="uppercase text-sm">
              <li>Returns </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="Aureline Logo" className="!w-40" />

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground uppercase">
              Signup for our newsletter
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <p className="uppercase">© Auréline 2025.</p>
        <Link
          className="uppercase border-b border-transparent hover:border-current animations"
          target="_blank"
          href="https://www.306technologies.com/"
        >
          Built by 306 Technologies
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
