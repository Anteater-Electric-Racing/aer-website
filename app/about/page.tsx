import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { Zap, Users, Lightbulb, Trophy, Cpu, Cog, Battery, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white">
      <Hero
        title="About UCI Formula SAE"
        subtitle="Driving the Future of Electric Racing"
        backgroundImage="/images/staring_crop.jpg"
      />

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-vintage-navy uppercase tracking-wider">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At UCI Formula SAE, we are dedicated to designing, building, and racing cutting-edge electric vehicles. 
            Our mission is to push the boundaries of sustainable automotive technology while providing hands-on 
            engineering experience to students passionate about innovation and motorsports.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-vintage-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-vintage-navy mb-12 uppercase tracking-wider">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, name: "Innovation", desc: "Pushing boundaries of EV tech" },
              { icon: Users, name: "Teamwork", desc: "Collaborating across disciplines" },
              { icon: Lightbulb, name: "Creativity", desc: "Finding unique solutions" },
              { icon: Trophy, name: "Excellence", desc: "Striving for highest standards" },
            ].map((val) => (
              <div key={val.name} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <val.icon className="w-12 h-12 text-vintage-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vintage-navy mb-2">{val.name}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-vintage-navy mb-12 uppercase tracking-wider">Our Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Cpu, name: "Control Systems", desc: "State-of-the-art motor control" },
            { icon: Cog, name: "CAD/CAM", desc: "Precision design & manufacturing" },
            { icon: Battery, name: "Battery Tech", desc: "High-performance Li-ion systems" },
            { icon: Shield, name: "Safety Systems", desc: "Data acquisition & driver safety" },
          ].map((tech) => (
            <div key={tech.name} className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <tech.icon className="w-10 h-10 text-vintage-navy mr-4" />
              <div>
                <h3 className="text-lg font-bold text-vintage-navy">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
