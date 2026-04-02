import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Cart } from "./Cart";

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
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            className="h-12 md:h-16 w-auto object-contain"
          />
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
          <Cart />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Cart />
          <button
            onClick={() => setOpen(!open)}
            className="text-navbar-foreground"
            aria-label="Menú"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
