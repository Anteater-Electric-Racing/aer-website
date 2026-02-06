import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Zap, Timer, Scale, Gauge } from "lucide-react";
import { CURRENT_SPONSORS } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-vintage-white selection:bg-vintage-orange selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/socalshootout_lonecar.jpg"
            alt="UCI Electric Racing Car"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy via-vintage-navy/50 to-transparent opacity-90" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl">
            <h5 className="text-vintage-orange font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
              University of California, Irvine
            </h5>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
              Charge<br />
              The Future.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-8">
              We are Anteater Electric Racing. A collective of engineers, designers, and innovators building championship-winning electric vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="px-8 py-4 bg-vintage-orange text-white font-bold text-lg rounded-none hover:bg-white hover:text-vintage-navy transition-all uppercase tracking-wide"
              >
                Our Mission
              </Link>
              <Link 
                href="/sponsors" 
                className="px-8 py-4 border border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-vintage-navy transition-all uppercase tracking-wide"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING SPECS */}
      {/*
      <section className="bg-vintage-navy py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-vintage-orange mx-auto" />
              <h3 className="text-4xl font-black text-white">400V</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Architecture</p>
            </div>
            <div className="space-y-2">
              <Timer className="w-8 h-8 text-vintage-orange mx-auto" />
              <h3 className="text-4xl font-black text-white">3.0s</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">0-60 MPH</p>
            </div>
            <div className="space-y-2">
              <Scale className="w-8 h-8 text-vintage-orange mx-auto" />
              <h3 className="text-4xl font-black text-white">550lbs</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Total Weight</p>
            </div>
            <div className="space-y-2">
              <Gauge className="w-8 h-8 text-vintage-orange mx-auto" />
              <h3 className="text-4xl font-black text-white">80kW</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Peak Power</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 4. INFINITE SPONSOR SCROLL */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
        </div>
        
        <Marquee gradient={true} speed={40} className="overflow-y-hidden">
          <div className="flex items-center gap-16 px-8">
            {CURRENT_SPONSORS.map((sponsor, index) => (
              <div key={`${sponsor.name}-${index}`} className="relative w-32 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* 3. BENTO GRID NAVIGATION */}
      <section className="py-24 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-vintage-navy uppercase leading-none mb-4">
              Innovate.<br />Engineer.<br />Compete.
            </h2>
            <p className="text-lg text-gray-600">
              Explore the different facets of our team, from the subteams that design every bolt to the partners who make it possible.
            </p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Team (Large, Span 2 Cols) */}
          <Link 
            href="/team" 
            className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-gray-900 min-h-[300px]"
          >
            <Image
              src="/images/socalshootout_team.jpg"
              alt="Our Team"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4">
                Meet the Team <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform text-vintage-orange" />
              </h3>
              <p className="text-gray-300 max-w-md">
                Over 40 students across 9 specialized subteams working in unison.
              </p>
            </div>
          </Link>

          {/* Card 2: About (Top Right) */}
          <Link 
            href="/about" 
            className="group relative rounded-2xl overflow-hidden bg-vintage-navy min-h-[250px]"
          >
            <Image
              src="/images/socalshootout_carempty_crop.jpg"
              alt="Our Team"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
             />
             <div className="absolute inset-0 bg-vintage-orange/10 group-hover:bg-vintage-orange/20 transition-colors" />
             <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Our Mission</h3>
                <p className="text-sm text-gray-300">Designing the future of sustainable racing.</p>
             </div>
          </Link>

          {/* Card 3: Sponsors (Bottom Right) */}
          <Link 
            href="/sponsors" 
            className="group relative rounded-2xl overflow-hidden bg-white border-2 border-vintage-lightgray hover:border-vintage-orange transition-colors min-h-[250px]"
          >
             <Image
              src="/images/helmet_back.jpg"
              alt="Sponsors"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
             <div className="absolute inset-0 bg-vintage-navy/50 group-hover:bg-vintage-navy/70 transition-colors" />
             <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Partners</h3>
                <p className="text-sm text-gray-300">Join industry leaders in supporting us.</p>
             </div>
          </Link>
        </div>
        
      </section>


    </main>
  );
}
