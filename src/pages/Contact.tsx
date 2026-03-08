import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  document.title = 'Contact — Location à Lestiac sur Garonne';

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">Nous contacter</h1>
            <p className="mt-3 text-warm-gray max-w-xl mx-auto">
              Une question sur nos logements ? Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="font-semibold text-charcoal mb-4">Informations de contact</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-terracotta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">Adresse</p>
                      <p className="text-sm text-warm-gray">Lestiac-sur-Garonne<br />Nouvelle-Aquitaine, France</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-terracotta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">Email</p>
                      <a href="mailto:william.estupina@gmail.com" className="text-sm text-terracotta hover:text-terracotta-dark transition-colors">
                        william.estupina@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-terracotta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">Téléphone</p>
                      <a href="tel:+33613326604" className="text-sm text-terracotta hover:text-terracotta-dark transition-colors">
                        06 13 32 66 04
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-terracotta/5 border border-terracotta/20 rounded-2xl p-6">
                <h3 className="font-semibold text-charcoal mb-2">Réservation</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Pour réserver, rendez-vous directement sur nos annonces Airbnb.
                  Les liens sont disponibles sur chaque page de logement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
