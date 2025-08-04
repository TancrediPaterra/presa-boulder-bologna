import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Mountain } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Palestra Popolare",
      description: "Un ambiente inclusivo e accogliente dove tutti possono avvicinarsi all'arrampicata, indipendentemente dal livello di esperienza."
    },
    {
      icon: Heart,
      title: "Comunità Attiva",
      description: "Fai parte di una comunità appassionata di scalatori che condividono esperienze, consigli e momenti di crescita insieme."
    },
    {
      icon: Mountain,
      title: "Attrezzature Complete",
      description: "Pareti moderne con prese di ogni livello, attrezzatura di sicurezza professionale e corsi per principianti ed esperti."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Benvenuti in <span className="text-primary">PresaB</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nel cuore di Bologna, PresaB è più di una semplice palestra di arrampicata. 
            È uno spazio dove la passione per la verticale incontra l'inclusività e la crescita personale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card-custom border-border hover:shadow-climbing transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-rock rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">
            Arrampicata per Tutti
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Che tu sia un principiante assoluto o un climber esperto, 
            PresaB offre percorsi e sfide adatte al tuo livello. 
            La nostra filosofia popolare rende l'arrampicata accessibile a tutti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;