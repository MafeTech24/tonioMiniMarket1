import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import imgPolloEntero from "../assets/products/pollo_entero_1775090313623.png";
import imgPataMuslo from "../assets/products/pata_muslo_1775090325607.png";
import imgSuprema from "../assets/products/suprema_pollo_1775090341127.png";
import imgArroz from "../assets/products/arroz_paquete_1775090358109.png";
import imgAceite from "../assets/products/aceite_girasol_1775090371897.png";
import imgFideos from "../assets/products/fideos_paquete_1775090383942.png";
import imgHuevos from "../assets/products/huevos_docena_1775090399073.png";
import imgLeche from "../assets/products/leche_sachet_1775090414750.png";
import imgYogurt from "../assets/products/yogurt_botella_1775090428174.png";

type Categoria = "Todos" | "Pollería" | "Almacén" | "Lácteos";

interface Producto {
  nombre: string;
  precio: string;
  categoria: Categoria;
  desc: string;
  img: string;
}

const productos: Producto[] = [
  { nombre: "Pollo Entero", precio: "$3.800", categoria: "Pollería", desc: "Fresco, aprox 2.5kg", img: imgPolloEntero },
  { nombre: "Pata-Muslo x kg", precio: "$2.200", categoria: "Pollería", desc: "Corte fresco del día", img: imgPataMuslo },
  { nombre: "Suprema x kg", precio: "$3.500", categoria: "Pollería", desc: "Sin hueso, lista para cocinar", img: imgSuprema },
  { nombre: "Arroz x 1kg", precio: "$1.200", categoria: "Almacén", desc: "Arroz largo fino", img: imgArroz },
  { nombre: "Aceite Girasol 1.5L", precio: "$2.800", categoria: "Almacén", desc: "Primera calidad", img: imgAceite },
  { nombre: "Fideos x 500g", precio: "$800", categoria: "Almacén", desc: "Variedad de cortes", img: imgFideos },
  { nombre: "Huevos x 12", precio: "$2.400", categoria: "Almacén", desc: "De granja", img: imgHuevos },
  { nombre: "Leche Sachet 1L", precio: "$850", categoria: "Lácteos", desc: "Entera", img: imgLeche },
  { nombre: "Yogurt de Litro", precio: "$1.500", categoria: "Lácteos", desc: "Sabor frutilla o vainilla", img: imgYogurt },
];

const categorias: Categoria[] = ["Todos", "Pollería", "Almacén", "Lácteos"];

const Catalogo = () => {
  const [cat, setCat] = useState<Categoria>("Todos");
  const { addToCart } = useCart();
  const filtered = cat === "Todos" ? productos : productos.filter((p) => p.categoria === cat);

  return (
    <section id="catalogo" className="bg-section-alt py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-8">
          NUESTROS PRODUCTOS
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-heading text-sm font-bold px-4 py-2 rounded-full transition-colors ${
                cat === c ? "pill-active" : "pill-inactive"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.nombre} className="card-market p-5 flex flex-col h-full overflow-hidden">
              <div className="w-full h-48 mb-4 rounded-md overflow-hidden relative bg-white flex items-center justify-center">
                <img src={p.img} alt={p.nombre} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-start justify-between flex-1">
                <div>
                  <span className="inline-block font-body text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded mb-2">
                    {p.categoria}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{p.nombre}</h3>
                  <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="font-heading text-xl font-bold text-primary whitespace-nowrap">{p.precio}</span>
              </div>
              <button
                onClick={() => addToCart({ nombre: p.nombre, precio: p.precio })}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto pt-4 text-sm py-2 px-4 rounded font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart size={16} />
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
