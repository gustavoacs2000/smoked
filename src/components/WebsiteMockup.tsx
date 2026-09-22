import React, { useState } from 'react';
import { MockupThemeId, MenuItem, CartItem, MeatCut } from '../types';
import { MENU_ITEMS, PROCESS_STEPS, REVIEWS, BRAND_COLORS } from '../data/brandData';
import { BrandLogo, BrandFlameMascot } from './BrandLogo';
import { ButcherSteerDiagram } from './FineLineIllustrations';
import {
  Flame,
  Clock,
  MapPin,
  ShoppingBag,
  Phone,
  ChevronRight,
  Star,
  Sparkles,
  Award,
  ArrowRight,
  Compass,
  UtensilsCrossed,
  ChefHat,
  Menu as MenuIcon,
  X
} from 'lucide-react';

interface WebsiteMockupProps {
  themeId: MockupThemeId;
  onOpenCart: () => void;
  onOpenFranchise: () => void;
  onOpenBrandGuide: () => void;
  cartCount: number;
  onAddToCart: (item: MenuItem) => void;
}

export const WebsiteMockup: React.FC<WebsiteMockupProps> = ({
  themeId,
  onOpenCart,
  onOpenFranchise,
  onOpenBrandGuide,
  cartCount,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  // Theme-specific styles
  const isNocturno = themeId === 'nocturno';
  const isArtesanal = themeId === 'artesanal';
  const isFastCasual = themeId === 'fastcasual';

  // Base background & theme wrapper
  const themeBg = isNocturno
    ? 'bg-[#181615] text-[#e5e2df]'
    : isArtesanal
    ? 'bg-[#221814] text-[#e5e2df]'
    : 'bg-[#1f1917] text-[#e5e2df]';

  const accentColor = isNocturno
    ? '#ea5b13' // Laranja Brasa
    : isArtesanal
    ? '#ffb300' // Amarelo Mostarda
    : '#a8160b'; // Vermelho Carne

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className={`w-full min-h-screen ${themeBg} font-rubik selection:bg-[#ea5b13] selection:text-white transition-colors duration-500 relative`}>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className={`w-full py-2 px-4 text-xs font-medium text-center flex items-center justify-center gap-2 border-b ${
        isFastCasual
          ? 'bg-[#a8160b] text-white border-[#871108]'
          : isArtesanal
          ? 'bg-[#3f2a22] text-[#ffb300] border-[#55392e]'
          : 'bg-[#2b2b2b] text-[#e5e2df] border-[#3f2a22]'
      }`}>
        <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#ffb300] animate-pulse" />
          Smoker Aceso na Asa Norte
        </span>
        <span className="hidden sm:inline text-white/50">•</span>
        <span className="hidden sm:inline text-white/90">
          Delivery e Retirada no Plano Piloto (Brasília) • Quarta a Domingo das 11h às 23h
        </span>
        <button
          onClick={onOpenBrandGuide}
          className="ml-2 underline text-white hover:text-[#ffb300] text-[11px] font-semibold transition"
        >
          Ver Manual da Marca
        </button>
      </div>

      {/* 2. STICKY NAVBAR */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isNocturno
          ? 'bg-[#1c1a19]/90 border-[#3f2a22]'
          : isArtesanal
          ? 'bg-[#261d19]/90 border-[#3f2a22]'
          : 'bg-[#241a17]/90 border-[#a8160b]/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <BrandLogo
              variant="horizontal"
              themeMode="dark"
              size="md"
              className="group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#e5e2df]/80">
            <a href="#cardapio" className="hover:text-[#ea5b13] transition">
              Cardápio do Pit
            </a>
            <a href="#processo" className="hover:text-[#ea5b13] transition">
              O Ritual Low & Slow
            </a>
            <a href="#cortes" className="hover:text-[#ea5b13] transition">
              Cortes Nobres
            </a>
            <a href="#chef" className="hover:text-[#ea5b13] transition">
              Chef Rodrigo Lopes
            </a>
            <button
              onClick={onOpenFranchise}
              className="text-[#ffb300] hover:text-white transition flex items-center gap-1 font-semibold"
            >
              <Award className="w-4 h-4 text-[#ea5b13]" />
              Seja Franqueado
            </button>
            <a href="#localizacao" className="hover:text-[#ea5b13] transition">
              Asa Norte (DF)
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-[#2b2b2b] hover:bg-[#3f2a22] text-white border border-[#3f2a22] transition flex items-center gap-2 shadow-md"
              title="Abrir sacola de pedidos"
            >
              <ShoppingBag className="w-5 h-5 text-[#ea5b13]" />
              <span className="hidden sm:inline text-xs font-bold font-mono">
                {cartCount > 0 ? `${cartCount} itens` : 'Sacola'}
              </span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#ea5b13] text-white text-[11px] font-bold flex items-center justify-center -top-1 -right-1 absolute">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Order WhatsApp Button */}
            <a
              href="https://api.whatsapp.com/send?phone=5561999999999&text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Smoked%20by%20Digão%20(Asa%20Norte)"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg transition active:scale-95 ${
                isFastCasual
                  ? 'bg-gradient-to-r from-[#ea5b13] to-[#a8160b] hover:brightness-110 shadow-[#a8160b]/30'
                  : 'bg-[#ea5b13] hover:bg-[#a8160b] shadow-[#ea5b13]/20'
              }`}
            >
              <Phone className="w-4 h-4" />
              Pedir no WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#2b2b2b] text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden p-4 bg-[#23201f] border-b border-[#3f2a22] space-y-3">
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-white hover:text-[#ea5b13]"
            >
              Cardápio do Pit
            </a>
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-white hover:text-[#ea5b13]"
            >
              O Ritual Low & Slow
            </a>
            <a
              href="#cortes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-white hover:text-[#ea5b13]"
            >
              Cortes Nobres
            </a>
            <a
              href="#chef"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-white hover:text-[#ea5b13]"
            >
              Chef Rodrigo Lopes
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFranchise();
              }}
              className="w-full text-left py-2 text-sm text-[#ffb300] font-bold"
            >
              Seja Franqueado Smoked
            </button>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-white hover:text-[#ea5b13]"
            >
              Unidade Asa Norte
            </a>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#3f2a22]">
        {/* Background glow & fire embers styling */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ea5b13]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[400px] bg-[#a8160b]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Positioning */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Origin badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2b2b2b] border border-[#ea5b13]/30 shadow-md">
                <BrandFlameMascot size={20} />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#ffb300]">
                  ORIGEM ASA NORTE • BRASÍLIA
                </span>
                <span className="text-[10px] bg-[#ea5b13] text-white px-2 py-0.5 rounded-full font-bold">
                  CHEF RODRIGO LOPES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display-rustic tracking-wide text-white leading-none">
                O VERDADEIRO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb300] via-[#ea5b13] to-[#a8160b]">
                  PITSMOKE
                </span>{' '}
                NO CORAÇÃO DE BRASÍLIA.
              </h1>

              {/* Subheadline with craft philosophy */}
              <p className="text-base sm:text-lg text-[#e5e2df]/85 font-rubik leading-relaxed max-w-2xl">
                Cortes nobres Angus preparados no método texano tradicional <strong>Low & Slow por até 12 horas</strong> sob fogo brando de lenha de macieira. O lendário <em>bark</em> apimentado, o anel rosado de fumaça e a textura amanteigada que derrete ao toque.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#cardapio"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#ea5b13] to-[#a8160b] text-white font-bold font-rubik text-sm tracking-wider uppercase flex items-center gap-2 hover:brightness-110 active:scale-95 transition shadow-xl shadow-[#ea5b13]/25"
                >
                  <Flame className="w-5 h-5 text-[#ffb300]" />
                  Explorar Cardápio do Pit
                </a>

                <button
                  onClick={onOpenFranchise}
                  className="px-6 py-4 rounded-2xl bg-[#2b2b2b] hover:bg-[#3f2a22] text-[#ffb300] border border-[#ffb300]/30 font-bold font-rubik text-sm tracking-wide flex items-center gap-2 transition"
                >
                  <Award className="w-5 h-5 text-[#ea5b13]" />
                  Seja Franqueado
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#3f2a22]/80 max-w-lg">
                <div className="space-y-0.5">
                  <span className="font-display-rustic text-2xl text-white">12 HORAS</span>
                  <p className="text-xs text-[#e5e2df]/70">Defumação Lenta</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-display-rustic text-2xl text-[#ffb300]">100% NOBRE</span>
                  <p className="text-xs text-[#e5e2df]/70">Lenha de Frutíferas</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-display-rustic text-2xl text-[#ea5b13]">ANGUS CERT.</span>
                  <p className="text-xs text-[#e5e2df]/70">Alto Marmoreio</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#3f2a22] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Brisket Angus Defumado 12 Horas no Pit Smoked by Digão"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#a8160b]/90 backdrop-blur-md text-white text-xs font-bold font-mono tracking-wider shadow-lg flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#ffb300]" />
                  ESTRELA DA CASA
                </div>

                {/* Bottom Caption on Hero Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#1b1918]/90 backdrop-blur-md border border-[#3f2a22]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-base font-serif-brand">
                        Brisket Angus 12h • Fatiado
                      </h3>
                      <p className="text-xs text-[#ea5b13] font-medium font-rubik">
                        Bark caramelizado & Smoke Ring autêntico
                      </p>
                    </div>
                    <button
                      onClick={() => onAddToCart(MENU_ITEMS[0])}
                      className="px-4 py-2 rounded-xl bg-[#ea5b13] hover:bg-[#a8160b] text-white text-xs font-bold font-rubik transition flex items-center gap-1 shadow-md"
                    >
                      + Adicionar R$ 89,90
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Stamp floating on corner */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#23201f] border border-[#ea5b13]/40 shadow-xl backdrop-blur-md">
                <BrandFlameMascot size={38} animated />
                <div className="text-left">
                  <span className="text-[11px] font-mono text-[#ffb300] block uppercase">Padrão Chef Rodrigo</span>
                  <span className="text-xs font-bold text-white font-rubik">100% Autoral de Brasília</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELEÇÃO DO CARDÁPIO (MENU SECTION) */}
      <section id="cardapio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b2b2b] text-[#ea5b13] text-xs font-mono uppercase tracking-widest border border-[#3f2a22]">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            Gastronomia Pitsmoke
          </div>
          <h2 className="text-4xl sm:text-5xl font-display-rustic tracking-wide text-white">
            CARDÁPIO DO PITSMOKER
          </h2>
          <p className="text-sm sm:text-base text-[#e5e2df]/80 font-rubik">
            Cada corte passa por uma preparação artesanal que começa 24 horas antes do fogo. Escolha seus favoritos para retirada na Asa Norte ou delivery.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Todos os Itens' },
              { id: 'pitsmoke', label: 'Defumados no Pit (12h)' },
              { id: 'burgers', label: 'Burgers & Sanduíches' },
              { id: 'sides', label: 'Acompanhamentos Craft' },
              { id: 'combos', label: 'Combos Banquete' },
              { id: 'drinks', label: 'Chopp & Bebidas' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-rubik transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#ea5b13] text-white shadow-lg shadow-[#ea5b13]/30 scale-105'
                    : 'bg-[#2b2b2b] text-[#e5e2df]/70 hover:text-white hover:bg-[#3f2a22]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#23201f] border border-[#3f2a22] hover:border-[#ea5b13]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              {/* Product Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1716]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23201f] via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.smokeHours && (
                    <span className="px-2.5 py-1 rounded-md bg-[#2b2b2b]/90 backdrop-blur-sm text-xs font-mono font-bold text-[#ffb300] border border-[#ffb300]/30 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ea5b13]" /> {item.smokeHours}h no Pit
                    </span>
                  )}
                  {item.isSpecialty && (
                    <span className="px-2.5 py-1 rounded-md bg-[#a8160b]/90 backdrop-blur-sm text-xs font-rubik font-bold text-white shadow-md">
                      Chef Choice
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 text-[11px] text-[#e5e2df]/80 font-mono">
                  {item.serves}
                </div>
              </div>

              {/* Item Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white text-lg font-serif-brand group-hover:text-[#ffb300] transition">
                      {item.name}
                    </h3>
                  </div>
                  {item.cut && (
                    <p className="text-xs text-[#ea5b13] font-medium font-rubik mb-2">
                      {item.cut}
                    </p>
                  )}
                  <p className="text-xs text-[#e5e2df]/70 font-rubik leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#1a1716] text-[#e5e2df]/60 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Price & Add to Cart */}
                <div className="pt-3 border-t border-[#3f2a22] flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-white font-mono">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs line-through text-[#e5e2df]/40 font-mono">
                        R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-3.5 py-2 rounded-xl bg-[#ea5b13] hover:bg-[#a8160b] text-white text-xs font-bold font-rubik flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-[#ea5b13]/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    + Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. O RITUAL LOW & SLOW (PROCESS SECTION) */}
      <section id="processo" className="py-20 bg-[#1e1b1a] border-y border-[#3f2a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffb300] block">
              A Arte do Fogo de Chão & Pitsmoker
            </span>
            <h2 className="text-4xl sm:text-5xl font-display-rustic tracking-wide text-white">
              O RITUAL LOW & SLOW
            </h2>
            <p className="text-sm text-[#e5e2df]/80 font-rubik">
              Não existe atalho para o sabor autêntico. Conheça as quatro etapas que transformam cortes nobres de carne bovina e suína em verdadeiras obras primas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(step => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#23201f] border border-[#3f2a22] hover:border-[#ea5b13]/50 transition space-y-4 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display-rustic font-bold text-[#ea5b13] group-hover:text-[#ffb300] transition">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1a1716] text-[#e5e2df]/60">
                    {step.timeTemp}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base font-serif-brand">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#ffb300] font-medium font-rubik">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#e5e2df]/70 font-rubik leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#ea5b13] font-semibold font-rubik">
                  <Flame className="w-3.5 h-3.5" />
                  Padrão Smoked by Digão
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ANATOMIA DOS CORTES / DIAGRAMA FINE-LINE */}
      <section id="cortes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b2b2b] text-[#ffb300] text-xs font-mono uppercase tracking-widest border border-[#3f2a22]">
            <Sparkles className="w-3.5 h-3.5 text-[#ea5b13]" />
            Guia Anatômico de Cortes
          </div>
          <h2 className="text-4xl sm:text-5xl font-display-rustic tracking-wide text-white">
            ANATOMIA DO SABOR
          </h2>
          <p className="text-sm text-[#e5e2df]/80 font-rubik">
            Inspirado nas ilustrações artesanais de açougue do nosso manual visual. Toque nas partes anatômicas para descobrir como cada corte é valorizado no nosso pitsmoker.
          </p>
        </div>

        <ButcherSteerDiagram />
      </section>

      {/* 7. CHEF RODRIGO LOPES & ORIGEM ASA NORTE */}
      <section id="chef" className="py-20 bg-[#1b1918] border-t border-[#3f2a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Chef Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#3f2a22] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Chef Rodrigo Lopes preparando o pitsmoker"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1e1c1b]/95 border border-[#3f2a22] backdrop-blur-md">
                  <h3 className="font-bold text-white text-lg font-serif-brand">Chef Rodrigo Lopes</h3>
                  <p className="text-xs text-[#ffb300] font-rubik">Pitmaster & Fundador • Asa Norte, Brasília</p>
                </div>
              </div>
            </div>

            {/* Chef Story */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b2b2b] text-[#ea5b13] text-xs font-mono uppercase tracking-widest border border-[#3f2a22]">
                <ChefHat className="w-3.5 h-3.5" />
                Autoria & Consistência
              </div>

              <h2 className="text-4xl sm:text-5xl font-display-rustic tracking-wide text-white leading-tight">
                DA PAIXÃO PELA BRASA AO PITSMOKE RECONHECIDO NO DF
              </h2>

              <p className="text-base text-[#e5e2df]/85 font-rubik leading-relaxed">
                Nascida na Asa Norte, em Brasília, a <strong>Smoked by Digão</strong> surgiu da busca obsessiva pelo equilíbrio entre a padronização rigorosa do churrasco texano e a alma autoral da gastronomia artesanal.
              </p>

              <blockquote className="p-4 rounded-2xl bg-[#23201f] border-l-4 border-[#ea5b13] text-sm text-[#e5e2df]/90 font-serif-brand italic">
                "O verdadeiro pitsmoke não aceita pressa nem atalhos químicos. São 12 horas observando a fumaça limpa, a temperatura do aço e o aroma da macieira curada. Entregar essa carne macia, suculenta e aromática na mesa das famílias de Brasília é a nossa missão diária."
                <span className="block not-italic font-bold text-xs text-[#ea5b13] mt-2 font-rubik">
                  — Rodrigo Lopes (Digão)
                </span>
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#23201f] border border-[#3f2a22]">
                  <h4 className="font-bold text-white text-sm font-rubik mb-1">Qualidade Garantida</h4>
                  <p className="text-xs text-[#e5e2df]/70">Controle rigoroso de fornecedores e carnes com certificação Angus.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#23201f] border border-[#3f2a22]">
                  <h4 className="font-bold text-white text-sm font-rubik mb-1">Modelo Replicável</h4>
                  <p className="text-xs text-[#e5e2df]/70">Fichas técnicas precisas preparadas para a expansão em franquias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEJA UM FRANQUEADO (STRATEGIC FRANCHISE SECTION FROM PDF) */}
      <section className="py-20 bg-gradient-to-b from-[#231b18] to-[#1a1514] border-t border-[#ea5b13]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1e1917] border border-[#ea5b13]/40 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a8160b] text-white text-xs font-mono uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                Expansão Estratégica 2026/2027
              </div>
              <h2 className="text-4xl sm:text-5xl font-display-rustic tracking-wide text-white">
                LEVE A SMOKED BY DIGÃO PARA SUA CIDADE OU REGIÃO
              </h2>
              <p className="text-base text-[#e5e2df]/85 font-rubik leading-relaxed">
                Você é um cozinheiro experiente ou investidor em alimentação? Conheça um modelo de franquia com padrão consolidado, alta margem líquida (20% a 28%) e operação enxuta testada e aprovada no mercado de Brasília.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenFranchise}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ea5b13] to-[#a8160b] text-white font-bold font-rubik text-sm tracking-wider uppercase hover:brightness-110 active:scale-95 transition shadow-xl"
                >
                  Abrir Simulador de Franquia & DRE
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=5561999999999&text=Olá!%20Tenho%20interesse%20em%20ser%20um%20franqueado%20Smoked%20by%20Digão."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-2xl bg-[#2b2b2b] text-[#ffb300] hover:text-white border border-[#3f2a22] font-bold text-sm font-rubik transition flex items-center gap-2"
                >
                  Falar com Expansão
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS DE BRASÍLIA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ffb300]">
            Comunidade Smoked
          </span>
          <h2 className="text-4xl font-display-rustic text-white">
            QUEM PROVA NA ASA NORTE RECOMENDA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#23201f] border border-[#3f2a22] space-y-4">
              <div className="flex items-center gap-1 text-[#ffb300]">
                {[...Array(rev.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#e5e2df]/85 font-rubik italic leading-relaxed">
                "{rev.comment}"
              </p>
              <div className="pt-2 border-t border-[#3f2a22]">
                <h4 className="font-bold text-white text-sm font-rubik">{rev.name}</h4>
                <p className="text-xs text-[#ea5b13]">{rev.role} • {rev.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. LOCALIZAÇÃO & HORÁRIOS */}
      <section id="localizacao" className="py-20 bg-[#1e1c1b] border-t border-[#3f2a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b2b2b] text-[#ffb300] text-xs font-mono uppercase tracking-widest border border-[#3f2a22]">
                <MapPin className="w-3.5 h-3.5 text-[#ea5b13]" />
                Unidade Matriz
              </div>
              <h2 className="text-4xl sm:text-5xl font-display-rustic text-white">
                ONDE ENCONTRAR NOSSO PITSMOKER
              </h2>
              <p className="text-sm text-[#e5e2df]/80 font-rubik leading-relaxed">
                Venha sentir o aroma da madeira defumando no deck ou faça seu pedido rápido para viagem no balcão da Asa Norte.
              </p>

              <div className="space-y-4 text-sm font-rubik">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2b2b2b] text-[#ea5b13] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Endereço na Asa Norte:</strong>
                    <span className="text-[#e5e2df]/70">CLN 405 Bloco C Loja 18 - Asa Norte, Brasília - DF</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2b2b2b] text-[#ffb300] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Horário de Funcionamento:</strong>
                    <span className="text-[#e5e2df]/70">Quarta a Domingo das 11h30 às 23h00 (ou até esgotar o pit)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2b2b2b] text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">WhatsApp de Pedidos Rápidos:</strong>
                    <span className="text-[#e5e2df]/70">(61) 99999-9999 • Atendimento ágil para todo Plano Piloto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Mockup Card */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-[#23201f] border border-[#3f2a22] shadow-2xl space-y-4">
                <div className="h-64 rounded-2xl bg-[#1b1918] border border-[#3f2a22] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea5b13_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative text-center p-6 space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#ea5b13] text-white flex items-center justify-center shadow-lg shadow-[#ea5b13]/50 animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white text-base font-serif-brand">Smoked by Digão • Asa Norte</h4>
                    <p className="text-xs text-[#e5e2df]/70 font-mono">CLN 405 Norte - Brasília, DF</p>
                    <a
                      href="https://maps.google.com/?q=Asa+Norte+Brasilia"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 px-4 py-2 rounded-xl bg-[#2b2b2b] hover:bg-[#3f2a22] text-xs text-white font-rubik transition"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#e5e2df]/60 font-rubik px-2">
                  <span>Estacionamento disponível na quadra</span>
                  <span className="text-[#ffb300]">Ambiente pet-friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-12 bg-[#141211] border-t border-[#2e2320] text-[#e5e2df]/70 text-xs font-rubik">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <BrandLogo variant="horizontal" size="sm" themeMode="dark" />
            <span className="hidden sm:inline text-white/30">|</span>
            <p>Pitsmoke Artesanal sob comando do Chef Rodrigo Lopes • Asa Norte, Brasília/DF</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBrandGuide}
              className="text-[#ffb300] hover:underline"
            >
              Manual de Identidade
            </button>
            <span>•</span>
            <button
              onClick={onOpenFranchise}
              className="text-[#ea5b13] hover:underline"
            >
              Portal de Franquias
            </button>
            <span>•</span>
            <span>© 2026 Smoked by Digão</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
