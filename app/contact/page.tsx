import { Hero } from "@/components/ui/Hero";
import {
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Music2,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="Contact Us"
        subtitle="Connect with UCI Formula SAE"
        backgroundImage="/images/MZdramaticShot.jpg"
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT COLUMN: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-vintage-navy mb-8 uppercase tracking-wide">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-vintage-navy text-white rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-vintage-navy">
                      Visit Our Lab
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      University of California, Irvine
                      <br />
                      4200 Engineering Gateway
                      <br />
                      Irvine, CA 92697
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-vintage-navy text-white rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-vintage-navy">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mt-1 mb-2">
                      For general inquiries and sponsorship info:
                    </p>
                    <a
                      href="mailto:anteaterelectricracing@gmail.com"
                      className="text-vintage-orange font-bold hover:underline text-lg"
                    >
                      anteaterelectricracing@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-vintage-navy mb-4">
                Follow Our Journey
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/anteaterelectricracing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white shadow-md rounded-full text-vintage-navy hover:bg-vintage-orange hover:text-white transition-all hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/uci-fsae-electric-racing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white shadow-md rounded-full text-vintage-navy hover:bg-vintage-orange hover:text-white transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Donation Call to Action (Replaces the Form) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-vintage-orange">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-vintage-orange/10 rounded-full">
                <Heart className="w-8 h-8 text-vintage-orange" />
              </div>
              <h2 className="text-2xl font-bold text-vintage-navy">
                Support the Team
              </h2>
            </div>

            {/* <p className="text-gray-600 leading-relaxed mb-8">
              Your contributions directly fund the materials, tools, and
              competition fees needed to build our electric race car. Help us
              engineer the future of sustainable motorsports by donating through
              our official UCI ZotFunder page.
            </p> */}

            <a
              href="https://zotfunder.give.uci.edu/aer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-4 bg-vintage-navy text-white text-lg font-bold rounded-xl hover:bg-vintage-orange transition-all shadow-lg hover:shadow-xl"
            >
              Donate via ZotFunder
              <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
            </a>

            <p className="text-xs text-gray-400 text-center mt-6">
              All donations are processed securely through the UCI Foundation.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.21664626097!2d-117.84027427140651!3d33.64294479832514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0583eea5f3%3A0x60850c89c6ad35a8!2sEngineering%20Gateway!5e1!3m2!1sen!2sus!4v1791444297823!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
