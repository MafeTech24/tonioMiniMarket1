import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-chicken.jpg";

const WA_LINK = "https://wa.me/549XXXXXXXXXX?text=Hola%20Tonio!%20Quiero%20hacer%20un%20pedido";

const Hero = () => (
  <section id="inicio" className="bg-background">
    <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 py-12 md:py-20 px-4">
      {/* Text */}
      <div className="order-2 md:order-1">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary leading-none tracking-tight">
          POLLO FRESCO<br />DEL DÍA
        </h1>
        <p className="mt-4 font-body text-lg md:text-xl text-secondary font-semibold">
          Barrio Las Palmas, Córdoba · Pedís por WhatsApp
        </p>
        <p className="mt-2 font-body text-muted-foreground">
          Despensa completa, verduras frescas y el mejor pollo del barrio. Te lo llevamos o te lo preparamos.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-8 text-lg py-4 px-8"
        >
          <MessageCircle size={22} />
          HACER UN PEDIDO
        </a>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2">
        <img
          src={heroImg}
          alt="Pollo fresco con verduras del día"
          width={1024}
          height={768}
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
