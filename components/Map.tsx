

const Map = () => {
  return (
    <section className="bg-stone-900 text-stone-300">
        <div className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.724530092683!2d85.33673557617271!3d27.633047028763382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738dc92c46f%3A0xac25e0e6e6e8c67e!2sHarisiddhi%20Newa%20Suli!5e0!3m2!1sen!2snp!4v1765278955274!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
       
        </div>
      </section>
  )
}

export default Map
