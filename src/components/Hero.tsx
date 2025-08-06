import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-climbing.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-float">
          Presa<span className="text-energy">B</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-white/90">
          La Palestra di Arrampicata Popolare di Bologna
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Scopri l'arrampicata in un ambiente accogliente e inclusivo. 
          Per tutti i livelli, dalla prima volta agli esperti scalatori.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;