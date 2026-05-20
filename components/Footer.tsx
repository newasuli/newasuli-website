import Image from "next/image";
import TextLogo from "@/public/images/textlogo.webp";
import Logo from "@/public/images/logo.webp";
import React from "react";
import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";

// Social Media Icons as SVG
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.643 3.48.953 2.9 1.3 2.329 1.871 1.757 2.441 1.213 3.021.904 3.746.595 4.446.393 5.316.333 6.595.277 7.875.262 8.282.262 12s.015 4.125.072 5.405c.06 1.278.262 2.148.571 2.848.309.725.756 1.305 1.327 1.876.571.57 1.151 1.018 1.876 1.327.7.309 1.57.51 2.849.571 1.279.057 1.687.072 5.405.072s4.125-.015 5.406-.072c1.278-.06 2.148-.262 2.848-.571.725-.309 1.305-.756 1.876-1.327.57-.571 1.018-1.151 1.327-1.876.309-.7.51-1.57.571-2.849.057-1.279.072-1.687.072-5.405s-.015-4.125-.072-5.406c-.06-1.278-.262-2.148-.571-2.848-.309-.725-.756-1.305-1.327-1.876-.571-.57-1.151-1.018-1.876-1.327-.7-.309-1.57-.51-2.849-.571C16.125.277 15.717.262 12 .262s-4.125.015-5.406.072zM12 2.163c3.259 0 3.667.01 4.947.072 1.194.054 1.86.25 2.296.415.577.224.987.475 1.42.908.433.432.684.843.908 1.42.165.436.36 1.102.415 2.296.06 1.28.071 1.688.071 4.947s-.01 3.667-.071 4.947c-.054 1.194-.25 1.86-.415 2.296-.224.577-.475.987-.908 1.42-.432.433-.843.684-1.42.908-.436.165-1.102.36-2.296.415-1.28.06-1.688.071-4.947.071s-3.667-.01-4.947-.071c-1.194-.054-1.86-.25-2.296-.415-.577-.224-.987-.475-1.42-.908-.433-.432-.684-.843-.908-1.42-.165-.436-.36-1.102-.415-2.296-.06-1.28-.071-1.688-.071-4.947s.01-3.667.071-4.947c.054-1.194.25-1.86.415-2.296.224-.577.475-.987.908-1.42.432-.433.843-.684 1.42-.908.436-.165 1.102-.36 2.296-.415 1.28-.06 1.688-.071 4.947-.071z" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.44a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-stone-900 font-poppins text-white py-12 lg:px-28 px-12 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
      </div>
      <div className="flex flex-col gap-4 pb-4 relative z-10">
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
                AboutSection.tsx{" "}
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
              <Link className="hover-effect-underline" href="tel:+9779828711989" aria-label="Call Harisiddhi Newa Suli" title="Call Us">
                +977 9828711989
              </Link>
            </li>
            <li className="py-1">
              {" "}
              <Link
                href="mailto:info@newasuli.com"
                className="hover-effect-underline"
                target="_blank"
                aria-label="Email Harisiddhi Newa Suli"
                title="Email Us"
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
                aria-label="Visit Harisiddhi Newa Suli Facebook Page"
                title="Visit our Facebook"
              >
                <div className="w-8 h-8">
                  <FacebookIcon />
                </div>
              </Link>
            </li>
            <li className="ml-3">
              <Link
                href="https://www.instagram.com/harisiddhi.newa.suli/"
                target="_blank"
                aria-label="Visit Harisiddhi Newa Suli Instagram Page"
                title="Visit our Instagram"
              >
                <div className="w-8 h-8">
                  <InstagramIcon />
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-[0.5px] relative z-10"></div>
      <div className="flex justify-center flex-wrap md:gap-10 relative z-10">
        <p className="pt-4 text-xs">
          &copy;<CurrentYear /> HARISIDDHI NEWA SULI. ALL RIGHTS RESERVED
        </p>
        {/* <p className="pt-4 text-xs">Developed by Sapat, Suraj, Sagar.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
