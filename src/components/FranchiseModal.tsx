import React, { useState } from 'react';
import { FRANCHISE_TIERS } from '../data/brandData';
import { FranchiseTier } from '../types';
import { X, CheckCircle, Calculator, Building, TrendingUp, ShieldCheck, Send } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<FranchiseTier>(FRANCHISE_TIERS[0]);
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [capital, setCapital] = useState('200k-350k');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#23201f] text-[#e5e2df] border border-[#a8160b]/40 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#a8160b] via-[#ea5b13] to-[#ffb300]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1b1918] hover:bg-[#3f2a22] text-white transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 bg-[#1b1918] border-b border-[#3f2a22] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold font-mono tracking-wider bg-[#ea5b13] text-white uppercase">
                Programa Oficial de Expansão
              </span>
              <span className="text-xs text-[#ffb300] font-rubik">
                Origem Asa Norte • Brasília
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display-rustic text-white tracking-wide">
              SEJA UM FRANQUEADO SMOKED BY DIGÃO
            </h2>
            <p className="text-xs md:text-sm text-[#e5e2df]/80 font-rubik mt-1 max-w-xl">
              Equilíbrio cirúrgico entre padronização e autoria do Chef Rodrigo Lopes. Um modelo de pitsmoke contemporâneo, enxuto e altamente replicável.
            </p>
          </div>
          <BrandLogo variant="stacked" size="sm" themeMode="dark" />
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif-brand font-bold text-white">
                Candidatura de Franquia Enviada!
              </h3>
              <p className="text-sm text-[#e5e2df]/80 font-rubik max-w-md mx-auto">
                Obrigado, <strong className="text-white">{name}</strong>. Nossa equipe de expansão entrará em contato via WhatsApp/Telefone para apresentar o plano de negócios e a viabilidade da praça em <strong className="text-[#ffb300]">{city}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-xl bg-[#ea5b13] text-white font-bold font-rubik hover:bg-[#a8160b] transition shadow-lg"
              >
                Voltar aos Mockups
              </button>
            </div>
          ) : (
            <>
              {/* Strategic Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
                  <TrendingUp className="w-6 h-6 text-[#ea5b13] mb-2" />
                  <h4 className="font-bold text-white text-sm font-rubik mb-1">
                    Margem Líquida Superior (20-28%)
                  </h4>
                  <p className="text-xs text-[#e5e2df]/70 font-rubik">
                    Cortes de alto valor agregado com preparação centralizada e zero desperdício de insumos.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
                  <ShieldCheck className="w-6 h-6 text-[#ffb300] mb-2" />
                  <h4 className="font-bold text-white text-sm font-rubik mb-1">
                    Processo Homologado
                  </h4>
                  <p className="text-xs text-[#e5e2df]/70 font-rubik">
                    Fichas técnicas milimétricas, curva térmica do smoker e treinamento direto com o Chef Rodrigo Lopes.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
                  <Building className="w-6 h-6 text-[#a8160b] mb-2" />
                  <h4 className="font-bold text-white text-sm font-rubik mb-1">
                    Operação Enxuta
                  </h4>
                  <p className="text-xs text-[#e5e2df]/70 font-rubik">
                    Equipe de cozinha compacta, sem necessidade de chefs caros no dia a dia da unidade.
                  </p>
                </div>
              </div>

              {/* Models Selector */}
              <div>
                <h3 className="text-lg font-bold font-serif-brand text-white mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#ea5b13]" />
                  1. Escolha o Formato da Sua Operação:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {FRANCHISE_TIERS.map(tier => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#2e2623] border-[#ea5b13] shadow-lg shadow-[#ea5b13]/20 ring-1 ring-[#ea5b13]'
                            : 'bg-[#1b1918] border-[#3f2a22] hover:border-[#ea5b13]/50'
                        }`}
                      >
                        <span className="text-[11px] font-mono uppercase text-[#ffb300] block mb-1">
                          {tier.type}
                        </span>
                        <h4 className="font-bold text-white font-rubik mb-2 text-base">
                          {tier.name}
                        </h4>
                        <div className="space-y-1 text-xs text-[#e5e2df]/80 font-rubik mb-4">
                          <p>Investimento: <strong className="text-white">{tier.investment}</strong></p>
                          <p>Área: <strong className="text-white">{tier.spaceRequired}</strong></p>
                          <p>Faturamento Médio: <strong className="text-[#ffb300]">{tier.averageMonthlyRevenue}</strong></p>
                          <p>Payback: <strong className="text-emerald-400">{tier.paybackMonths}</strong></p>
                        </div>
                        <p className="text-[11px] text-[#e5e2df]/60 italic">
                          {tier.suitableFor}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Fast Lead Capture Form */}
              <div className="p-6 rounded-2xl bg-[#1b1918] border border-[#3f2a22]">
                <h3 className="text-base font-bold font-rubik text-white mb-4">
                  2. Receber Apresentação Executiva & DRE Completa
                </h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Gustavo Silva"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#23201f] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(61) 99999-9999"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#23201f] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      Cidade / Estado de Interesse *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Brasília/DF, Goiânia/GO, São Paulo/SP"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#23201f] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#e5e2df]/80 mb-1">
                      Capital Disponível para Investimento
                    </label>
                    <select
                      value={capital}
                      onChange={e => setCapital(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#23201f] border border-[#3f2a22] text-sm text-white focus:outline-none focus:border-[#ea5b13]"
                    >
                      <option value="130k-200k">R$ 130.000 a R$ 200.000</option>
                      <option value="200k-350k">R$ 200.000 a R$ 350.000</option>
                      <option value="350k+">Acima de R$ 350.000</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ea5b13] to-[#a8160b] text-white font-bold font-rubik flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      Solicitar Dossiê da Franquia & Contato
                    </button>
                    <p className="text-[11px] text-center text-[#e5e2df]/50 font-rubik mt-2">
                      Informações estritamente confidenciais. Respeitamos a lei de proteção de dados.
                    </p>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
