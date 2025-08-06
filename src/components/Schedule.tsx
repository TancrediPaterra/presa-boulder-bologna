import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Users2, Star } from "lucide-react";

const Schedule = () => {
  const scheduleInfo = [
    {
      period: "1-19 Settembre",
      hours: "10:00 - 24:00",
      boulderClose: "22:00",
      description: "Orari estesi pre-inaugurazione",
      highlight: false
    },
    {
      period: "20 Settembre",
      hours: "INAUGURAZIONE",
      boulderClose: "",
      description: "Giornata speciale di inaugurazione",
      highlight: true
    },
    {
      period: "21-30 Settembre", 
      hours: "14:00 - 23:00",
      boulderClose: "22:00",
      description: "Nuovi orari post-inaugurazione",
      highlight: false
    }
  ];


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            <Calendar className="inline w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-primary" />
            Orari di Apertura
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Siamo aperti ogni giorno per offrirti la migliore esperienza di arrampicata. 
            Controlla i nostri orari e le attività programmate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {scheduleInfo.map((schedule, index) => (
            <Card key={index} className={`shadow-card-custom hover:shadow-climbing transition-all duration-300 border-border ${schedule.highlight ? 'border-energy border-2 bg-energy/5' : ''}`}>
              <CardHeader className="pb-3">
                <CardTitle className={`text-lg sm:text-xl text-center font-bold ${schedule.highlight ? 'text-energy' : 'text-primary'} flex items-center justify-center gap-1 sm:gap-2`}>
                  {schedule.highlight && <Star className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {schedule.period}
                  {schedule.highlight && <Star className="w-4 h-4 sm:w-5 sm:h-5" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-3 sm:px-6">
                <div className="flex items-center justify-center mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-foreground">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent" />
                  {schedule.hours}
                </div>
                {schedule.boulderClose && (
                  <div className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                    Sala Boulder chiude alle {schedule.boulderClose}
                  </div>
                )}
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {schedule.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="shadow-card-custom border-primary/20">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-primary flex items-center">
                <Users2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Attività Disponibili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <h4 className="font-semibold text-base sm:text-lg text-foreground">Libera Scalata</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Arrampica in totale libertà sui nostri percorsi di diversa difficoltà.</p>
              </div>
              <div className="border-l-4 border-energy pl-3 sm:pl-4">
                <h4 className="font-semibold text-base sm:text-lg text-foreground">Corsi di Arrampicata</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Corsi per tutti i livelli: base, intermedio e avanzato con istruttori qualificati.</p>
              </div>
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h4 className="font-semibold text-base sm:text-lg text-foreground">Eventi Sociali</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Serate di arrampicata e competizioni interne per tutti i livelli.</p>
              </div>
              <div className="border-l-4 border-secondary pl-3 sm:pl-4">
                <h4 className="font-semibold text-base sm:text-lg text-foreground">Sessioni Guidate</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Sessioni con accompagnatori esperti per migliorare la tecnica.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom border-accent/20">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-accent flex items-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Informazioni Utili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Accesso</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Accesso libero durante gli orari di apertura. Le sessioni guidate su prenotazione.</p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Attrezzatura</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Scarpette e imbrago disponibili a noleggio. Porta solo abbigliamento comodo!</p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Primo Accesso</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Prima volta? Ti offriamo una prova gratuita con istruttore!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;