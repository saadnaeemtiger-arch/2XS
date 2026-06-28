import { useState } from 'react';
import { X, Trash2, Calendar, Clock, ShoppingBag, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) {
  const [deliveryType, setDeliveryType] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Calculate financials
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% sales tax
  const deliveryFee = deliveryType === 'Delivery' && subtotal > 0 ? 15 : 0;
  const total = subtotal + tax + deliveryFee;

  // WhatsApp Order Link Generator
  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let orderList = '';
    cartItems.forEach((item, index) => {
      orderList += `${index + 1}. *${item.product.name}* (x${item.quantity}) — $${(item.product.price * item.quantity).toFixed(2)}\n`;
      if (item.cakeCustomization) {
        orderList += `   - Tiers: ${item.cakeCustomization.tiers}\n`;
        orderList += `   - Flavor: ${item.cakeCustomization.flavor}\n`;
        orderList += `   - Frosting: ${item.cakeCustomization.frosting}\n`;
        orderList += `   - Add-ons: ${item.cakeCustomization.hasGoldLeaf ? '24k Gold Leaf ' : ''}${item.cakeCustomization.hasFlowers ? 'Organic Flowers' : ''}\n`;
        if (item.cakeCustomization.inscription) {
          orderList += `   - Inscription: "${item.cakeCustomization.inscription}"\n`;
        }
      }
    });

    const structuredMessage = `🍰 *NEW CAKIEBAKIE ORDER INQUIRY* 🍰\n\n` +
      `*Fulfillment Method:* ${deliveryType}\n` +
      `*Requested Date:* ${date || 'To be discussed'}\n` +
      `*Requested Time:* ${time || 'To be discussed'}\n\n` +
      `*Items ordered:*\n${orderList}\n` +
      `*Special Baking Instructions:* ${notes || 'None'}\n\n` +
      `*Pricing Details:*\n` +
      `- Subtotal: $${subtotal.toFixed(2)}\n` +
      `- Est Tax: $${tax.toFixed(2)}\n` +
      `- Fulfillment Fee: $${deliveryFee.toFixed(2)}\n` +
      `*ESTIMATED TOTAL: $${total.toFixed(2)}*\n\n` +
      `Please let me know if this order is confirmed! Thank you!`;

    const whatsappUrl = `https://wa.me/15550199?text=${encodeURIComponent(structuredMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.35 }}
          className="w-screen max-w-md bg-amber-50 h-full flex flex-col justify-between shadow-2xl border-l border-amber-100"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-white border-b border-amber-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-950">
              <ShoppingBag className="h-5 w-5 text-rose-500" />
              <h3 className="text-lg font-bold font-sans">Your Shopping Bag</h3>
              <span className="text-xs font-mono bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full font-bold">
                {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)} items
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-amber-100 text-amber-900 transition-colors focus:outline-none"
              aria-label="Close Shopping Bag"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-amber-900/40">
                <span className="text-5xl">🥐</span>
                <h4 className="text-base font-bold font-sans">Your bag is empty</h4>
                <p className="text-xs max-w-xs">Browse our catalog, design custom cakes, and add delicious bakery items here!</p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-rose-500 hover:text-rose-600"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 bg-white rounded-2xl border border-amber-100/50 shadow-sm flex gap-4 relative group"
                  >
                    {/* Trash Button */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-rose-50 text-amber-900/40 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none"
                      aria-label="Remove Item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    {/* Image */}
                    <div className="h-16 w-16 rounded-xl overflow-hidden bg-amber-50 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold text-amber-950 font-sans leading-snug pr-6">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-amber-900/60 font-mono">
                        ${item.product.price.toFixed(2)} each
                      </p>

                      {/* Cake custom specifications banner */}
                      {item.cakeCustomization && (
                        <div className="bg-amber-50 p-2 rounded-lg text-[10px] text-amber-950 space-y-0.5 mt-1 font-mono leading-relaxed border border-amber-100/40">
                          <div className="text-rose-600 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="h-3 w-3" /> Designer Cake Config
                          </div>
                          <div>• Tiers: {item.cakeCustomization.tiers} layers</div>
                          <div>• Flavor: {item.cakeCustomization.flavor}</div>
                          <div>• Frosting: {item.cakeCustomization.frosting}</div>
                          <div>• Deco: {item.cakeCustomization.hasGoldLeaf ? '24k Gold ' : ''}{item.cakeCustomization.hasFlowers ? 'Flowers' : ''}</div>
                          {item.cakeCustomization.inscription && (
                            <div className="italic text-rose-500 font-semibold">• Note: "{item.cakeCustomization.inscription}"</div>
                          )}
                        </div>
                      )}

                      {/* Quantity Toggles */}
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="h-6 w-6 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center border border-amber-100"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold font-mono text-amber-950 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-6 w-6 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center border border-amber-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Fulfillment Picker */}
                <div className="p-4 bg-white rounded-2xl border border-amber-100/50 space-y-4">
                  <div className="flex gap-2">
                    {['Pickup', 'Delivery'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setDeliveryType(type as 'Pickup' | 'Delivery')}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                          deliveryType === type
                            ? 'bg-rose-500 border-rose-400 text-white shadow-md'
                            : 'bg-amber-50 border-amber-100 text-amber-900 hover:bg-rose-50'
                        }`}
                      >
                        {type === 'Pickup' ? 'Store Pickup (Free)' : 'Doorstep Delivery (+$15)'}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-amber-900/60 font-mono flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-amber-50/50 border border-amber-100 rounded-lg p-2 text-xs text-amber-950 focus:outline-none focus:border-rose-300"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-amber-900/60 font-mono flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> Time
                      </label>
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-amber-50/50 border border-amber-100 rounded-lg p-2 text-xs text-amber-950 focus:outline-none focus:border-rose-300"
                      />
                    </div>
                  </div>

                  {/* Baking Instructions notes */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-amber-900/60 font-mono">
                      Special Baking Instructions
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Please make it eggless, or write 'Happy Bday Sara' on box..."
                      className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-3 py-2 text-xs text-amber-950 placeholder-amber-900/30 focus:outline-none focus:border-rose-300"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Pricing & Checkout summary */}
          {cartItems.length > 0 && (
            <div className="bg-white border-t border-amber-100 p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-amber-900/70">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-amber-900/70">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-mono font-semibold">${tax.toFixed(2)}</span>
                </div>
                {deliveryType === 'Delivery' && (
                  <div className="flex justify-between text-sm text-amber-900/70">
                    <span>Delivery Surcharge</span>
                    <span className="font-mono font-semibold">$15.00</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-amber-950 border-t border-amber-100 pt-2">
                  <span>Estimated Total</span>
                  <span className="font-mono text-rose-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout actions */}
              <div className="space-y-2">
                <button
                  id="cart-checkout-whatsapp"
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-bold text-white shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Order via WhatsApp Inquiry
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
                
                <button
                  onClick={onClearCart}
                  className="w-full py-2 rounded-xl bg-transparent hover:bg-rose-50 text-amber-900/60 hover:text-rose-600 text-xs font-semibold font-mono transition-colors"
                >
                  Clear Bag
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
