
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-frontdesk-800 leading-tight">
            Verwandeln Sie Ihr <br />
              <span className="text-frontdesk-700">Rezeption</span> Erlebnis
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
            Ihr Partner für exzellenten Nachtrezeptionsdienst!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-frontdesk-600 hover:bg-frontdesk-800 text-black hover:text-white font-medium text-lg px-6 py-6"
                onClick={() => {
                  const servicesSection = document.querySelector("#services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Entdecken Sie unsere Lösungen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-frontdesk-600 text-frontdesk-600 hover:bg-white font-medium text-lg px-6 py-6"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Kontaktieren Sie uns
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-up">
            <div className="relative">
              <div className="bg-frontdesk-100 rounded-xl p-4 md:p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Front Desk Management Software"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="text-frontdesk-800 font-bold text-xl">98%</div>
                      <div className="text-sm text-gray-500">Kundenzufriedenheit</div>
                    </div>
                    <div className="h-10 w-px bg-gray-200 mx-2"></div>
                    <div>
                      <div className="text-frontdesk-800 font-bold text-xl">5000+</div>
                      <div className="text-sm text-gray-500">Unternehmen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
