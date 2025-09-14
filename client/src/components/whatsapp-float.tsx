export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/63737364324" 
      className="whatsapp-float"
      data-testid="button-whatsapp-float"
    >
      <div className="flex items-center space-x-2">
        <span className="text-xl">💬</span>
        <span className="font-semibold hidden sm:inline">WhatsApp</span>
      </div>
    </a>
  );
}
