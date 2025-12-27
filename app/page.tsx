import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full lg:h-screen relative">
        <section className="w-full h-full fixed inset-0 -z-10">
          <Image
            src={"/images/home_bg.png"}
            alt="Newa Suli Restaurant"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </section>
        <section className="w-full h-full bg-black/20 flex items-center justify-center relative">
          <h2 className="text-4xl lg:text-7xl text-gray-50/80 text-center font-newsreader font-bold sticky top-1/2 transform -translate-y-1/2">
            Welcome to Newa Suli
          </h2>
        </section>
      </div>
      <section className="w-full h-screen bg-white"></section>
      <section className="w-full bg-dark border-y-6 border-red py-16 flex flex-col items-center gap-2">
        <section className="w-full grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 h-[600]">
          <div className="bg-gray-400 relative col-span-2 row-span-2 overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_1.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-2000 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_2.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
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
      <section className="w-full h-screen bg-white"></section>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.724530092683!2d85.33673557617271!3d27.633047028763382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738dc92c46f%3A0xac25e0e6e6e8c67e!2sHarisiddhi%20Newa%20Suli!5e0!3m2!1sen!2snp!4v1765278955274!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          className="w-full h-[450px] border-0"
        ></iframe>
      </div>
    </>
  );
}
