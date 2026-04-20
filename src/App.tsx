/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, CheckCircle2, ShieldCheck, ShoppingCart } from 'lucide-react';

const SALES_DATA = [
  { name: "Mariana S.", city: "Campinas, SP", time: "há 2 min" },
  { name: "Letícia F.", city: "Vila Velha, ES", time: "há 5 min" },
  { name: "Aline V.", city: "Joinville, SC", time: "há 1 min" },
  { name: "Renata B.", city: "Londrina, PR", time: "há 3 min" },
  { name: "Thaís M.", city: "Goiânia, GO", time: "há 7 min" },
  { name: "Gisele K.", city: "Manaus, AM", time: "há 4 min" },
  { name: "Camila D.", city: "Fortaleza, CE", time: "há 6 min" },
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(134); // 2:14 in seconds
  const [currentSale, setCurrentSale] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show first one after 2 seconds
    const initialTimeout = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 2000);

    const timer = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      setCurrentSale((prev) => (prev + 1) % SALES_DATA.length);
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] dotted-bg font-sans text-gray-800 selection:bg-red-100">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
        <span className="opacity-80">⚠️</span>
        ESPERE! NÃO FECHE ESTA PÁGINA AINDA...
        <span className="opacity-80">⚠️</span>
      </div>

      {/* Header Section */}
      <header className="pt-12 pb-8 px-4 text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-red-50 border-l-4 border-red-600 px-6 py-3 mb-8"
        >
          <span className="text-red-700 font-bold tracking-wide text-sm md:text-base">
            Eu vi que você já ia sair...
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter uppercase"
        >
          ⚠️ ESPERE! <br />
          <span className="relative inline-block px-6 py-2 mt-4">
            <span className="absolute inset-0 bg-red-600 -rotate-1 transform skew-x-[-3deg]"></span>
            <span className="relative text-white uppercase italic">Antes de ir...</span>
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-4 font-medium text-center"
        >
          <p>Você merece ter um parto rápido, seguro e sem o pesadelo de uma laceração. E o seu bebê não precisa de uma mãe exausta após 16 horas de sofrimento.</p>
          <p>Para que o preço não seja o motivo de você ir para o hospital sem preparo, eu liberei um <span className="text-red-600 font-bold">Desconto Secreto</span>.</p>
          <p className="font-bold text-red-600 uppercase tracking-tight">Ele desaparece para sempre assim que você fechar esta tela!</p>
        </motion.div>
      </header>

      {/* Main Content / Pricing Card */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Product Image & Testimonial */}
          <div className="flex flex-col gap-6 w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-red-600 p-6 rounded-[2rem] shadow-2xl relative text-white"
            >
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">⭐</span>)}
              </div>
              <p className="italic text-sm md:text-base leading-relaxed font-medium">
                "Eu já estava fechando o site porque achei que não daria mais tempo, já estou com 37 semanas e o orçamento das fraldas apertou. Mas vi esse desconto e decidi tentar. Foi a minha salvação! O protocolo é super prático, fiz só 15 minutinhos por dia na sala de casa. Meu Léo nasceu em 3 horinhas e eu saí intacta, sem um único ponto! Serei eternamente grata."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/R49BGprV/Depoimento-06.png" 
                  alt="Lilia" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs font-bold leading-tight">
                  <span className="block text-sm">Lilia</span>
                  <span className="text-white/80 font-medium">mãe do Léo</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
              <img 
                src="https://i.ibb.co/nMKg35jj/Design-sem-nome.jpg" 
                alt="Protocolo Parto Seguro" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Pricing & Benefits */}
          <div className="flex flex-col gap-8 w-full max-w-md">
            {/* Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden"
            >
              {/* Discount Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-400 text-black font-black text-[10px] px-10 py-1 rotate-45 translate-x-8 translate-y-4 shadow-sm">
                  50% OFF
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-red-600 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1">
                  <span>🔓</span> Desconto Secreto Ativado
                </p>
                <p className="text-black line-through text-lg decoration-red-600 decoration-2">
                  De R$ 29,90
                </p>
                <div className="flex flex-col items-center justify-center -space-y-2">
                  <span className="text-gray-700 font-bold text-xl">Por APENAS</span>
                  <span className="text-green-600 text-7xl font-black tracking-tighter">R$ 14,90</span>
                </div>

                <motion.a 
                  href="https://checkout.protocolodestrave.shop/VCCL1O8SD045"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-5 rounded-2xl shadow-lg shadow-red-600/20 transition-colors uppercase tracking-tight text-center block"
                >
                  Sim! Quero aproveitar meu Parto Seguro
                </motion.a>

                <p className="text-[10px] text-gray-400 font-medium">
                  (Essa página não poderá ser acessada novamente)
                </p>

                <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 py-2 rounded-xl border border-red-100">
                  <Clock size={18} className="animate-pulse" />
                  <span className="font-bold text-sm text-center">⏳ Seu link expira em: {formatTime(timeLeft)}</span>
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center gap-2">
                O que você vai receber agora mesmo por menos de 15 reais:
              </h3>
              <ul className="space-y-4">
                {[
                  "Protocolo Destrave Pélvico Completo (O passo a passo biomecânico)",
                  "Rotina Prática em Vídeo (Exercícios de apenas 15 min/dia)",
                  "Plano Express para Reta Final (Salvamento para 35 a 40 semanas)",
                  "Guia de Alívio Imediato da Dor (Para usar em casa e no hospital)",
                  "Acesso vitalício a todo o material",
                  "Acesso imediato pelo seu WhatsApp e E-mail",
                  "Garantia Incondicional de 30 dias (Seu risco é zero)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="text-green-500 shrink-0 text-xl">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex items-center gap-2 text-green-700 font-bold text-sm border-t border-gray-200">
                <ShieldCheck size={20} />
                <span>🔒 Compra 100% Segura e Garantida</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center bg-white">
        <p className="text-gray-400 text-sm italic">
          © {new Date().getFullYear()} Movimento Materno. Todos os direitos reservados.
        </p>
      </footer>

      {/* Sales Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 left-4 w-auto max-w-[280px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 p-2 z-[100] flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <ShoppingCart className="text-green-600" size={16} />
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <p className="text-[10px] font-black text-gray-900 leading-tight">
                {SALES_DATA[currentSale].name} acabou de comprar!
              </p>
              <p className="text-[9px] text-gray-500 font-medium">
                {SALES_DATA[currentSale].city} • {SALES_DATA[currentSale].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
