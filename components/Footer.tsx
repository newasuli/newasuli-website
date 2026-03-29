import Image from "next/image";
import TextLogo from "@/public/images/textlogo.png";
import Logo from "@/public/images/logo.png";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 font-poppins text-white py-12 lg:px-28 px-12 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>
      <div className="flex flex-col gap-4 pb-4">
        <div className="flex gap-4 items-center justify-center mb-2">
          <Image src={Logo} className="w-24" alt="logo" />
          <Image src={TextLogo} className="w-32" alt="logo" />
        </div>
        {/* <section>
          <p className="font-bold py-4">Quick Links</p>
          <ul className="text-sm">
            <li className="py-1">
              {" "}
              <Link href="/" className="hover-effect-underline">
                Home{" "}
              </Link>
            </li>
            <li className="py-1">
              {" "}
              <Link href="/about" className="hover-effect-underline">
                About{" "}
              </Link>
            </li>

            <li className="py-1">
              <Link href="/menu" className="hover-effect-underline">
                Food & Drinks
              </Link>
            </li>
            <li className="py-1">
              <Link href="/gallery" className="hover-effect-underline">
                Gallery
              </Link>
            </li>
          </ul>
        </section> */}

        <section className="flex flex-col items-center">
          {/* <p className="font-medium mb-2 text-nowrap">Contacts</p> */}
          <ul className="flex flex-col items-center text-sm lg:text-based">
            <li className="py-1">Godawari Road, Lalitpur, Nepal</li>
            <li className="my-2">
              <Link className="hover-effect-underline" href="tel:982-8711989">
                +977 9828711989
              </Link>
            </li>
            <li className="py-1">
              {" "}
              <Link
                href="mailto:info@newasuli.com"
                className="hover-effect-underline"
                target="_blank"
              >
                info@newasuli.com
              </Link>
            </li>
          </ul>
        </section>

        {/* <section>
          <p className="font-medium mb-2">Opening Hours</p>
          <ul className="text-sm">
            <li className="">Sun - Sat : 7am to 10pm</li>
          </ul>
        </section> */}

        <section className="flex flex-col items-center">
          {/* <p className="font-medium mb-2">Follow Us</p> */}
          <ul className="text-sm flex ">
            <li>
              <Link
                href="https://www.facebook.com/harisiddhinewasuli"
                target="_blank"
              >
                <FaFacebookSquare size={32} />
              </Link>
            </li>
            <li className="ml-3">
              <Link
                href="https://www.instagram.com/harisiddhi.newa.suli/"
                target="_blank"
              >
                <FaInstagram size={32} />
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-[0.5px] "></div>
      <div className="flex justify-center flex-wrap md:gap-10 ">
        <p className="pt-4 text-xs">
          &copy;{new Date().getFullYear()} HARISIDDHI NEWA SULI. ALL RIGHTS
          RESERVED
        </p>
        {/* <p className="pt-4 text-xs">Developed by Sapat, Suraj, Sagar.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
