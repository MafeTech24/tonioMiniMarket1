import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/549XXXXXXXXXX?text=Hola!%20Vi%20la%20oferta%20y%20quiero%20consultar";

const ofertas = [
  { nombre: "Pollo Entero", antes: "$4.500", ahora: "$3.800", desc: "Fresco del día, aprox 2.5kg" },
  { nombre: "Pack Despensa Básica", antes: "$12.000", ahora: "$9.900", desc: "Arroz, aceite, fideos, harina y más" },
  { nombre: "Bandeja de Verduras", antes: "$5.000", ahora: "$3.500", desc: "Tomate, lechuga, cebolla, papa y zanahoria" },
];

const Ofertas = () => (
  <section id="ofertas" className="bg-background py-16">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-10">
        OFERTAS DE LA SEMANA
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {ofertas.map((o) => (
          <div key={o.nombre} className="bg-offer-bg rounded-lg p-6 relative overflow-hidden">
            <span className="badge-offer absolute top-4 right-4">OFERTA</span>
            <h3 className="font-heading text-xl font-bold text-foreground mt-2">{o.nombre}</h3>
            <p className="font-body text-muted-foreground text-sm mt-1">{o.desc}</p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-heading text-2xl font-bold text-primary">{o.ahora}</span>
              <span className="font-body text-sm text-muted-foreground line-through">{o.antes}</span>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 text-sm py-2 px-4"
            >
              <MessageCircle size={16} />
              Consultar por WA
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ofertas;
