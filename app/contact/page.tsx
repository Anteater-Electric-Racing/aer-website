import { Hero } from "@/components/ui/Hero";
import { MapPin, Mail, Instagram, Linkedin, Music2 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
        backgroundImage="/images/socalshootout_carempty_crop.jpg"
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
         
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-vintage-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <input type="text" className="w-full p-3 bg-vintage-lightgray rounded-md border-transparent focus:border-vintage-orange focus:bg-white focus:ring-0 transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input type="email" className="w-full p-3 bg-vintage-lightgray rounded-md border-transparent focus:border-vintage-orange focus:bg-white focus:ring-0 transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input type="text" className="w-full p-3 bg-vintage-lightgray rounded-md border-transparent focus:border-vintage-orange focus:bg-white focus:ring-0 transition-colors" placeholder="Topic" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={5} className="w-full p-3 bg-vintage-lightgray rounded-md border-transparent focus:border-vintage-orange focus:bg-white focus:ring-0 transition-colors" placeholder="How can we help?" />
              </div>
              <button className="w-full py-3 bg-vintage-navy text-white font-bold rounded-md hover:bg-vintage-orange transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-vintage-navy mb-4 flex items-center gap-2">
                <MapPin className="text-vintage-orange" /> Visit Us
              </h3>
              <p className="text-gray-600 ml-8">
                University of California, Irvine<br />
                Irvine, CA 92697
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-vintage-navy mb-4 flex items-center gap-2">
                <Mail className="text-vintage-orange" /> Email Us
              </h3>
              <p className="text-gray-600 ml-8">electric.anteaterracing@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-vintage-navy mb-4">Follow Us</h3>
              <div className="flex gap-4 ml-8">
                <a href="#" className="p-3 bg-vintage-lightgray rounded-full hover:bg-vintage-orange hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-vintage-lightgray rounded-full hover:bg-vintage-orange hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-vintage-lightgray rounded-full hover:bg-vintage-orange hover:text-white transition-colors"><Music2 className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Simple Map Embed */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.989354782076!2d-117.8442966847953!3d33.64049518072121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0e2e9b6c0b%3A0x868c6e2641777243!2sUniversity%20of%20California%2C%20Irvine!5e0!3m2!1sen!2sus!4v1629837482934!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
               ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
