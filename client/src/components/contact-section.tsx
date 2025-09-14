import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Salaan aleikum,\n\nMagaca: ${formData.name}\nTalefanka: ${formData.phone}\nBarnaamijka: ${formData.program}\n\nFariinta: ${formData.message}`;
    const whatsappUrl = `https://wa.me/637364324?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Fariinta la diray!",
      description: "WhatsApp ayaa la furay si aad u dirto fariintaada.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      program: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Talefanka",
      info: "+637 364 324"
    },
    {
      icon: "📧",
      title: "Email",
      info: "info@madarasadda-quraan.com"
    },
    {
      icon: "📍",
      title: "Goobta",
      info: "Magaalada Muqdisho, Soomaaliya"
    },
    {
      icon: "🕐",
      title: "Saacadaha Furan",
      info: "Axad - Khamiis: 8:00 AM - 6:00 PM",
      info2: "Jimce - Sabti: 8:00 AM - 3:00 PM"
    }
  ];

  return (
    <section id="nala-soo-xiriir" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-amiri text-primary mb-4">اتصل بنا</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Nala Soo Xiriir</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Waa maxay su'aal ah? Ma rabta inaad nala hadho? Fadlan noogu soo dir fariin ama noogu yeedh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            {/* WhatsApp Contact - Prominently Featured */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-800">WhatsApp</h4>
                  <p className="text-green-600">Fariinka ugu dhakhsaha badan</p>
                </div>
              </div>
              <a 
                href="https://wa.me/637364324" 
                className="inline-flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
                data-testid="button-whatsapp-contact"
              >
                📱 +637 364 324
                <span className="ml-2">→</span>
              </a>
              <p className="text-sm text-green-600 mt-2 text-center">Riix halkan si aad ula hadho</p>
            </div>

            {/* Other Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-method-${index}`}>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">{method.title}</h5>
                    <p className="text-muted-foreground">{method.info}</p>
                    {method.info2 && <p className="text-muted-foreground">{method.info2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8 shadow-lg fade-in-up">
            <h4 className="text-2xl font-bold text-foreground mb-6">Noogu Dir Fariin</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">Magaca</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full"
                  placeholder="Magacaaga buuxi..."
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">Talefanka</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full"
                  placeholder="+63 xxx xxx xxx"
                  required
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="program" className="text-sm font-medium text-foreground mb-2">Barnaamijka Xiiseeya</Label>
                <Select 
                  value={formData.program} 
                  onValueChange={(value) => setFormData({...formData, program: value})}
                >
                  <SelectTrigger data-testid="select-program">
                    <SelectValue placeholder="Doorasho..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reading">Akhriska Quraan-ka</SelectItem>
                    <SelectItem value="memorization">Xifdhida Quraan-ka</SelectItem>
                    <SelectItem value="understanding">Fahanka Quraan-ka</SelectItem>
                    <SelectItem value="children">Carruurta Yaryar</SelectItem>
                    <SelectItem value="adults">Dadka Waaweyn</SelectItem>
                    <SelectItem value="online">Casharadaha Online</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">Fariinta</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full"
                  placeholder="Fariintaada halkan ku qor..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                data-testid="button-submit-form"
              >
                📤 Dir Fariinta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
