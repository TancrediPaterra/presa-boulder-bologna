import { Mountain, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rock text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-energy" />
              <h3 className="text-2xl font-bold">
                Presa<span className="text-energy">B</span>
              </h3>
            </div>
            <p className="text-white/80 mb-4">
              La palestra di arrampicata popolare di Bologna. 
              Un luogo dove passione, inclusività e crescita si incontrano.
            </p>
            <p className="text-sm text-white/60">
              © 2024 PresaB. Tutti i diritti riservati.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-energy transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-energy transition-colors">Orari</a></li>
              <li><a href="#" className="hover:text-energy transition-colors">Corsi</a></li>
              <li><a href="#" className="hover:text-energy transition-colors">Eventi</a></li>
              <li><a href="#" className="hover:text-energy transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4 text-energy" />
                <span className="text-sm">Via dell'Arrampicata, 42 - Bologna</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4 text-energy" />
                <span className="text-sm">+39 051 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4 text-energy" />
                <span className="text-sm">info@presab.it</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Realizzato con ❤️ per la comunità di arrampicata bolognese
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;