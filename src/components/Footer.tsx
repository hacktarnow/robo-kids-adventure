import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">RoboKids</h3>
            <p className="text-sm opacity-80">
              Gamifikowana platforma edukacyjna dla młodych inżynierów. 
              Robotyka, programowanie i elektronika dla dzieci 6-14 lat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Platforma</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#features" className="hover:text-primary transition-colors">Funkcje</a></li>
              <li><a href="#age-groups" className="hover:text-primary transition-colors">Programy nauczania</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Opinie</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Zasoby</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-colors">Blog edukacyjny</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Darmowe materiały</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dla rodziców</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dla nauczycieli</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kontakt@robokids.pl" className="hover:text-primary transition-colors">
                  kontakt@robokids.pl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+48123456789" className="hover:text-primary transition-colors">
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2024 RoboKids. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
