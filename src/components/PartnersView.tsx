import React, { useState } from "react";
import { Handshake, Mail, MessageCircle, Send, Check, Sparkles, Building2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PartnersView() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    proposal: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const partners = [
    {
      name: "THRUSTMASTER",
      category: "Гоночные рули и педали",
      desc: "Официальный амбассадор высокоточных игровых контроллеров и симрейсинг педалей с датчиком Load Cell.",
      status: "Постоянный партнер",
      badge: "Gear Sponsor"
    },
    {
      name: "COUGAR",
      category: "Премиальные кресла и периферия",
      desc: "Обеспечивает комфорт во время многочасовых стриминговых трансляций благодаря эргономичным ортопедическим креслам.",
      status: "Технический спонсор",
      badge: "Comfort Sponsor"
    },
    {
      name: "ROG STRIX",
      category: "Игровое серверное железо",
      desc: "Экстремальная производительность системного блока стрима, гарантирующая стабильные заезды в 4K разрешении.",
      status: "Аппаратный партнер",
      badge: "Power Sponsor"
    },
    {
      name: "SATELLITE",
      category: "Стриминговые технологии",
      desc: "Инновационная маршрутизация сигнала вещания с рекордно низким пингом и защитой от перебоев связи.",
      status: "Связь",
      badge: "Network Sponsor"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email) return;

    // Simulate reactive filing
    const currentProposals = JSON.parse(localStorage.getItem("business_proposals") || "[]");
    localStorage.setItem("business_proposals", JSON.stringify([...currentProposals, { ...formData, date: new Date().toISOString() }]));
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ companyName: "", contactPerson: "", email: "", proposal: "" });
    }, 100);
  };

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 text-left">
      <div className="hero-glow -top-40 -left-40 opacity-40"></div>
      <div className="hero-glow bottom-0 right-0 opacity-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 w-full relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full">
              <Handshake className="text-yellow-500 w-4 h-4 shrink-0" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-semibold">
                Партнеры
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-shadow-gold tracking-tight">
              Наши <span className="gold-gradient">Партнеры</span>
            </h1>
            
            <div className="divider-gold w-32 mx-auto"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light pt-3">
              Работаем с ведущими брендами оборудования в автоспорте и передовых IT-технологиях. Мы делаем бренд-интеграции креативными, глубокими и полезными для зрителей.
            </p>
          </motion.div>
        </div>

        {/* Exquisite Bento Grid of Sporsorship */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="partner-card p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl md:text-3xl font-black text-white hover:text-yellow-500 transition cursor-default">
                    {partner.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/10 shrink-0">
                    {partner.badge}
                  </span>
                </div>
                <div className="h-0.5 bg-yellow-500/5 my-2"></div>
                <div className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
                  {partner.category}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {partner.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Статус: </span>
                <span className="text-xs text-yellow-500 font-semibold">{partner.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business proposal form block */}
        <div id="proposal-section" className="mt-28 md:mt-36">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-[2.5rem] p-8 md:p-16 border-2 border-yellow-500/20">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-4 animate-pulse" />
                <h2 className="font-display text-3xl sm:text-5xl font-black text-shadow-gold mb-4">
                  Стать партнером <span className="gold-gradient">СайтСотики</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Мы открыты к самым амбициозным предложениям! Интересует спецпроект, реклама на стримах или внедрение вашего оборудования в гоночный кокпит? Опишите идею в форме ниже.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleProposalSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Название компании</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            placeholder="ООО РУМЕДИА"
                            className="w-full bg-neutral-900/85 border border-yellow-500/15 focus:border-yellow-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none transition"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Контактное лицо</label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                          placeholder="Анна Ковалева"
                          className="w-full bg-neutral-900/85 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email для связи</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="partner@yourbrand.ru"
                          className="w-full bg-neutral-900/85 border border-yellow-500/15 focus:border-yellow-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Ваше Предложение</label>
                      <textarea
                        name="proposal"
                        value={formData.proposal}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Опишите, какие форматы интеграций вам наиболее близки, цели вашей рекламной кампании, бюджет..."
                        className="w-full bg-neutral-900/85 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition resize-none font-light"
                      />
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        type="submit"
                        className="btn-gold gold-bg-gradient text-black px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase inline-flex items-center gap-3 shadow-xl shadow-yellow-500/10 cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-black" />
                        Отправить Предложение
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                      <Check className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Предложение отправлено!</h3>
                      <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                        Мы получили вашу заявку на спонсорство. Наш PR-отдел ознакомится с деталями и свяжется с вами по указанному email для подробного обсуждения деталей сотрудничества.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-yellow-500 hover:text-white transition text-xs font-bold tracking-widest uppercase cursor-pointer"
                    >
                      Создать ещё одно предложение
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <span className="font-light">Прямой контакт:</span>
                <a href="mailto:business@sitesotika.ru" className="flex items-center gap-2 text-white hover:text-yellow-500 transition">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  business@sitesotika.ru
                </a>
                <a href="https://t.me/sitesotika" target="_blank" className="flex items-center gap-2 text-white hover:text-yellow-500 transition">
                  <MessageCircle className="w-4 h-4 text-yellow-500" />
                  @sitesotika
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
