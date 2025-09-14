export default function ProgramsSection() {
  const programs = [
    {
      icon: "📖",
      title: "Akhriska Quraan-ka",
      description: "Baro sida loo akhriyo Quraan-ka Kariimka ah si saxda ah oo la fahmo. Waxaan baranayaa xarafaha Carabiga iyo qawaaniinta akhriska.",
      features: [
        "✓ Barashada xarafaha Carabiga",
        "✓ Qawaaniinta Tajwiidka",
        "✓ Akhriska si saxda ah"
      ],
      duration: "Muddo: 6 bil",
      bgColor: "bg-primary/10"
    },
    {
      icon: "🧠",
      title: "Xifdhida Quraan-ka",
      description: "Barnaamij gaar ah oo loogu talagalay xifdhida Quraan-ka oo dhan ama qaybo ka mid ah. Farsamooyin casri ah ayaan adeegsanayaa.",
      features: [
        "✓ Xifdhida suwaraha",
        "✓ Farasamo xifidh oo casri ah",
        "✓ Dib u eegista joogtada ah"
      ],
      duration: "Muddo: 2-4 sano",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "🌟",
      title: "Fahanka Quraan-ka",
      description: "Baro macnaha Quraan-ka iyo sida loo dabaqo nolosheenna maalinlaha ah. Waxaan baranayaa tafsiirada muhiimka ah.",
      features: [
        "✓ Macnaha ayaaduhu",
        "✓ Tafsiirada",
        "✓ Hordhaca Islaamka"
      ],
      duration: "Muddo: 1 sano",
      bgColor: "bg-accent/30"
    },
    {
      icon: "👶",
      title: "Carruurta Yaryar",
      description: "Barnaamij gaar ah oo loogu talagalay carruurta yaryar (3-8 sano). Waxaan ku baranayaa hab ciyaar ah oo soo jiita.",
      features: [
        "✓ Du'ooyinka gaagaaban",
        "✓ Suwaraha yaryar",
        "✓ Cilmiga Islaamka"
      ],
      duration: "Muddo: Joogto ah",
      bgColor: "bg-primary/10"
    },
    {
      icon: "👨‍💼",
      title: "Dadka Waaweyn",
      description: "Casharadaha ku habboon dadka waaweyn oo shaqeeya. Waxaan u habeynay jadwal ku habboon waqtigooda.",
      features: [
        "✓ Casharado goobooba",
        "✓ Weekend classes",
        "✓ Online sessions"
      ],
      duration: "Muddo: Dabool",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "💻",
      title: "Casharadaha Online",
      description: "Baro Quraan-ka gurigaaga iyaga oo casharadaha online ah. Farsamooyin casri ah ayaan isticmaalaynaa.",
      features: [
        "✓ Video calls",
        "✓ Recorded lessons",
        "✓ Mobile app support"
      ],
      duration: "Muddo: Dabool",
      bgColor: "bg-accent/30"
    }
  ];

  return (
    <section id="barnaamijyada" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-amiri text-primary mb-4">برامجنا التعليمية</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Barnaamijyadeenna Waxbarasho</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Waxaan bixinaa barnaamijyo kala duwan oo ku habboon da'yada iyo heerka aqoonta qofka. Dhammaan barnaamijyadeennu waxay ku salaysan yihiin aqoonta sax ah ee Quraan-ka.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border fade-in-up"
              data-testid={`card-program-${index}`}
            >
              <div className={`${program.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-2xl">{program.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{program.title}</h4>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="text-primary font-semibold">{program.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
