
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-frontdesk-800 mb-4">
          Über uns
          </h2>
          <div className="w-20 h-1 bg-frontdesk-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
          Als spezialisierter Personal Dienstleister für die Hotelbranche bieten wir maßgeschneiderte Lösungen für Ihre Personalbedürfnisse. 
          Unser Fokus liegt auf der Bereitstellung von qualifizierten Mitarbeitern für den Nachtrezeptionsdienst, um sicherzustellen, dass Ihre Gäste auch in der Nacht den besten Service erhalten.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-frontdesk-800 rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-medium text-lg">
                Über 10 Jahre Erfahrung mit Front-Desk-Lösungen
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-16 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-frontdesk-800 mb-6">
            Warum Frontdesk?
            </h3>
            {/* <p className="text-lg text-gray-700 mb-8">
              At FrontDesk Nexus, we're committed to revolutionizing how businesses
              handle front desk operations. Our cutting-edge solutions streamline
              workflows, enhance visitor experiences, and provide unmatched security
              and efficiency.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-frontdesk-800 mb-6">
              Our Values
            </h3> */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Erfahrung</h4>
                  <p className="text-gray-600">
                  Mit jahrelanger Erfahrung in der Hotelbranche kennen wir die spezifischen Anforderungen und Herausforderungen, die mit dem Nachtrezeptionsdienst verbunden sind.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Zuverlässigkeit</h4>
                  <p className="text-gray-600">
                  Wir legen großen Wert auf die Qualität unserer Mitarbeiter und garantieren, dass sie pünktlich und professionell arbeiten.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-frontdesk-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Kundenspezifische Lösungen</h4>
                  <p className="text-gray-600">
                  Wir arbeiten eng mit Ihnen zusammen, um Ihre individuellen Anforderungen zu verstehen und maßgeschneiderte Lösungen anzubieten.                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
