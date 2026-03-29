import { Clock, MapPin, Phone } from "lucide-react";

const Horarios = () => (
  <section id="horarios" className="bg-section-alt py-16">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-10">
        HORARIOS Y UBICACIÓN
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <Clock size={28} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Horarios de Atención</h3>
              <p className="font-body text-muted-foreground">Lunes a Sábado: 8:00 – 13:00 / 17:00 – 21:00</p>
              <p className="font-body text-muted-foreground">Domingos: 8:00 – 13:00</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <MapPin size={28} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Dirección</h3>
              <p className="font-body text-muted-foreground">Barrio Las Palmas, Córdoba Capital, Argentina</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Phone size={28} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Teléfono / WhatsApp</h3>
              <p className="font-body text-muted-foreground">+54 9 XXX XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-lg overflow-hidden border border-border h-64 md:h-auto min-h-[250px] bg-muted flex items-center justify-center">
          <div className="text-center p-4">
            <MapPin size={48} className="text-secondary mx-auto mb-2" />
            <p className="font-body text-sm text-muted-foreground">
              Mapa próximamente.<br />Barrio Las Palmas, Córdoba Capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Horarios;
