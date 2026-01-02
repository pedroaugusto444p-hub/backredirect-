import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LeadModal } from "@/components/LeadModal";
import { Check, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const benefits = [
    "Acesso Imediato ao conteúdo",
    "Garantia Incondicional de 7 dias",
    "Suporte Prioritário Premium",
    "Bônus Exclusivo de Ação Rápida"
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* --- URGENCY HEADER --- */}
      <div className="bg-neutral-900 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-md">
        <p className="font-bold text-sm md:text-base flex items-center justify-center gap-2 uppercase tracking-wide">
          <AlertTriangle className="text-yellow-400 w-5 h-5 animate-pulse" />
          Atenção: Não feche essa página ou perderá o desconto
          <AlertTriangle className="text-yellow-400 w-5 h-5 animate-pulse" />
        </p>
      </div>

      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 w-full max-w-3xl mx-auto"
        >
          <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 rounded-r shadow-sm inline-block mx-auto mb-4">
            <p className="font-bold">ESPERE! Temos uma oferta especial para você.</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight uppercase tracking-tight">
            Não vá embora sem levar o <span className="text-red-600">Pacote Premium</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
            Sabemos que você quer evoluir, então preparamos uma condição que é impossível de recusar. Acesso completo por uma fração do preço original.
          </p>

          {/* --- PRICE BOX --- */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-neutral-100 my-8 max-w-md mx-auto relative overflow-hidden"
          >
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-4 py-1 text-sm transform translate-x-4 translate-y-2 rotate-45 shadow-sm">
              -81% OFF
            </div>

            <div className="space-y-2">
              <p className="text-neutral-400 text-lg font-medium line-through decoration-red-500 decoration-2">
                De R$ 27,00
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-neutral-700 font-bold">Por APENAS</span>
                <span className="text-6xl font-black text-green-600 tracking-tighter">R$ 5,00</span>
              </div>
            </div>

            {/* --- CTA BUTTON --- */}
            <div className="mt-8 space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(220, 38, 38, 0.4)", "0 0 0 10px rgba(220, 38, 38, 0)"],
                }}
                transition={{ 
                  boxShadow: {
                    repeat: Infinity, 
                    duration: 1.5 
                  } 
                }}
                onClick={() => window.location.href = "https://seulinkdecheckout.com"}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl py-5 px-6 rounded-lg shadow-lg uppercase tracking-wide transition-colors"
              >
                SIM! Quero o Desconto
              </motion.button>
              
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-red-600 bg-red-50 py-2 rounded">
                <Clock className="w-4 h-4" />
                Oferta expira em: {formatTime(timeLeft)}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- CONTENT SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 items-center w-full max-w-4xl">
          {/* Placeholder Image */}
          <div className="relative group cursor-pointer" onClick={() => window.location.href = "https://seulinkdecheckout.com"}>
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative bg-white rounded-lg p-2 shadow-2xl">
                {/* Descriptive HTML comment for Unsplash Image */}
                {/* Product mockup box software package minimal professional */}
                <img 
                  src="https://pixabay.com/get/gfc116ee7dcc606613d0b6e2c86371d3e0adf7771bacd3ccdd1937d390131b992cdc3eae1091ec7f4922fa4055dcb0156bf0e20f3a4b7678d70ddafa8e75980d2_1280.jpg" 
                  alt="Produto Premium" 
                  className="rounded bg-neutral-100 object-cover w-full h-64 md:h-80"
                />
             </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800 uppercase">
              O que você vai receber:
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-lg text-neutral-700"
                >
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-700 stroke-[3]" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <div className="pt-4 flex items-center gap-2 text-neutral-500 text-sm font-medium">
               <ShieldCheck className="w-5 h-5 text-green-600" />
               Compra 100% Segura e Garantida
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-neutral-100 border-t border-neutral-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-neutral-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL --- */}
      <LeadModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
