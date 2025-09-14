import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="w-8 h-6 bg-secondary rounded-t-full relative">
                <div className="w-1 h-3 bg-secondary absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
              </div>
              <div className="absolute bottom-1 w-10 h-2 bg-secondary rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-amiri text-primary">مدرسة القرآن</h1>
              <p className="text-sm text-muted-foreground">Madarasadda Quraan-ka</p>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("guriga")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-home"
            >
              Guriga
            </button>
            <button 
              onClick={() => scrollToSection("barnaamijyada")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-programs"
            >
              Barnaamijyada
            </button>
            <button 
              onClick={() => scrollToSection("jadwalka")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-schedule"
            >
              Jadwalka
            </button>
            <button 
              onClick={() => scrollToSection("nala-soo-xiriir")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contact"
            >
              Nala Soo Xiriir
            </button>
            <a 
              href="tel:+637364324" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-call"
            >
              📞 Naga soo wac
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("guriga")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-home-mobile"
              >
                Guriga
              </button>
              <button 
                onClick={() => scrollToSection("barnaamijyada")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-programs-mobile"
              >
                Barnaamijyada
              </button>
              <button 
                onClick={() => scrollToSection("jadwalka")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-schedule-mobile"
              >
                Jadwalka
              </button>
              <button 
                onClick={() => scrollToSection("nala-soo-xiriir")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-contact-mobile"
              >
                Nala Soo Xiriir
              </button>
              <a 
                href="tel:+637364324" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                data-testid="button-call-mobile"
              >
                📞 Naga soo wac
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
