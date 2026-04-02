import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const formatTotal = (num: number) => {
  return "$" + num.toLocaleString("es-AR");
};

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, itemCount } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    let message = "Hola! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach((item) => {
      message += `- ${item.cantidad}x ${item.nombre} (${item.precioFormateado})\n`;
    });
    message += `\nTotal estimado: ${formatTotal(total)}`;
    
    const waLink = `https://wa.me/5493516527241?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 text-navbar-foreground hover:bg-navbar-foreground/10 rounded-full transition-colors flex items-center justify-center">
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md h-full bg-background/95 backdrop-blur-xl border-l-primary/20">
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl text-primary border-b pb-4">Tu Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 -mx-6 px-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-60">
              <ShoppingCart size={64} className="mb-4" />
              <p className="font-body text-lg">El carrito está vacío</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.nombre} className="flex flex-col gap-2 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="flex justify-between items-start">
                    <span className="font-heading font-bold text-foreground line-clamp-2">{item.nombre}</span>
                    <button
                      onClick={() => removeFromCart(item.nombre)}
                      className="text-red-500 hover:bg-red-500/10 p-1 rounded transition-colors"
                      aria-label="Eliminar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-body text-sm font-semibold">{item.precioFormateado}</span>
                    <div className="flex items-center gap-3 bg-background border border-primary/20 rounded-md px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.nombre, item.cantidad - 1)}
                        className="text-primary hover:bg-primary/10 rounded p-0.5"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-body w-6 text-center text-sm font-bold">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.nombre, item.cantidad + 1)}
                        className="text-primary hover:bg-primary/10 rounded p-0.5"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-4 mt-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="font-heading text-xl font-bold">Total:</span>
            <span className="font-heading text-2xl font-bold text-primary">
              {formatTotal(total)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full btn-whatsapp flex items-center justify-center gap-2 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageCircle size={20} />
            <span>Enviar Pedido por WhatsApp</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
