import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/549XXXXXXXXXX?text=Hola!%20Quiero%20consultar%20por%20un%20producto";

type Categoria = "Todos" | "Pollería" | "Despensa" | "Verdulería" | "Lácteos";

interface Producto {
  nombre: string;
  precio: string;
  categoria: Categoria;
  desc: string;
}

const productos: Producto[] = [
  { nombre: "Pollo Entero", precio: "$3.800", categoria: "Pollería", desc: "Fresco, aprox 2.5kg" },
  { nombre: "Pata-Muslo x kg", precio: "$2.200", categoria: "Pollería", desc: "Corte fresco del día" },
  { nombre: "Suprema x kg", precio: "$3.500", categoria: "Pollería", desc: "Sin hueso, lista para cocinar" },
  { nombre: "Arroz x 1kg", precio: "$1.200", categoria: "Despensa", desc: "Arroz largo fino" },
  { nombre: "Aceite Girasol 1.5L", precio: "$2.800", categoria: "Despensa", desc: "Primera calidad" },
  { nombre: "Fideos x 500g", precio: "$800", categoria: "Despensa", desc: "Variedad de cortes" },
  { nombre: "Tomate x kg", precio: "$1.500", categoria: "Verdulería", desc: "Redondo, de estación" },
  { nombre: "Papa x kg", precio: "$900", categoria: "Verdulería", desc: "Para todo uso" },
  { nombre: "Leche Sachet 1L", precio: "$850", categoria: "Lácteos", desc: "Entera" },
  { nombre: "Huevos x 12", precio: "$2.400", categoria: "Lácteos", desc: "De granja" },
];

const categorias: Categoria[] = ["Todos", "Pollería", "Despensa", "Verdulería", "Lácteos"];

const Catalogo = () => {
  const [cat, setCat] = useState<Categoria>("Todos");
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
            <div key={p.nombre} className="card-market p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block font-body text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded mb-2">
                    {p.categoria}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{p.nombre}</h3>
                  <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="font-heading text-xl font-bold text-primary whitespace-nowrap">{p.precio}</span>
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
};

export default Catalogo;
