import React, { useState } from 'react';
import { MockupThemeId, DeviceViewport, MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './data/brandData';
import { MockupStudioControls } from './components/MockupStudioControls';
import { WebsiteMockup } from './components/WebsiteMockup';
import { CartDrawer } from './components/CartDrawer';
import { FranchiseModal } from './components/FranchiseModal';
import { BrandGuideModal } from './components/BrandGuideModal';
import { Check, Flame } from 'lucide-react';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<MockupThemeId>('nocturno');
  const [viewport, setViewport] = useState<DeviceViewport>('desktop');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      item: MENU_ITEMS[0], // Brisket 12h preloaded so visitors immediately see the cart experience
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`"${item.name}" adicionado à sacola!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(i => {
          if (i.item.id === id) {
            const newQ = i.quantity + delta;
            return newQ > 0 ? { ...i, quantity: newQ } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#141211] text-[#e5e2df] flex flex-col font-rubik selection:bg-[#ea5b13] selection:text-white">
      {/* Top Presentation Bar */}
      <MockupStudioControls
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
        viewport={viewport}
        onSelectViewport={setViewport}
        onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
        onOpenFranchise={() => setIsFranchiseOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 flex flex-col items-center justify-start p-0 md:p-6 overflow-x-hidden">
        {viewport === 'fullscreen' ? (
          <div className="w-full">
            <WebsiteMockup
              themeId={currentTheme}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
              cartCount={totalCartCount}
              onAddToCart={handleAddToCart}
            />
          </div>
        ) : viewport === 'desktop' ? (
          <div className="w-full max-w-[1440px] bg-[#1e1c1b] rounded-none md:rounded-3xl border-0 md:border md:border-[#3f2a22] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300">
            {/* Desktop Browser Bar Window Header */}
            <div className="hidden md:flex items-center justify-between px-5 py-3 bg-[#191716] border-b border-[#3f2a22]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#a8160b]" />
                <span className="w-3 h-3 rounded-full bg-[#ffb300]" />
                <span className="w-3 h-3 rounded-full bg-[#ea5b13]" />
              </div>
              <div className="px-6 py-1 rounded-full bg-[#23201f] border border-[#3f2a22] text-xs font-mono text-[#e5e2df]/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                https://smokedbydigao.com.br
              </div>
              <div className="text-[11px] font-mono text-[#ffb300] uppercase">
                {currentTheme === 'nocturno'
                  ? 'Mockup A • Nocturno & Brasa'
                  : currentTheme === 'artesanal'
                  ? 'Mockup B • Artesanal & Tradição'
                  : 'Mockup C • Fast-Casual & Franquia'}
              </div>
            </div>

            <WebsiteMockup
              themeId={currentTheme}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
              cartCount={totalCartCount}
              onAddToCart={handleAddToCart}
            />
          </div>
        ) : viewport === 'tablet' ? (
          /* Tablet (iPad frame) */
          <div className="w-full max-w-[768px] my-4 bg-[#1f1d1c] rounded-[40px] border-[12px] border-[#2b2b2b] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 relative">
            {/* Camera dot */}
            <div className="w-full py-2 bg-[#191716] flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#111] border border-[#333]" />
            </div>

            <WebsiteMockup
              themeId={currentTheme}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
              cartCount={totalCartCount}
              onAddToCart={handleAddToCart}
            />
          </div>
        ) : (
          /* Mobile (iPhone 15 Pro frame) */
          <div className="w-full max-w-[390px] my-4 bg-[#1f1d1c] rounded-[48px] border-[12px] border-[#2b2b2b] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 relative">
            {/* Dynamic Island Notch */}
            <div className="w-full pt-3 pb-2 bg-[#191716] flex justify-center items-center">
              <div className="w-28 h-6 rounded-full bg-black flex items-center justify-between px-3 border border-[#333]/50">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e1c1b] border border-[#444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e1c1b] border border-[#444]" />
              </div>
            </div>

            <WebsiteMockup
              themeId={currentTheme}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
              cartCount={totalCartCount}
              onAddToCart={handleAddToCart}
            />

            {/* Bottom Home Indicator */}
            <div className="w-full py-2 bg-[#191716] flex justify-center">
              <div className="w-32 h-1 rounded-full bg-white/30" />
            </div>
          </div>
        )}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-[#ea5b13] text-white font-bold font-rubik text-xs flex items-center gap-2 shadow-2xl animate-bounce">
          <Check className="w-4 h-4 text-[#ffb300]" />
          {toastMessage}
        </div>
      )}

      {/* Floating Action Trigger on Mobile for Cart */}
      {totalCartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="md:hidden fixed bottom-6 left-6 right-6 z-40 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#ea5b13] to-[#a8160b] text-white font-bold font-rubik text-sm flex items-center justify-between shadow-2xl"
        >
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#ffb300]" />
            Ver Sacola do Pit ({totalCartCount})
          </span>
          <span className="font-mono">Abrir Pedido →</span>
        </button>
      )}

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Franchise Simulator Modal */}
      <FranchiseModal
        isOpen={isFranchiseOpen}
        onClose={() => setIsFranchiseOpen(false)}
      />

      {/* Brand Identity Guide Modal */}
      <BrandGuideModal
        isOpen={isBrandGuideOpen}
        onClose={() => setIsBrandGuideOpen(false)}
      />
    </div>
  );
}
