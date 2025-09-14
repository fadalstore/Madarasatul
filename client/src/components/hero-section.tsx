export default function HeroSection() {
  const scrollToPrograms = () => {
    const element = document.getElementById("barnaamijyada");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="guriga" className="relative min-h-screen flex items-center islamic-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-accent/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-bold font-amiri text-primary mb-6 leading-tight">
              مرحباً بكم في مدرسة القرآن
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Soo dhawow Madarasadda Quraan-ka
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Waxaan ku baranayaa Quraan-ka Kariimka ah si casri ah oo sahlan. Barnaamijyadeenna waa kuwo habboon dhammaan da'yada, taasoo ah in la barto Quraan-ka oo si saxda ah loo akhriyo, la fahmo, oo la xafido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPrograms}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-center transform hover:scale-105"
                data-testid="button-view-programs"
              >
                🕌 Eeg Barnaamijyada
              </button>
              <a 
                href="https://wa.me/63737364324" 
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 font-semibold text-center transform hover:scale-105"
                data-testid="button-whatsapp-hero"
              >
                💬 WhatsApp-ka noogu soo dir
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 geometric-border rounded-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1512138664757-360e0aad5132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful mosque with Islamic architecture and minarets" 
                className="rounded-2xl shadow-2xl w-full max-w-md h-auto transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
