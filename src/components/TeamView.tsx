import React, { useState } from "react";
import { Users, Mail, Compass, HelpCircle, Check, Send, Sparkles, Video, Shield, Palette, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TeamView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "монтаж",
    portfolio: "",
    about: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const teamCards = [
    {
      title: "Монтаж",
      description: "Профессиональные видеомонтажеры",
      detailed: "Создают ураганные хайлайты, короткие клики для TikTok/Shorts и занимаются полноценной постобработкой записей стримов.",
      icon: <Video className="w-8 h-8 text-yellow-500" />,
      color: "from-purple-600/15 to-pink-600/15"
    },
    {
      title: "Модерация",
      description: "Безопасность чата 24/7",
      detailed: "Поддерживают позитивную атмосферу в чате, фильтруют спам, токсичность и обеспечивают комфортное общение для каждого зрителя.",
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      color: "from-blue-600/15 to-cyan-600/15"
    },
    {
      title: "Дизайн",
      description: "Уникальный визуал",
      detailed: "Рисуют потрясающие оверлеи, превью для YouTube, авторские стикеры и оформляют социальные сети в едином премиальном золотом стиле.",
      icon: <Palette className="w-8 h-8 text-yellow-500" />,
      color: "from-green-600/15 to-emerald-600/15"
    },
    {
      title: "PR & SMM",
      description: "Продвижение контента",
      detailed: "Ведут новостные ленты в Telegram и VK, организуют совместные коллаборации с другими стримерами и привлекают новые бренды.",
      icon: <Megaphone className="w-8 h-8 text-yellow-500" />,
      color: "from-orange-600/15 to-red-600/15"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate reactive filing (saves to localStorage as feedback)
    const currentApplications = JSON.parse(localStorage.getItem("team_applications") || "[]");
    localStorage.setItem("team_applications", JSON.stringify([...currentApplications, { ...formData, date: new Date().toISOString() }]));
    
    setSubmitted(true);
    setTimeout(() => {
      // clear form
      setFormData({ name: "", email: "", role: "монтаж", portfolio: "", about: "" });
    }, 100);
  };

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 text-left">
      <div className="hero-glow -top-40 -left-40 opacity-40"></div>
      <div className="hero-glow top-1/2 -right-40 opacity-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 w-full relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full">
              <Users className="text-yellow-500 w-4 h-4 shrink-0" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-semibold">
                Команда
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-shadow-gold tracking-tight">
              Люди, стоящие <span className="gold-gradient">за СайтСотикой</span>
            </h1>
            
            <div className="divider-gold w-32 mx-auto"></div>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light pt-3">
              За каждым успешным стримом стоит команда профессионалов. Мы — семья, объединенная общей целью: вдохновлять, удивлять и создавать контент мирового уровня.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="team-card p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center border border-yellow-500/10 mb-6`}>
                  {card.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-white">{card.title}</h3>
                <div className="text-yellow-500 text-xs tracking-widest uppercase font-bold mb-4">{card.description}</div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.detailed}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who We Are Detailed Interactive Block */}
        <div className="mt-28 md:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="font-display text-4xl md:text-5xl font-black gold-gradient">Кто мы такие?</h2>
              <div className="divider-gold w-24"></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Мы — команда единомышленников, которые видят в стриминге и гейминге не просто хобби, а способ стирания границ между людьми. За каждым монтажным склеиванием, оформлением плашек и чистотой чата стоит колоссальная ежедневная работа.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                Наш коллектив постоянно развивается. Мы активно поддерживаем Диму, помогаем ему в технических и ресинг-вопросах, координируем крупные ивенты и создаем комфортную экосистему для наших дорогих фолловеров.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 gold-bg-gradient opacity-10 blur-3xl rounded-full"></div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden gold-border-gradient shadow-2xl shadow-yellow-900/10 bg-neutral-900">
                <img 
                  src="/images/team-placeholder.svg" 
                  alt="Команда СайтСотика" 
                  className="w-full h-full object-cover p-12 opacity-85"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Application / CTA Section */}
        <div id="apply-form" className="mt-28 md:mt-36 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/[0.02] to-transparent"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="glass-effect rounded-[2.5rem] p-8 md:p-16 border-2 border-yellow-500/20">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-4 animate-pulse" />
                <h2 className="font-display text-3xl sm:text-5xl font-black text-shadow-gold mb-4">
                  Хочешь стать частью <span className="gold-gradient">команды?</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Мы всегда открыты для талантливых, ответственных и инициативных ребят. Умеешь круто монтировать, рисовать или модерировать? Заполни анкету ниже!
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Ваше Имя</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Дмитрий"
                          className="w-full bg-neutral-900/80 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Ваш Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="example@sitesotika.ru"
                          className="w-full bg-neutral-900/80 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Желаемая Роль</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900/80 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition cursor-pointer appearance-none"
                        >
                          <option value="монтаж">Видеомонтажер / Редактор</option>
                          <option value="модерация">Модератор чата / Дискорда</option>
                          <option value="дизайнер">Графический дизайнер</option>
                          <option value="smm">SMM-менеджер / Копирайтер</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Ссылка на портфолио</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://behance.net/your-channel"
                          className="w-full bg-neutral-900/80 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Расскажите о себе</label>
                      <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Опишите ваши навыки, свободное время, и почему хотите работать с Дмитрий Передим..."
                        className="w-full bg-neutral-900/80 border border-yellow-500/15 focus:border-yellow-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition resize-none"
                      />
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        type="submit"
                        className="btn-gold gold-bg-gradient text-black px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase inline-flex items-center gap-3 shadow-xl shadow-yellow-500/10 cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-black" />
                        Отправить анкету
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8 space-y-6"
                    id="success-message"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                      <Check className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Анкета успешно принята!</h3>
                      <p className="text-sm text-gray-400 max-w-md mx-auto">
                        Спасибо за интерес к СайтСотике. Мы тщательно ознакомимся с вашим портфолио и свяжемся с вами в течение нескольких дней по электронной почте.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-yellow-500 hover:text-white transition text-xs font-bold tracking-widest uppercase cursor-pointer"
                    >
                      Отправить ещё раз
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
