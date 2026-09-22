import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, Clock, Check } from 'lucide-react';
import { BrandFlameMascot } from './BrandLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [deliveryType, setDeliveryType] = useState<'takeout' | 'delivery'>('takeout');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [observation, setObservation] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' ? 12.00 : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const itemsSummary = items
      .map(i => `• ${i.quantity}x ${i.item.name} (R$ ${(i.item.price * i.quantity).toFixed(2).replace('.', ',')})`)
      .join('%0A');

    const msg = `🔥 *NOVO PEDIDO - SMOKED BY DIGÃO*%0A` +
      `*Cliente:* ${customerName || 'Cliente Asa Norte'}%0A` +
      `*Tipo:* ${deliveryType === 'delivery' ? `Delivery em Brasília (%0AEndereço: ${address})` : 'Retirada no Balcão (Asa Norte)'}%0A%0A` +
      `*Itens do Pedido:*%0A${itemsSummary}%0A%0A` +
      (deliveryType === 'delivery' ? `*Taxa de Entrega:* R$ 12,00%0A` : '') +
      `*Total:* R$ ${total.toFixed(2).replace('.', ',')}%0A` +
      (observation ? `*Observações:* ${encodeURIComponent(observation)}%0A` : '') +
      `%0A_Enviado pelo mockup do site oficial Smoked by Digão_`;

    // Open WhatsApp in a clean safe way
    window.open(`https://api.whatsapp.com/send?phone=5561999999999&text=${msg}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#23201f] text-[#e5e2df] shadow-2xl flex flex-col border-l border-[#3f2a22]">
          {/* Header */}
          <div className="p-5 border-b border-[#3f2a22] flex items-center justify-between bg-[#1b1918]">
            <div className="flex items-center gap-3">
              <BrandFlameMascot size={32} />
              <div>
                <h3 className="font-display-rustic text-2xl text-white tracking-wide">
                  SEU PEDIDO DO PIT
                </h3>
                <p className="text-xs text-[#ea5b13] font-rubik">
                  Smoked by Digão • Asa Norte
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#3f2a22] text-[#e5e2df]/80 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-serif-brand text-white">
                  Pedido Encaminhado ao WhatsApp!
                </h4>
                <p className="text-sm text-[#e5e2df]/80 font-rubik max-w-xs mx-auto">
                  A mensagem foi formatada com todos os cortes selecionados e enviada para confirmação com a equipe do Chef Rodrigo Lopes.
                </p>
                <button
                  onClick={() => {
                    setOrderSent(false);
                    onClearCart();
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#ea5b13] text-white font-bold font-rubik text-sm hover:bg-[#a8160b] transition shadow-lg"
                >
                  Concluir & Voltar ao Site
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2b2b2b] text-[#ea5b13] flex items-center justify-center border border-[#3f2a22]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-medium text-white font-rubik">Sua sacola está vazia</p>
                <p className="text-xs text-[#e5e2df]/60 font-rubik max-w-xs mx-auto">
                  Explore os cortes defumados 12h, burgers na brasa e acompanhamentos do cardápio.
                </p>
              </div>
            ) : (
              <>
                {/* Delivery Mode Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#1a1716] rounded-xl border border-[#3f2a22]">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('takeout')}
                    className={`py-2 px-3 rounded-lg text-xs font-rubik font-semibold flex items-center justify-center gap-1.5 transition ${
                      deliveryType === 'takeout'
                        ? 'bg-[#ea5b13] text-white shadow-md'
                        : 'text-[#e5e2df]/70 hover:text-white'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" /> Retirar na Asa Norte
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 px-3 rounded-lg text-xs font-rubik font-semibold flex items-center justify-center gap-1.5 transition ${
                      deliveryType === 'delivery'
                        ? 'bg-[#ea5b13] text-white shadow-md'
                        : 'text-[#e5e2df]/70 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" /> Delivery Brasília
                  </button>
                </div>

                {/* Items List */}
                <div className="divide-y divide-[#3f2a22] border-y border-[#3f2a22]">
                  {items.map(cartItem => (
                    <div key={cartItem.item.id} className="py-3 flex items-center justify-between gap-3">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-14 h-14 rounded-lg object-cover border border-[#3f2a22]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate font-rubik">
                          {cartItem.item.name}
                        </h4>
                        <p className="text-xs text-[#ea5b13] font-medium font-rubik">
                          R$ {cartItem.item.price.toFixed(2).replace('.', ',')} cada
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="w-6 h-6 rounded bg-[#3f2a22] text-white flex items-center justify-center hover:bg-[#ea5b13] transition text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold font-mono px-1">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="w-6 h-6 rounded bg-[#3f2a22] text-white flex items-center justify-center hover:bg-[#ea5b13] transition text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <span className="text-sm font-bold text-white font-mono">
                          R$ {(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')}
                        </span>
                        <button
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="text-[#e5e2df]/40 hover:text-[#a8160b] mt-2 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <form id="order-form" onSubmit={handleSendWhatsApp} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      Seu Nome:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Rodrigo / Gustavo"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#1a1716] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    />
                  </div>

                  {deliveryType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                        Endereço de Entrega no DF:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: SQN 305 Bloco C Apt 204 - Asa Norte"
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#1a1716] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      Ponto da Carne ou Observações:
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Enviar molho barbecue extra, talheres descartáveis..."
                      value={observation}
                      onChange={e => setObservation(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#1a1716] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer Totals & CTA */}
          {items.length > 0 && !orderSent && (
            <div className="p-5 border-t border-[#3f2a22] bg-[#1a1716] space-y-3">
              <div className="space-y-1.5 text-xs text-[#e5e2df]/80 font-rubik">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {deliveryType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Taxa de Entrega (Brasília)</span>
                    <span className="font-mono text-[#ffb300]">R$ 12,00</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#3f2a22]">
                  <span>Total do Pedido</span>
                  <span className="font-mono text-[#ea5b13]">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="order-form"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ea5b13] to-[#a8160b] text-white font-bold font-rubik flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition shadow-lg shadow-[#a8160b]/30"
              >
                <Send className="w-4 h-4" />
                Finalizar e Enviar via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
