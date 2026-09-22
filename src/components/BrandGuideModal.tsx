import React, { useState } from 'react';
import { BRAND_COLORS } from '../data/brandData';
import { BrandLogo } from './BrandLogo';
import { X, Copy, Check, Palette, Type, Users, Flame, BookOpen } from 'lucide-react';

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideModal: React.FC<BrandGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-[#23201f] text-[#e5e2df] border border-[#3f2a22] rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#1b1918] border-b border-[#3f2a22] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ea5b13]/10 border border-[#ea5b13]/30 flex items-center justify-center text-[#ea5b13]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#ffb300]">
                  Manual de Identidade Visual
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#3f2a22] text-[#e5e2df]/80 font-rubik">
                  Guia Oficial
                </span>
              </div>
              <h2 className="text-2xl font-serif-brand font-bold text-white">
                Smoked by Digão • Diretrizes da Marca
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#3f2a22] text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Diagnostic & Origins from page 2 */}
          <div className="p-6 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
            <h3 className="text-base font-bold font-rubik text-white mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#ea5b13]" />
              Diagnóstico & Conceito Central
            </h3>
            <p className="text-sm text-[#e5e2df]/85 font-rubik leading-relaxed">
              Consolidar uma marca de pitsmoke autêntica, contemporânea e altamente replicável, com origem na <strong>Asa Norte, em Brasília</strong>, sob o comando do <strong>Chef Rodrigo Lopes</strong>. Equilíbrio entre a padronização e o caráter artesanal do fogo de chão e do defumador texano.
            </p>
          </div>

          {/* Color Palette (Page 5) */}
          <div>
            <h3 className="text-lg font-bold font-serif-brand text-white mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#ea5b13]" />
              Paleta Cromática Oficial (Página 5 do Manual)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BRAND_COLORS.map(color => (
                <div
                  key={color.codeName}
                  className="rounded-2xl bg-[#1b1918] border border-[#3f2a22] overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className="h-24 w-full flex items-end justify-between p-3"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className="font-bold text-sm drop-shadow-sm font-rubik px-2 py-0.5 rounded backdrop-blur-sm"
                      style={{ color: color.contrastText, backgroundColor: `${color.hex}88` }}
                    >
                      {color.hex}
                    </span>
                    <button
                      onClick={() => handleCopy(color.hex)}
                      className="px-2 py-1 rounded bg-black/40 hover:bg-black/60 text-white text-xs flex items-center gap-1 transition"
                      title="Copiar HEX"
                    >
                      {copiedHex === color.hex ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" /> Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copiar
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-bold text-white text-sm font-rubik">
                      {color.name}
                    </h4>
                    <p className="text-xs text-[#e5e2df]/60 font-mono">
                      {color.rgb} • {color.cmyk}
                    </p>
                    <p className="text-xs text-[#e5e2df]/80 font-rubik pt-2 border-t border-[#3f2a22]">
                      {color.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography (Page 6) */}
          <div>
            <h3 className="text-lg font-bold font-serif-brand text-white mb-4 flex items-center gap-2">
              <Type className="w-5 h-5 text-[#ffb300]" />
              Tipografia da Marca (Página 6 do Manual)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Rubik */}
              <div className="p-5 rounded-2xl bg-[#1b1918] border border-[#3f2a22] space-y-3">
                <span className="text-xs font-mono uppercase text-[#ffb300]">Base & Textos Corridos</span>
                <h4 className="text-3xl font-rubik font-bold text-white">Rubik</h4>
                <p className="text-xs text-[#e5e2df]/70 font-rubik">
                  Sans-serif moderna com formas geométricas e excelente legibilidade. Ideal para cardápios, interfaces e leitura contínua.
                </p>
                <div className="p-3 rounded-lg bg-[#23201f] text-xs font-rubik text-white/90">
                  Aa Bb Cc 1234567890<br />
                  "Low & slow pitsmoke no coração de Brasília."
                </div>
              </div>

              {/* Alverata / Serif */}
              <div className="p-5 rounded-2xl bg-[#1b1918] border border-[#3f2a22] space-y-3">
                <span className="text-xs font-mono uppercase text-[#ea5b13]">Logomarca & Sofisticação</span>
                <h4 className="text-3xl font-serif-brand font-bold text-white">Alverata / Serif</h4>
                <p className="text-xs text-[#e5e2df]/70 font-rubik">
                  Traços serifados elegantes e presença marcante. Transmite tradição, força e sofisticação gastronômica.
                </p>
                <div className="p-3 rounded-lg bg-[#23201f] text-xs font-serif-brand text-white/90">
                  Aa Bb Cc 1234567890<br />
                  "A arte ancestral do corte e da brasa."
                </div>
              </div>

              {/* Buchery / Display */}
              <div className="p-5 rounded-2xl bg-[#1b1918] border border-[#3f2a22] space-y-3">
                <span className="text-xs font-mono uppercase text-[#a8160b]">Destaques & Chamadas</span>
                <h4 className="text-3xl font-display-rustic font-bold text-white tracking-wider">BUCHERY</h4>
                <p className="text-xs text-[#e5e2df]/70 font-rubik">
                  Tipografia display manual e agressiva, remetendo diretamente ao universo do açougue, da faca de corte e da brasa.
                </p>
                <div className="p-3 rounded-lg bg-[#23201f] text-base font-display-rustic text-[#ea5b13] tracking-wider">
                  PITSMOKE 12H • BRISKET ANGUS
                </div>
              </div>
            </div>
          </div>

          {/* Logo Applications (Pages 9, 10, 11) */}
          <div>
            <h3 className="text-lg font-bold font-serif-brand text-white mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#a8160b]" />
              Aplicações da Marca em Fundos Oficiais (Páginas 9, 10, 11)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Dark Charcoal (#2b2b2b) */}
              <div className="p-8 rounded-2xl bg-[#2b2b2b] border border-[#3f2a22] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-[#ffb300] mb-3">Fundo Preto Carvão (#2b2b2b)</span>
                <BrandLogo variant="horizontal" size="lg" themeMode="dark" />
              </div>

              {/* Meat Red (#a8160b) */}
              <div className="p-8 rounded-2xl bg-[#a8160b] border border-[#a8160b] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-white/80 mb-3">Fundo Vermelho Carne (#a8160b)</span>
                <BrandLogo variant="horizontal" size="lg" themeMode="red" />
              </div>

              {/* Salt White (#e5e2df) */}
              <div className="p-8 rounded-2xl bg-[#e5e2df] border border-white/20 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-[#2b2b2b]/70 mb-3">Fundo Branco Sal (#e5e2df)</span>
                <BrandLogo variant="horizontal" size="lg" themeMode="light" />
              </div>
            </div>
          </div>

          {/* Target Audiences (Page 3) */}
          <div className="p-6 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
            <h3 className="text-base font-bold font-rubik text-white mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#ea5b13]" />
              Público-Alvo Estratégico (Página 3 do Manual)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-rubik text-[#e5e2df]/80">
              <div className="p-3 rounded-xl bg-[#23201f] border border-[#3f2a22]">
                <strong className="text-white block mb-1">1. Consumidor Final (Brasília):</strong>
                Famílias e pessoas acima de 25 anos. Carnívoros e amantes convictos de churrasco. Moradores do Plano Piloto, Asa Norte e adjacências (Classes B e C).
              </div>
              <div className="p-3 rounded-xl bg-[#23201f] border border-[#3f2a22]">
                <strong className="text-[#ffb300] block mb-1">2. Franqueados & Empreendedores:</strong>
                Cozinheiros experientes e investidores do setor de alimentação interessados em operar uma franquia de pitsmoke com padrão consolidado e operação enxuta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
