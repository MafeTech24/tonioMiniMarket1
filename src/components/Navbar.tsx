import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/549XXXXXXXXXX?text=Hola%20Tonio!%20Quiero%20hacer%20un%20pedido";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navbar sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-heading text-2xl md:text-3xl font-extrabold text-navbar-foreground tracking-wide">
            TONIO
          </span>
          <span className="font-body text-[10px] md:text-xs text-navbar-foreground/80 tracking-wider">
            Despensa &amp; Pollería · Las Palmas
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-navbar-foreground/90 hover:text-navbar-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navbar-foreground"
          aria-label="Menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navbar border-t border-navbar-foreground/20 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-body text-navbar-foreground/90 hover:text-navbar-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4 w-full justify-center">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
