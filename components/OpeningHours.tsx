import { Clock, Phone, MapPin } from "lucide-react";

export default function OpeningHours() {
  return (
    <section className="py-24 bg-stone-900 text-stone-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col">
            <span className="text-primary-light text-sm tracking-[0.3em] uppercase mb-4">
              Plan Your Visit
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-100 mb-8">
              Opening Hours
            </h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-lg font-medium tracking-wide">Monday - Sunday</span>
                <span className="text-primary-lighter font-serif text-xl">12:00 PM - 9:00 PM</span>
              </div>
            </div>

            <div className="mt-10 p-6 bg-stone-800/50 rounded-sm border border-stone-800 flex items-start gap-4">
               <Phone className="text-primary-light w-6 h-6 shrink-0 mt-1" />
               <div>
                 <h3 className="text-stone-100 font-medium mb-1">Make a Reservation</h3>
                 <p className="text-sm text-stone-400 mb-2">
                   Call us to reserve a table for special occasions or large groups.
                 </p>
                 <a href="tel:+9779828711989" className="inline-block text-primary-light hover:text-primary-lighter transition-colors font-medium">
                   +977 9828711989
                 </a>
               </div>
            </div>
            
            <div className="mt-4 p-6 bg-stone-800/50 rounded-sm border border-stone-800 flex items-start gap-4">
               <MapPin className="text-primary-light w-6 h-6 shrink-0 mt-1" />
               <div>
                 <h3 className="text-stone-100 font-medium mb-1">Location</h3>
                 <p className="text-sm text-stone-400">
                   Harisiddhi, Lalitpur<br />
                   Kathmandu Valley, Nepal
                 </p>
               </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden ">
            <video 
              src="/videos/opening_hour.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full opacity-90 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-stone-900/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 border border-white/20 p-6 bg-black/40 backdrop-blur-sm rounded-sm">
               <Clock className="text-primary-lighter w-8 h-8 mb-3" />
               <h3 className="text-xl font-serif text-white mb-2">We are ready to welcome you</h3>
               <p className="text-stone-300 text-sm">Experience the authentic taste of Newari cuisine in our culturally rich ambiance.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
