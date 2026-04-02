import { MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import imgPolloEntero from "../assets/products/pollo_entero_1775090313623.png";
import imgPackAlmacen from "../assets/products/pack_almacen_1775092426601.png";

const ofertas = [
  { nombre: "Pollo Entero", antes: "$4.500", ahora: "$3.800", desc: "Fresco del día, aprox 2.5kg", img: imgPolloEntero },
  { nombre: "Pack Almacén", antes: "$12.000", ahora: "$9.900", desc: "Arroz, aceite, fideos, harina y más", img: imgPackAlmacen },
];

const Ofertas = () => {
  const { addToCart } = useCart();
  
  return (
  <section id="ofertas" className="bg-background py-16">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-10">
        OFERTAS DE LA SEMANA
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ofertas.map((o) => (
          <div key={o.nombre} className="bg-offer-bg rounded-lg p-6 relative flex flex-col h-full overflow-hidden">
            <span className="badge-offer absolute top-4 right-4 z-10">OFERTA</span>
            <div className="w-full h-48 mb-4 rounded-md overflow-hidden relative bg-white flex items-center justify-center">
              <img src={o.img} alt={o.nombre} className="w-full h-full object-cover" loading="lazy" />
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-heading text-xl font-bold text-foreground mt-2">{o.nombre}</h3>
              <p className="font-body text-muted-foreground text-sm mt-1">{o.desc}</p>
              <div className="mt-auto pt-4 pb-4 flex items-baseline gap-3">
                <span className="font-heading text-2xl font-bold text-primary">{o.ahora}</span>
                <span className="font-body text-sm text-muted-foreground line-through">{o.antes}</span>
              </div>
            <button
              onClick={() => addToCart({ nombre: `Oferta: ${o.nombre}`, precio: o.ahora })}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4 text-sm py-2 px-4 rounded font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingCart size={16} />
              Agregar al Carrito
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Ofertas;
