import React, { useState } from 'react';
import { MEAT_CUTS } from '../data/brandData';
import { MeatCut } from '../types';
import { Flame, Clock, Sparkles } from 'lucide-react';

interface SteerDiagramProps {
  onSelectCut?: (cut: MeatCut) => void;
  selectedCutId?: string;
  className?: string;
}

export const ButcherSteerDiagram: React.FC<SteerDiagramProps> = ({
  onSelectCut,
  selectedCutId = 'brisket',
  className = ''
}) => {
  const [hoveredCut, setHoveredCut] = useState<string | null>(null);

  const activeCut = MEAT_CUTS.find(c => c.id === (hoveredCut || selectedCutId)) || MEAT_CUTS[0];

  const handleCutClick = (cutId: string) => {
    const cut = MEAT_CUTS.find(c => c.id === cutId);
    if (cut && onSelectCut) {
      onSelectCut(cut);
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 ${className}`}>
      {/* Interactive Vector Ox Silhouette with Fine-Line Anatomy */}
      <div className="relative w-full max-w-xl aspect-[16/10] bg-[#1e1c1b] border border-[#3f2a22] rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
        <div className="flex items-center justify-between z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffb300] font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ea5b13] animate-ping" />
            Diagrama de Cortes • Pitsmoke Selection
          </span>
          <span className="text-xs text-[#e5e2df]/60 font-rubik">
            Toque nas partes anatômicas para explorar
          </span>
        </div>

        {/* SVG Ox Anatomy */}
        <div className="relative w-full my-auto py-2">
          <svg
            viewBox="0 0 600 360"
            className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fine line background wood grain / charcoal grid */}
            <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#3f2a22" strokeWidth="1" strokeOpacity="0.3" />
            </pattern>

            {/* Steer Outer Line (Stylized artisanal fine line) */}
            {/* Horns & Head */}
            <path
              d="M120 140 C100 130 80 115 65 95 C75 110 95 125 105 130 C90 120 75 100 70 85 C85 98 105 115 115 125 C108 110 102 90 100 70 C108 90 118 108 126 122 C135 110 148 105 160 112 C170 120 172 135 170 148 L160 180 L140 215 C132 230 115 240 98 235 C88 230 85 218 88 205 C92 195 105 185 118 180 Z"
              stroke="#e5e2df"
              strokeWidth="2"
              fill="#2b2b2b"
              strokeOpacity="0.8"
            />

            {/* 1. CUPIM (Hump) - Clickable Area */}
            <g
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredCut('cupim')}
              onMouseLeave={() => setHoveredCut(null)}
              onClick={() => handleCutClick('cupim')}
            >
              <path
                d="M185 110 C210 60 260 55 285 105 C260 110 220 115 185 110 Z"
                fill={activeCut.id === 'cupim' ? '#ea5b13' : '#3f2a22'}
                fillOpacity={activeCut.id === 'cupim' ? '0.75' : '0.4'}
                stroke={activeCut.id === 'cupim' ? '#ffb300' : '#e5e2df'}
                strokeWidth={activeCut.id === 'cupim' ? '2.5' : '1.5'}
                strokeDasharray={activeCut.id === 'cupim' ? '' : '3 3'}
              />
              <text x="235" y="88" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Rubik">
                CUPIM
              </text>
            </g>

            {/* 2. BRISKET / PEITO BOVINO - The Crown Jewel */}
            <g
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredCut('brisket')}
              onMouseLeave={() => setHoveredCut(null)}
              onClick={() => handleCutClick('brisket')}
            >
              <path
                d="M155 190 L185 195 L225 210 L250 250 L195 260 L150 230 Z"
                fill={activeCut.id === 'brisket' ? '#a8160b' : '#3f2a22'}
                fillOpacity={activeCut.id === 'brisket' ? '0.85' : '0.4'}
                stroke={activeCut.id === 'brisket' ? '#ffb300' : '#e5e2df'}
                strokeWidth={activeCut.id === 'brisket' ? '3' : '1.5'}
              />
              <text x="195" y="228" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="Rubik">
                BRISKET
              </text>
              <text x="195" y="242" textAnchor="middle" fill="#ffb300" fontSize="10" fontFamily="Rubik">
                12h no Pit
              </text>
            </g>

            {/* 3. COSTELA (Ribs) - Center Body */}
            <g
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredCut('costela')}
              onMouseLeave={() => setHoveredCut(null)}
              onClick={() => handleCutClick('costela')}
            >
              <path
                d="M255 115 L375 115 L365 220 L245 220 Z"
                fill={activeCut.id === 'costela' ? '#ea5b13' : '#3f2a22'}
                fillOpacity={activeCut.id === 'costela' ? '0.75' : '0.3'}
                stroke={activeCut.id === 'costela' ? '#ffb300' : '#e5e2df'}
                strokeWidth={activeCut.id === 'costela' ? '2.5' : '1.5'}
                strokeDasharray="4 2"
              />
              {/* Rib lines illustration */}
              <line x1="280" y1="125" x2="275" y2="210" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="305" y1="125" x2="300" y2="210" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="330" y1="125" x2="325" y2="210" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="355" y1="125" x2="350" y2="210" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />

              <text x="310" y="165" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="Rubik">
                COSTELA
              </text>
            </g>

            {/* 4. TRASEIRO / ALCATRA & LOMBO */}
            <g className="cursor-pointer opacity-80 hover:opacity-100">
              <path
                d="M380 115 L480 125 L490 220 L370 220 Z"
                fill="#2b2b2b"
                stroke="#e5e2df"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <text x="430" y="165" textAnchor="middle" fill="#e5e2df" fontSize="12" fontFamily="Rubik">
                LOMBO & PICANHA
              </text>
            </g>

            {/* Rest of Steer Body & Legs in Fine Line */}
            {/* Front leg */}
            <path
              d="M175 255 L165 330 L185 335 L198 260 Z"
              stroke="#e5e2df"
              strokeWidth="1.5"
              fill="#2b2b2b"
              strokeOpacity="0.7"
            />
            {/* Back leg */}
            <path
              d="M455 220 L470 330 L495 335 L490 220 Z"
              stroke="#e5e2df"
              strokeWidth="1.5"
              fill="#2b2b2b"
              strokeOpacity="0.7"
            />
            {/* Tail */}
            <path
              d="M490 145 C515 165 520 230 500 280 C505 285 510 270 512 250"
              stroke="#e5e2df"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Decorative butchery stamp */}
            <circle cx="530" cy="70" r="32" stroke="#a8160b" strokeWidth="2" strokeDasharray="3 3" />
            <text x="530" y="65" textAnchor="middle" fill="#a8160b" fontSize="9" fontWeight="bold" fontFamily="Bebas Neue" letterSpacing="1">
              SMOKED BY DIGÃO
            </text>
            <text x="530" y="77" textAnchor="middle" fill="#ea5b13" fontSize="8" fontFamily="Rubik">
              ASA NORTE
            </text>
          </svg>
        </div>

        {/* Quick cut selection tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#3f2a22]">
          {MEAT_CUTS.map(cut => {
            const isSelected = activeCut.id === cut.id;
            return (
              <button
                key={cut.id}
                onClick={() => handleCutClick(cut.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-rubik font-medium transition-all ${
                  isSelected
                    ? 'bg-[#ea5b13] text-white shadow-md shadow-[#ea5b13]/30 scale-105'
                    : 'bg-[#2b2b2b] text-[#e5e2df]/80 hover:text-white hover:bg-[#3f2a22]'
                }`}
              >
                {cut.name.split(' (')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Information Card of Active Selected Cut */}
      <div className="w-full lg:w-80 bg-gradient-to-br from-[#2b2b2b] to-[#1f1a18] border border-[#a8160b]/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea5b13]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold font-mono tracking-wider bg-[#a8160b] text-white uppercase">
            {activeCut.tag}
          </span>
          <span className="text-xs text-[#ffb300] flex items-center gap-1 font-rubik font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Corte Nobre
          </span>
        </div>

        <h4 className="text-2xl font-serif-brand font-bold text-white mb-1">
          {activeCut.name}
        </h4>
        <p className="text-xs text-[#ea5b13] font-medium font-rubik mb-4">
          {activeCut.ptName} • {activeCut.portion}
        </p>

        <p className="text-sm text-[#e5e2df]/85 font-rubik leading-relaxed mb-5">
          {activeCut.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-[#1a1716] border border-[#3f2a22]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#e5e2df]/60 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#ea5b13]" /> Tempo de Pit
            </span>
            <span className="text-sm font-bold text-white font-rubik">
              {activeCut.smokeTime}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#e5e2df]/60 uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#ffb300]" /> Lenha Selecionada
            </span>
            <span className="text-sm font-bold text-white font-rubik">
              {activeCut.woodType}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] font-mono uppercase text-[#e5e2df]/60">Notas de Sabor & Textura:</span>
          <div className="flex flex-wrap gap-1.5">
            {activeCut.flavorNotes.map((note, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-[#3f2a22] text-[#ffb300] font-rubik font-medium border border-[#ea5b13]/20"
              >
                ✓ {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
