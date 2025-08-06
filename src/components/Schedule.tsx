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

  const weeklyActivities = [
    {
      day: "Lunedì",
      activities: ["Libera scalata", "Allenamento"]
    },
    {
      day: "Martedì", 
      activities: ["Libera scalata", "Sessioni guidate"]
    },
    {
      day: "Mercoledì",
      activities: ["Libera scalata", "Attività bambini"]
    },
    {
      day: "Giovedì",
      activities: ["Libera scalata", "Allenamento avanzato"]
    },
    {
      day: "Venerdì",
      activities: ["Serata Sociale", "Libera scalata"]
    },
    {
      day: "Sabato",
      activities: ["Libera scalata", "Gare interne", "Attività di gruppo"]
    },
    {
      day: "Domenica",
      activities: ["Famiglia", "Libera scalata"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <Calendar className="inline w-10 h-10 mr-4 text-primary" />
            Orari di Apertura
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siamo aperti ogni giorno per offrirti la migliore esperienza di arrampicata. 
            Controlla i nostri orari e le attività programmate.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {scheduleInfo.map((schedule, index) => (
            <Card key={index} className={`shadow-card-custom hover:shadow-climbing transition-all duration-300 border-border ${schedule.highlight ? 'border-energy border-2 bg-energy/5' : ''}`}>
              <CardHeader className="pb-3">
                <CardTitle className={`text-xl text-center font-bold ${schedule.highlight ? 'text-energy' : 'text-primary'} flex items-center justify-center gap-2`}>
                  {schedule.highlight && <Star className="w-5 h-5" />}
                  {schedule.period}
                  {schedule.highlight && <Star className="w-5 h-5" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-3 text-lg font-semibold text-foreground">
                  <Clock className="w-5 h-5 mr-2 text-accent" />
                  {schedule.hours}
                </div>
                {schedule.boulderClose && (
                  <div className="text-sm text-muted-foreground mb-3">
                    Sala Boulder chiude alle {schedule.boulderClose}
                  </div>
                )}
                <div className="text-sm text-muted-foreground">
                  {schedule.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-12">
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-7 mb-6">
            <h3 className="text-2xl font-bold text-primary text-center">Attività Settimanali</h3>
          </div>
          {weeklyActivities.map((day, index) => (
            <Card key={index} className="shadow-card-custom hover:shadow-climbing transition-all duration-300 border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-center text-primary font-bold">
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                      {activity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card-custom border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Users2 className="w-6 h-6 mr-3" />
                Attività Disponibili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-lg text-foreground">Libera Scalata</h4>
                <p className="text-muted-foreground">Arrampica in totale libertà sui nostri percorsi di diversa difficoltà.</p>
              </div>
              <div className="border-l-4 border-energy pl-4">
                <h4 className="font-semibold text-lg text-foreground">Sessioni Guidate</h4>
                <p className="text-muted-foreground">Sessioni con accompagnatori esperti per migliorare la tecnica.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg text-foreground">Eventi Sociali</h4>
                <p className="text-muted-foreground">Serate di arrampicata e competizioni interne per tutti i livelli.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                Informazioni Utili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-2">Accesso</h4>
                <p className="text-muted-foreground">Accesso libero durante gli orari di apertura. Le sessioni guidate su prenotazione.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-2">Attrezzatura</h4>
                <p className="text-muted-foreground">Scarpette e imbrago disponibili a noleggio. Porta solo abbigliamento comodo!</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-2">Primo Accesso</h4>
                <p className="text-muted-foreground">Prima volta? Ti offriamo una prova gratuita con istruttore!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;