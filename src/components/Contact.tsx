import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vieni a Trovarci
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siamo nel cuore di Bologna, pronti ad accoglierti nella nostra comunità di arrampicata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-card-custom border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Dove Siamo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-2">Indirizzo</h4>
                <p className="text-muted-foreground">
                  Via dell'Arrampicata, 42<br />
                  40100 Bologna, BO<br />
                  Italia
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-2">Come Raggiungerci</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Fermata metro: Stazione Centrale (15 min a piedi)</li>
                  <li>• Autobus: Linee 25, 30, 35</li>
                  <li>• Parcheggio gratuito disponibile</li>
                </ul>
              </div>

              <div className="pt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.845!2d11.3426!3d44.4949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI5JzQxLjYiTiAxMcKwMjAnMzMuNCJF!5e0!3m2!1sen!2sit!4v1"
                  width="100%" 
                  height="200" 
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen 
                  loading="lazy"
                  className="shadow-sm"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-card-custom border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Contatti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Telefono</p>
                    <p className="text-muted-foreground">+39 051 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">info@presab.it</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-semibold text-foreground mb-2">Seguici sui Social</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-custom bg-gradient-hero text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto per la Prima Scalata?
                </h3>
                <p className="mb-6 text-white/90">
                  Prenota la tua prova gratuita e scopri il mondo dell'arrampicata con noi!
                </p>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Prenota Ora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;