import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <section className="h-1/2 lg:h-screen fixed inset-0 -z-10">
          <Image src={"/images/home_bg.png"} alt="Newa Suli Restaurant" fill />
        </section>
        <section className="w-full h-1/2 lg:h-screen bg-black/10 flex items-center justify-center">
          <h2 className="text-4xl lg:text-7xl text-gray-50/80 text-center font-newsreader font-bold">
            Welcome to Newa Suli
          </h2>
        </section>
      </div>
      <section className="w-full h-screen bg-white"></section>
      <section className="w-full h-screen bg-dark border-y-6 border-red">
        <div className="bg-gray-400"></div>
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
    </div>
  );
}
