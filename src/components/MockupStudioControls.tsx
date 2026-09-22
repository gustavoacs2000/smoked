import React from 'react';
import { MockupThemeId, DeviceViewport } from '../types';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  BookOpen,
  Award,
  ShoppingBag,
  Flame,
  Palette,
  Sparkles
} from 'lucide-react';
import { BrandFlameMascot } from './BrandLogo';

interface MockupStudioControlsProps {
  currentTheme: MockupThemeId;
  onSelectTheme: (theme: MockupThemeId) => void;
  viewport: DeviceViewport;
  onSelectViewport: (vp: DeviceViewport) => void;
  onOpenBrandGuide: () => void;
  onOpenFranchise: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const MockupStudioControls: React.FC<MockupStudioControlsProps> = ({
  currentTheme,
  onSelectTheme,
  viewport,
  onSelectViewport,
  onOpenBrandGuide,
  onOpenFranchise,
  onOpenCart,
  cartCount
}) => {
  const themes: { id: MockupThemeId; label: string; tag: string; color: string }[] = [
    {
      id: 'nocturno',
      label: '1. Nocturno & Brasa',
      tag: 'Preto Carvão & Laranja',
      color: '#ea5b13'
    },
    {
      id: 'artesanal',
      label: '2. Artesanal & Tradição',
      tag: 'Marrom Defumado & Sal',
      color: '#ffb300'
    },
    {
      id: 'fastcasual',
      label: '3. Fast-Casual & Franquia',
      tag: 'Vermelho Carne & Brasa',
      color: '#a8160b'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#161413]/95 backdrop-blur-md border-b border-[#3f2a22] text-[#e5e2df] px-3 sm:px-6 py-2.5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand identity badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <BrandFlameMascot size={26} animated />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display-rustic text-lg tracking-wider text-white">
                SMOKED BY DIGÃO
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#3f2a22] text-[#ffb300] font-mono">
                MOCKUP STUDIO
              </span>
            </div>
            <p className="text-[10px] text-[#e5e2df]/60 font-rubik">
              Chef Rodrigo Lopes • Pitsmoke Asa Norte, Brasília
            </p>
          </div>
        </div>

        {/* Mockup Concepts Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#1f1c1a] border border-[#3f2a22] rounded-xl overflow-x-auto max-w-full">
          {themes.map(t => {
            const isActive = currentTheme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTheme(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-rubik font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#2b2b2b] text-white shadow-md ring-1 ring-[#ea5b13]'
                    : 'text-[#e5e2df]/70 hover:text-white hover:bg-[#252220]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: t.color }}
                />
                <span className="font-bold">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Viewport Device Switcher & Modals Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Device icons */}
          <div className="flex items-center bg-[#1f1c1a] border border-[#3f2a22] rounded-xl p-1">
            <button
              onClick={() => onSelectViewport('desktop')}
              className={`p-1.5 rounded-lg transition ${
                viewport === 'desktop'
                  ? 'bg-[#ea5b13] text-white'
                  : 'text-[#e5e2df]/60 hover:text-white'
              }`}
              title="Visão Desktop (1440px)"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectViewport('tablet')}
              className={`p-1.5 rounded-lg transition ${
                viewport === 'tablet'
                  ? 'bg-[#ea5b13] text-white'
                  : 'text-[#e5e2df]/60 hover:text-white'
              }`}
              title="Visão Tablet (768px)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectViewport('mobile')}
              className={`p-1.5 rounded-lg transition ${
                viewport === 'mobile'
                  ? 'bg-[#ea5b13] text-white'
                  : 'text-[#e5e2df]/60 hover:text-white'
              }`}
              title="Visão Mobile (iPhone)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectViewport('fullscreen')}
              className={`p-1.5 rounded-lg transition ${
                viewport === 'fullscreen'
                  ? 'bg-[#ea5b13] text-white'
                  : 'text-[#e5e2df]/60 hover:text-white'
              }`}
              title="Tela Inteira"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Brand Manual Drawer Button */}
          <button
            onClick={onOpenBrandGuide}
            className="px-3 py-1.5 rounded-xl bg-[#2b2b2b] hover:bg-[#3f2a22] text-[#ffb300] border border-[#ffb300]/30 text-xs font-bold font-rubik flex items-center gap-1.5 transition"
            title="Ver Manual de Identidade Visual Oficial"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#ea5b13]" />
            <span className="hidden sm:inline">Manual da Marca</span>
          </button>

          {/* Franchise Portal */}
          <button
            onClick={onOpenFranchise}
            className="px-3 py-1.5 rounded-xl bg-[#a8160b] hover:bg-[#8e1209] text-white text-xs font-bold font-rubik flex items-center gap-1.5 transition shadow-sm"
            title="Abrir Simulador de Franquia"
          >
            <Award className="w-3.5 h-3.5 text-[#ffb300]" />
            <span className="hidden sm:inline">Franquias</span>
          </button>

          {/* Cart with counter */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-xl bg-[#ea5b13] hover:bg-[#a8160b] text-white transition shadow-md"
            title="Sacola de Pedido"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white text-[#a8160b] text-[10px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
