import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { SUBTEAMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { User, ArrowRight } from "lucide-react";

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="Our Team"
        subtitle="Meet the Engineers Behind the Machine"
        backgroundImage="/images/leads_crop.jpg"
      />

      {/* Main Content Loop */}
      <div className="py-24 space-y-32 container mx-auto px-4">
        {SUBTEAMS.map((subteam, index) => {
          const isEven = index % 2 === 0;

          return (
            <section key={subteam.id} id={subteam.id} className="scroll-mt-24">
              
              <div className={cn(
                "flex flex-col gap-12 items-center mb-12",
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              )}>
                
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform">
                    <Image
                      src={subteam.groupImage}
                      alt={`${subteam.name} Group Photo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 drop-shadow-md">
                      <Image
                        src={subteam.logo}
                        alt={`${subteam.name} Patch`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-4xl font-bold text-vintage-navy uppercase tracking-wide">
                      {subteam.name}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-vintage-orange pl-6">
                    {subteam.description}
                  </p>

                  <div className="flex items-center gap-2 text-vintage-orange font-bold pt-2">
                    <subteam.icon className="w-6 h-6" />
                    <span className="uppercase tracking-wider text-sm">Specialized Discipline</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-vintage-navy mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <span className="w-2 h-8 bg-vintage-orange rounded-full"></span>
                  {subteam.name} Members
                </h3>
                
                {subteam.members && subteam.members.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {subteam.members.map((member) => (
                      <div key={member.name} className="group flex flex-col items-center">
                        <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-vintage-lightgray group-hover:border-vintage-orange transition-colors shadow-sm">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full bg-vintage-lightgray flex items-center justify-center text-gray-400">
                              <User className="w-12 h-12" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-vintage-navy text-lg text-center leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-xs font-bold text-vintage-orange uppercase tracking-wider text-center mt-1">
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-vintage-lightgray/30 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500 mb-4">Member roster coming soon.</p>
                    <Link href="/contact" className="inline-flex items-center text-vintage-orange font-bold hover:underline">
                      Apply to join this subteam <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>

            </section>
          );
        })}
      </div>
    </main>
  );
}
