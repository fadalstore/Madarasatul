export default function Footer() {
  const programs = [
    "Akhriska Quraan-ka",
    "Xifdhida Quraan-ka", 
    "Fahanka Quraan-ka",
    "Carruurta Yaryar",
    "Dadka Waaweyn",
    "Casharadaha Online"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-6 h-4 bg-primary rounded-t-full relative">
                  <div className="w-0.5 h-2 bg-primary absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0.5"></div>
                </div>
              </div>
              <h4 className="text-lg font-bold font-amiri">مدرسة القرآن</h4>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Madarasadda Quraan-ka waa meesha ugu fiican ee lagu barto Quraan-ka Kariimka ah si casri ah.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/637364324" 
                className="bg-secondary/20 p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <span className="text-xl">💬</span>
              </a>
              <a 
                href="tel:+637364324" 
                className="bg-secondary/20 p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                data-testid="link-footer-phone"
              >
                <span className="text-xl">📞</span>
              </a>
              <a 
                href="mailto:info@madarasadda-quraan.com" 
                className="bg-secondary/20 p-2 rounded-lg hover:bg-secondary/30 transition-colors"
                data-testid="link-footer-email"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Barnaamijyada</h5>
            <ul className="space-y-2 text-primary-foreground/80">
              {programs.map((program, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("barnaamijyada")}
                    className="hover:text-secondary transition-colors text-left"
                    data-testid={`link-footer-program-${index}`}
                  >
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Nala Soo Xiriir</h5>
            <div className="space-y-3 text-primary-foreground/80">
              <p data-testid="text-footer-phone">📱 +637 364 324</p>
              <p data-testid="text-footer-email">📧 info@madarasadda-quraan.com</p>
              <p data-testid="text-footer-address">📍 Magaalada Muqdisho, Soomaaliya</p>
              <p data-testid="text-footer-hours">🕐 Axad - Khamiis: 8AM - 6PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Madarasadda Quraan-ka. Dhammaan xuquuqda way dhowran yihiin.
          </p>
          <p className="text-primary-foreground/60 mt-2 font-arabic">
            بارك الله فيكم وجزاكم الله خيراً
          </p>
        </div>
      </div>
    </footer>
  );
}
