import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Music2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vintage-navy text-white border-t border-vintage-orange/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* COLUMN 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="relative block h-12 w-48 mb-4">
              <Image 
                src="/logo.png"
                alt="Anteater Electric Racing"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Designing, building, and racing high-performance electric vehicles at the University of California, Irvine.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-vintage-yellow uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-vintage-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-vintage-orange transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-300 hover:text-vintage-orange transition-colors">Sponsors</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-vintage-orange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-vintage-yellow uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-vintage-orange flex-shrink-0" />
                <span>
                  University of California, Irvine<br />
                  Irvine, CA 92697
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-vintage-orange flex-shrink-0" />
                <a href="mailto:electric.anteaterracing@gmail.com" className="hover:text-white transition-colors">
                  electric.anteaterracing@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Socials */}
          <div>
            <h3 className="text-lg font-bold text-vintage-yellow uppercase tracking-widest mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/anteaterelectricracing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-vintage-orange hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/uci-fsae-electric-racing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-vintage-orange hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@anteaterelectricracing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-vintage-orange hover:text-white transition-all"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Anteater Electric Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
