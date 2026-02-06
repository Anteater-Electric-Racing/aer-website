import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayOpacity?: number;
}

export function Hero({ 
  title, 
  subtitle, 
  backgroundImage, 
  overlayOpacity = 30
}: HeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover opacity-70"
        priority
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity / 100 }} 
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-vintage-white px-4 max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
