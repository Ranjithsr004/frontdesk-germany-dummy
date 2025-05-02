
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, Calendar, Users, Shield, Bell, LineChart } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card className="h-full bg-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
    <CardHeader>
      <div className="p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-frontdesk-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-white text-base">
        {description}
      </CardDescription>
    </CardContent>
    {/* <CardFooter>
      <Button 
        variant="outline" 
        className="text-frontdesk-600 border-frontdesk-800 bg-gray-950 w-full"
        onClick={() => {
          const contactSection = document.querySelector("#contact");
          contactSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Learn More
      </Button>
    </CardFooter> */}
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Clipboard className="h-8 w-8 text-frontdesk-600" />,
      title: "Prozesskontrolle",
      description: "Überwachung und Optimierung: Kontinuierliche Überwachung des Nachtbetriebs zur Gewährleistung von Effizienz und Effektivität. \nProblemerkennung: Identifizierung und Lösung von Problemen in Echtzeit zur Minimierung von Störungen."
    },
    {
      icon: <Calendar className="h-8 w-8 text-frontdesk-600" />,
      title: "Beratung",
      description: "Strategische Beratung: Analyse Ihrer aktuellen Prozesse und Entwicklung maßgeschneiderter Strategien zur Verbesserung des Nachtbetriebs. \t Best Practices: Empfehlungen zur Umsetzung von Best Practices im Nachtmanagement."
    },
    {
      icon: <Users className="h-8 w-8 text-frontdesk-600" />,
      title: "Personalauswahl",
      description: "Rekrutierung: Identifizierung und Einstellung qualifizierter Nachtmanager und Mitarbeiter. \t Qualifikationsbewertung: Gründliche Prüfung der Qualifikationen und Erfahrungen der Bewerber."
    },
    {
      icon: <Shield className="h-8 w-8 text-frontdesk-600" />,
      title: "Personalwechsel",
      description: "Effiziente Übergänge: Unterstützung reibungsloser Schichtwechsel und Personalübergänge. \t Nachfolgeplanung: Entwicklung von Plänen zur Sicherstellung der kontinuierlichen Besetzung von Schlüsselpositionen."
    },
    {
      icon: <Bell className="h-8 w-8 text-frontdesk-600" />,
      title: "Gehaltsabrechnung",
      description: "Präzise Abrechnung: Verwaltung der Gehaltsabrechnung für Nachtpersonal, einschließlich Überstunden und Nachtzuschlägen. \t Compliance: Sicherstellung der Einhaltung gesetzlicher Vorschriften und Tarifverträge."
    },
    {
      icon: <LineChart className="h-8 w-8 text-frontdesk-600" />,
      title: "Weiterbildung",
      description: `Schulungsprogramme: Entwicklung und Durchführung von Schulungen zur Verbesserung der Fähigkeiten und Kenntnisse des Nachtpersonals. \n Weiterbildung: Kontinuierliche Schulungsmöglichkeiten, um über die neuesten Entwicklungen und Technologien auf dem Laufenden zu bleiben.`
    },
    {
      icon: <Clipboard className="h-8 w-8 text-frontdesk-600" />,
      title: "Qualitätsüberwachung",
      description: "Leistungsbewertung: Regelmäßige Leistungsbewertungen des Nachtbetriebs zur Sicherstellung hoher Qualitätsstandards. \tFeedbackschleifen: Implementierung von Feedbacksystemen zur kontinuierlichen Prozessverbesserung."
    },
    {
      icon: <Calendar className="h-8 w-8 text-frontdesk-600" />,
      title: "Schichtplanung",
      description: "Effiziente Planung: Erstellung von Schichtplänen, die den Anforderungen des Unternehmens entsprechen und gleichzeitig die Arbeitszeiten der Mitarbeiter optimieren. \t Flexibilität: Anpassung der Dienstpläne an unvorhergesehene Ereignisse."
    },
    {
      icon: <Users className="h-8 w-8 text-frontdesk-600" />,
      title: "Vorteile für Ihr Unternehmen",
      description: "Betriebseffizienz: Reduzierung von Ausfallzeiten und Steigerung der Produktivität in den Nachtstunden. \t Mitarbeiterzufriedenheit: Verbesserung der Arbeitsbedingungen und Förderun."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-frontdesk-800 mb-4">
          Über uns
          </h2>
          <div className="w-20 h-1 bg-frontdesk-600 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-6xl mx-auto">
          Als spezialisierter Personal Dienstleister für die Hotelbranche bieten wir maßgeschneiderte Lösungen für Ihre Personalbedürfnisse. 
          Unser Fokus liegt auf der Bereitstellung von qualifizierten Mitarbeitern für den Nachtrezeptionsdienst, um sicherzustellen, dass Ihre Gäste auch in der Nacht den besten Service erhalten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
