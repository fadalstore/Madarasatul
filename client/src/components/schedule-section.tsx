export default function ScheduleSection() {
  const weeklySchedule = [
    {
      day: "Axad - Khamiis",
      type: "Casharadaha Caadiga ah",
      morning: "8:00 AM - 12:00 PM",
      afternoon: "2:00 PM - 6:00 PM"
    },
    {
      day: "Jimce",
      type: "Casharadaha Gaaban",
      morning: "8:00 AM - 11:00 AM",
      afternoon: "Salaadda Jimce ka dib"
    },
    {
      day: "Sabti",
      type: "Weekend Classes",
      morning: "9:00 AM - 3:00 PM",
      afternoon: "Dadka shaqeeya"
    }
  ];

  const ageGroups = [
    {
      title: "Carruurta Yaryar (3-7)",
      icon: "👶",
      time: "9:00 AM - 11:00 AM",
      description: "Du'ooyinka iyo suwaraha yaryar"
    },
    {
      title: "Carruurta Dhexe (8-12)",
      icon: "🧒",
      time: "11:30 AM - 1:30 PM",
      description: "Akhriska iyo xifdhida aasaska ah"
    },
    {
      title: "Dhalinyarada (13-18)",
      icon: "👦",
      time: "2:00 PM - 4:00 PM",
      description: "Tajwiid iyo xifdhida heer sare ah"
    },
    {
      title: "Dadka Waaweyn (18+)",
      icon: "👨",
      time: "4:30 PM - 6:00 PM",
      description: "Fahanka iyo tafsiirada"
    }
  ];

  return (
    <section id="jadwalka" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-amiri text-primary mb-4">جدول الحصص</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Jadwalka Casharrada</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jadwalkeennu waa mid qullan oo ku habboon dhammaan dadka. Waxaan casharadaha u qabannaa muddo kala duwan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Weekly Schedule */}
          <div className="bg-card rounded-xl p-8 shadow-lg fade-in-up">
            <h4 className="text-2xl font-bold text-foreground mb-6 text-center">📅 Jadwalka Usbuuciga</h4>
            <div className="space-y-4">
              {weeklySchedule.map((schedule, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-background rounded-lg border border-border"
                  data-testid={`schedule-item-${index}`}
                >
                  <div>
                    <div className="font-semibold text-foreground">{schedule.day}</div>
                    <div className="text-sm text-muted-foreground">{schedule.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{schedule.morning}</div>
                    <div className="text-sm text-muted-foreground">{schedule.afternoon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Groups */}
          <div className="bg-card rounded-xl p-8 shadow-lg fade-in-up">
            <h4 className="text-2xl font-bold text-foreground mb-6 text-center">👥 Kooxaha Da'da</h4>
            <div className="space-y-4">
              {ageGroups.map((group, index) => (
                <div 
                  key={index}
                  className="p-4 bg-background rounded-lg border border-border"
                  data-testid={`age-group-${index}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-foreground">{group.title}</h5>
                    <span className="text-2xl">{group.icon}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{group.time}</p>
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
