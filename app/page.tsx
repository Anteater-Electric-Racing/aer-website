import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { SPONSOR_TIERS } from "@/lib/data"; 
import { ArrowRight, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="UCI Formula SAE Electric"
        subtitle="Driving the Future of Electric Racing"
        backgroundImage="/images/socalshootout_lonecar.jpg"
      />

      <section className="py-20 px-4 container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-vintage-navy mb-4">
            Innovate. Engineer. Compete.
          </h2>
          <p className="text-lg text-gray-600">
            We are UCI Anteater Electric Racing, pushing the limits of electric vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link 
            href="/about"
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src="/images/socalshootout_1.jpg"
              alt="About Us"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/90 to-transparent" />
            <div className="absolute bottom-6 left-6 text-vintage-white">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                About Us <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Our mission & history
              </p>
            </div>
          </Link>

          <Link 
            href="/team"
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src="/images/socalshootout_team_crop.jpg"
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/90 to-transparent" />
            <div className="absolute bottom-6 left-6 text-vintage-white">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                Our Team <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Meet our subteams & engineers
              </p>
            </div>
          </Link>

          <Link 
            href="/sponsors"
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src="/images/helmet_back.jpg"
              alt="Our Sponsors"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/90 to-transparent" />
            <div className="absolute bottom-6 left-6 text-vintage-white">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                Sponsors <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Partners powering our success
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-vintage-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-vintage-navy mb-12">
            Support Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SPONSOR_TIERS && SPONSOR_TIERS.slice(0, 3).map((tier) => (
              <div key={tier.name} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-vintage-orange flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-vintage-lightgray rounded-full mb-4">
                  {tier.icon ? <tier.icon className="w-8 h-8 text-vintage-orange" /> : <Trophy className="w-8 h-8 text-vintage-orange" />}
                </div>
                <h3 className="text-2xl font-bold text-vintage-navy">{tier.name}</h3>
                <p className="text-xl font-bold text-vintage-orange mt-2">{tier.amount}</p>
                
                {/* Benefits List */}
                <ul className="mt-6 space-y-3 text-left w-full">
                  {tier.benefits.slice(0, 4).map((b, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 text-vintage-orange font-bold">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/sponsors" 
              className="inline-block px-8 py-3 bg-vintage-navy text-white rounded-md font-bold hover:bg-vintage-orange transition-colors shadow-lg"
            >
              View All Sponsorship Tiers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
