"use client";
import Image from "next/image";
import about from "@/public/images/image1.jpg";
import food from "@/public/images/image2.jpg";
import Link from "next/link";
import { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaDiamond } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "motion/react";

const DUMMY_RESTAURANT_REVIEWS = [
  {
    name: "Aarav Sharma",
    comment:
      "The food was absolutely delicious and full of flavor. The service was quick, and the staff was very friendly. I would definitely visit again.",
  },
  {
    name: "Nisha Karki",
    comment:
      "Great ambiance and a cozy environment. The menu had plenty of options, and everything we ordered tasted fresh and well-prepared.",
  },
  {
    name: "Rohan Thapa",
    comment:
      "Overall a wonderful experience. The portions were generous, prices were reasonable, and the quality of food exceeded my expectations.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollYProgressTransformValue = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 2],
  );
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const ctx = gsap.context(() => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: "#heroSection1",
  //           start: "top 80%",
  //           end: "bottom -5%",
  //           toggleActions: "play reverse play reverse",
  //         },
  //       })
  //       .from("#green", { x: -300, opacity: 0, duration: 0.6 })
  //       .from("#blue", { x: 300, opacity: 0, duration: 0.6 }, "-=0.4");

  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: "#heroSection2",
  //           start: "top 100%",
  //           end: "bottom -5%",
  //           toggleActions: "play reverse play reverse",
  //         },
  //       })
  //       .from("#red", { duration: 0.6, x: -500, opacity: 0 })
  //       .from("#yellow", { duration: 0.6, x: 500, opacity: 0 }, "-=0.5");
  //   }, containerRef);
  //   ScrollTrigger.refresh();

  //   return () => ctx.revert();
  // }, []);

  return (
    <>
      <div className="h-full lg:h-screen relative">
        <section className="w-full h-full fixed inset-0 -z-10">
          <motion.section
            className="w-full h-full"
            style={{ scale: scrollYProgressTransformValue, originY: 0 }}
          >
            <Image
              src={"/images/home_bg.png"}
              alt="Newa Suli Restaurant"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </motion.section>
        </section>
        <motion.section className="w-full h-full bg-black/20 flex items-center justify-center relative">
          <div className="sticky top-1/2 transform -translate-y-1/2 px-4">
            <h3 className="text-2xl lg:text-4xl text-gray-50/80 text-center font-newsreader font-bold mb-4">
              Welcome to
            </h3>
            <h2 className="text-4xl lg:text-7xl text-gray-50/80 text-center font-newsreader font-bold tracking-tight lg:tracking-wide">
              Harisiddhi Newa Suli
            </h2>
          </div>
        </motion.section>
      </div>
      {/* <section className="w-full h-20 bg-red"></section> */}
      <section className="w-full bg-white overflow-hidden">
        <div className="w-full h-full">
          <div className="h-1/2 flex flex-col-reverse lg:flex-row">
            <div className="flex-1 min-h-[500px] flex gap-2 relative">
              <Image
                src={about}
                alt="About Newa Suli"
                className="w-full object-cover"
              />
            </div>
            <div
              ref={container1Ref}
              className="flex-1 flex flex-col justify-center py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{
                  once: true,
                  amount: 0.1,
                  margin: "10px 0px -20px 0px",
                }}
                className="p-16"
              >
                <h3 className="text-gray-800 text-3xl lg:text-5xl font-newsreader font-medium mb-6">
                  About Harisiddhi Newa Suli
                </h3>
                <p className="text-gray-500 text-base font-poppins font-light italic leading-relaxed">
                  Summary of what newa suli is all about with complementing
                  picture or pictures subtle animations which links to second
                  page (about)
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center text-gray-400 font-medium border border-gray-400 px-4 py-1 mt-4 hover:bg-dark hover:text-white transition-all duration-500"
                >
                  <span>Read More</span>
                  <IoIosArrowRoundForward
                    size={32}
                    className="inline-block ml-0.5 text-xl p-0"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col lg:flex-row">
            <div
              ref={container2Ref}
              className="flex-1 flex flex-col justify-center py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{
                  once: true,
                  amount: 0.1,
                  margin: "10px 0px -20px 0px",
                }}
                className="p-16"
              >
                <h3 className="text-gray-800 text-3xl lg:text-5xl font-newsreader font-medium mb-6">
                  Our Foods
                </h3>
                <p className="text-gray-500 text-base font-poppins font-light italic leading-relaxed">
                  brief summary of the foods newa suli offers with complementing
                  picture or pictures with subtle animation. This links to third
                  page food & drinks.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center text-gray-400 font-medium border border-gray-400 self-start px-4 py-2 mt-4 hover:bg-dark hover:text-white transition-all duration-500"
                >
                  <span>Explore Menu</span>
                  <IoIosArrowRoundForward
                    size={32}
                    className="inline-block ml-1 text-xl"
                  />
                </Link>
              </motion.div>
            </div>
            <div className="flex-1 min-h-[500px] bg-gray-300 rounded-lg relative">
              <Image
                src={"/images/newasuli_img_7.jpg"}
                alt="About Newa Suli"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-dark border-y-24 border-red py-24 flex flex-col items-center gap-2">
        <h2 className="text-4xl lg:text-5xl text-gray-50 font-newsreader font-semibold">
          Our Gallery
        </h2>
        <div className="flex justify-center items-center gap-2">
          <FaDiamond size={10} color="white" />
          <div className="w-60 h-0.5 bg-gray-50"></div>
          <FaDiamond size={10} color="white" />
        </div>
        <section className="w-full grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 h-[600] mt-8">
          <div className="bg-gray-400 relative col-span-2 row-span-2 overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_1.jpg"}
              alt=""
              fill
              className="object-cover object-center grayscale hover:scale-105 hover:grayscale-0 transition-all duration-2000 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_2.jpg"}
              alt=""
              fill
              className="object-cover object-center grayscale hover:scale-105 hover:grayscale-0 transition-all duration-800 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_3.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_4.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_7.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
            />
          </div>
        </section>
      </section>
      <section className="w-full bg-white py-16">
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "10px 0px -30px 0px" }}
            className="font-newsreader font-semibold text-4xl text-center text-gray-800 lg:text-5xl"
          >
            Our Reviews
          </motion.h3>
          <div className="flex justify-center items-center gap-2 absolute left-0 right-0 -bottom-8">
            {/* <FaDiamond size={10} color="gray" />
            <div className="w-60 h-0.5 bg-gray-400"></div>
            <FaDiamond size={10} color="gray" /> */}
            <Image
              src={"/images/title_underline.png"}
              alt=""
              width={400}
              height={10}
              className="w-1/4"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 px-4 min-h-[80vh] lg:flex-row lg:min-h-[50vh]">
          {DUMMY_RESTAURANT_REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.4,
              }}
              viewport={{ once: true, margin: "10px 0px -100px 0px" }}
              className="flex-1"
            >
              <div className="max-w-3xl mx-auto py-6 bg-white px-12 lg:py-18 font-poppins ">
                <p className="text-gray-600   mb-4 before:absolute before:content-['“'] before:text-7xl before:text-gray-400/50 before:-top-6 before:-left-8 relative">
                  {review.comment}
                </p>
                <h4 className="text-gray-800 font-newsreader font-medium text-lg before:content-['—'] before:mr-2 before:text-gray-400 before:font-normal before:text-xl relative">
                  {review.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.724530092683!2d85.33673557617271!3d27.633047028763382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738dc92c46f%3A0xac25e0e6e6e8c67e!2sHarisiddhi%20Newa%20Suli!5e0!3m2!1sen!2snp!4v1765278955274!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          className="w-full h-[350px] border-0"
        ></iframe>
      </div>
    </>
  );
}
