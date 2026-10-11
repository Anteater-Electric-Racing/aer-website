import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { SPONSOR_TIERS, CURRENT_SPONSORS } from "@/lib/data";
import { Check, ArrowRight, Mail } from "lucide-react";

export default function SponsorsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="Our Sponsors"
        subtitle="Powering Innovation in Electric Racing"
        backgroundImage="/images/helmet_back.jpg"
      />

      {/* Tiers Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-vintage-navy uppercase tracking-wider mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in shaping the future of electric racing technology. Your
            support makes a significant impact on our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SPONSOR_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:-translate-y-1 transition-transform flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-vintage-navy">
                  {tier.name}
                </h3>
                <tier.icon className="w-8 h-8 text-vintage-orange" />
              </div>

              <p className="text-3xl font-bold text-vintage-orange mb-6">
                {tier.amount}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link
            href="/contact"
            className="group flex flex-col items-center justify-center text-center bg-vintage-navy rounded-xl p-8 shadow-lg hover:-translate-y-1 transition-all cursor-pointer border-2 border-vintage-navy hover:border-vintage-orange relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-vintage-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-vintage-orange text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Become a Sponsor
              </h3>

              <p className="text-gray-300 group-hover:text-white mb-8 transition-colors">
                Ready to support the team? Contact us to get started with a
                custom package.
              </p>

              <span className="inline-flex items-center font-bold text-vintage-yellow group-hover:text-white uppercase tracking-wider">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Current Sponsors Grid */}
      <section className="py-20 bg-vintage-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-vintage-navy mb-12 uppercase tracking-wider">
            Current Partners
          </h2>

          {/* flex + justify-center centers the last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {CURRENT_SPONSORS.map((sponsor) => {
              const logo = (
                <div className="group relative h-28 w-48 rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              );

              // link if there's a url, plain logo if not
              return sponsor.url ? (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                >
                  {logo}
                </a>
              ) : (
                <div key={sponsor.name}>{logo}</div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
