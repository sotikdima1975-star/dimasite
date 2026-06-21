import React from "react";
import { Gamepad2, Users, Trophy, Award, BookOpen, Twitch, Youtube, MessageCircle, Mail, Crown, CheckCircle2, ChevronRight, Landmark } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onContactClick: () => void;
}

export default function HomeView({ setActiveTab, onContactClick }: HomeViewProps) {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
        {/* Glow Spheres */}
        <div className="hero-glow -top-40 -left-40 opacity-40"></div>
        <div className="hero-glow top-1/3 -right-40 opacity-30"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></div>
                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-bold">
                  Стример с ОВЗ
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] tracking-tight text-shadow-gold">
                Дмитрий<br />
                <span className="gold-gradient">Передний</span>
              </h1>

              <div className="divider-gold w-32"></div>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                Профессиональный стример и контент-мейкер, доказывающий каждый день — ограничения существуют только в голове.
              </p>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                Создаю премиальный игровой гоночный контент, вдохновляю тысячи людей и строю сильное сообщество, где каждый чувствует себя победителем.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
                <a
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold gold-bg-gradient text-black px-8 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/15"
                >
                  <Twitch className="w-5 h-5 fill-black text-black" />
                  Смотреть стрим
                </a>
                <button
                  onClick={() => {
                    setActiveTab("about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group flex items-center justify-center sm:justify-start gap-4 text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-750 flex items-center justify-center transition gold-border-gradient">
                    <BookOpen className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Моя история</div>
                    <div className="text-xs text-gray-500">Узнать больше</div>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-yellow-500/10 max-w-lg">
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black gold-gradient">250K+</div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mt-1">
                    Подписчиков
                  </span>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black gold-gradient">5+</div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mt-1">
                    Лет стриминга
                  </span>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black gold-gradient">1000+</div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mt-1">
                    Стримов
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Image and Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md">
                
                {/* Embedded Glow Rings */}
                <div className="absolute inset-0 gold-bg-gradient opacity-10 blur-3xl rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rotate-12 border border-yellow-500/5 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-yellow-500/10 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-yellow-500/20 rounded-full pointer-events-none"></div>

                {/* Main Portrait Box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 float-animation">
                  <div className="relative">
                    <div className="w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-3xl overflow-hidden gold-border-gradient shadow-2xl shadow-yellow-500/20 bg-neutral-900">
                      <img 
                        src="/images/about-portrait.png" 
                        alt="Дмитрий Передний" 
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-500"
                        onError={(e) => {
                          // Fallback illustration if image fails to load
                          e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                    </div>
                    {/* Pulsing red live badge */}
                    <div className="absolute -top-3 -right-3 stream-badge text-white px-3.5 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 pulse-gold">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                      <span>LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-2 md:right-4 z-20 glass-card p-4 sm:p-5 rounded-2xl w-48 sm:w-52 shadow-xl border border-yellow-500/10">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Users className="w-4 h-4 text-yellow-500" />
                    <span className="text-[11px] sm:text-xs font-bold text-gray-200">Зрителей сейчас</span>
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold gold-gradient mb-1">12,847</div>
                  <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] gold-bg-gradient rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-2 md:left-4 z-20 glass-card p-4 sm:p-5 rounded-2xl w-48 sm:w-52 shadow-xl border border-yellow-500/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 border-2 border-[#1A1A1A]"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 border-2 border-[#1A1A1A]"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 border-2 border-[#1A1A1A]"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold bg-neutral-800 px-2 py-0.5 rounded">+5K</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider">
                    Активное комьюнити
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Content / Games Showcase Preview */}
      <section className="py-24 md:py-32 relative text-left">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px gold-bg-gradient"></div>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase gold-gradient font-bold">
                В эфире
              </span>
              <div className="w-10 h-px gold-bg-gradient"></div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4 tracking-tight text-shadow-gold">
              Игровые Направления
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Профессиональный геймплей, эксклюзивные челленджи и честные реакции. Только лучший гоночный контент для любителей скорости и симуляторов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Direct categories */}
            <div className="feature-card p-8 md:p-10 rounded-3xl flex flex-col justify-between group">
              <div>
                <div className="feature-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Gamepad2 className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">Action & RPG</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
                  Погружение в эпические миры, прохождение на максимальной сложности и системный разбор механик.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab("games");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold gold-gradient group cursor-pointer mt-4"
              >
                Смотреть плейлист
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="feature-card p-8 md:p-10 rounded-3xl flex flex-col justify-between group">
              <div>
                <div className="feature-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Crown className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">Стратегии</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
                  Тактические разборы, обучение зрителей и турниры с подписчиками. Интеллект побеждает силу.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab("games");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold gold-gradient group cursor-pointer mt-4"
              >
                Смотреть плейлист
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            <div className="feature-card p-8 md:p-10 rounded-3xl flex flex-col justify-between group">
              <div>
                <div className="feature-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">Киберспорт</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
                  Участие в гоночных турнирах, регулярные квалификации, тренировки с про-игроками.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab("games");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold gold-gradient group cursor-pointer mt-4"
              >
                Смотреть плейлист
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Call Out */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-yellow-500/[0.015] to-transparent text-left">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-px gold-bg-gradient"></div>
                <span className="text-[10px] tracking-[0.25em] uppercase gold-gradient font-bold">Люди</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-shadow-gold leading-tight">
                Команда
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                За каждым успешным трансляцией стоит сплоченная команда профессионалов: модераторы чата, графические дизайнеры, видеоредакторы монтажа и SMM-продвижение, помогающие создавать контент высшего класса.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Мы больше чем команда — мы крепкая семья, поддерживающая дух и доказывающая реальными делами, что преград не существует для тех, кто идет вперед.
              </p>
              <button
                onClick={() => {
                  setActiveTab("team");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="btn-gold gold-bg-gradient text-black px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2.5 transition duration-300 mt-4 cursor-pointer"
              >
                <Users className="w-4 h-4" />
                Познакомиться с командой
              </button>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center gold-border-gradient">
                  <VideoIcon className="w-7 h-7 text-yellow-500" />
                </div>
                <h4 className="font-bold text-base md:text-lg text-white mb-1">Монтаж</h4>
                <p className="text-gray-500 text-xs">Монтаж роликов</p>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl text-center lg:mt-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 flex items-center justify-center gold-border-gradient">
                  <ShieldIcon className="w-7 h-7 text-yellow-500" />
                </div>
                <h4 className="font-bold text-base md:text-lg text-white mb-1">Модерация</h4>
                <p className="text-gray-500 text-xs">Модерация 24/7</p>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 flex items-center justify-center gold-border-gradient">
                  <PaintBrushIcon className="w-7 h-7 text-yellow-500" />
                </div>
                <h4 className="font-bold text-base md:text-lg text-white mb-1">Дизайн</h4>
                <p className="text-gray-500 text-xs">Графика и стиль</p>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl text-center lg:mt-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-600/10 to-red-600/10 flex items-center justify-center gold-border-gradient">
                  <MegaphoneIcon className="w-7 h-7 text-yellow-500" />
                </div>
                <h4 className="font-bold text-base md:text-lg text-white mb-1">PR & SMM</h4>
                <p className="text-gray-500 text-xs">Связь и реклама</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 md:py-32 relative text-left">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px gold-bg-gradient"></div>
              <span className="text-[10px] tracking-[0.25em] uppercase gold-gradient font-bold">Сотрудничество</span>
              <div className="w-10 h-px gold-bg-gradient"></div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4 text-shadow-gold">Партнеры</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Работаем с ведущими брендами игровой индустрии и технологий. Открыты к новым коллаборациям и специальным рекламным интеграциям.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl h-36 flex items-center justify-center hover:border-yellow-600/30 transition duration-300 border border-transparent">
              <span className="text-2xl font-black text-gray-750 select-none tracking-widest font-display">COUGAR</span>
            </div>
            <div className="glass-card p-8 rounded-2xl h-36 flex items-center justify-center hover:border-yellow-600/30 transition duration-300 border border-transparent">
              <span className="text-2xl font-black text-gray-755 select-none tracking-widest font-display text-yellow-500/30">THRUSTMASTER</span>
            </div>
            <div className="glass-card p-8 rounded-2xl h-36 flex items-center justify-center hover:border-yellow-600/30 transition duration-300 border border-transparent">
              <span className="text-2xl font-black text-gray-750 select-none tracking-widest font-sans">SATELLITE</span>
            </div>
            <div className="glass-card p-8 rounded-2xl h-36 flex items-center justify-center hover:border-yellow-600/30 transition duration-300 border border-transparent">
              <span className="text-2xl font-black text-gray-750 select-none tracking-widest font-display">ROG STRIX</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setActiveTab("partners");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold gold-gradient group hover:text-white transition duration-200 cursor-pointer"
            >
              Стать партнером
              <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Community / CTA Section */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10 animate-fadeIn">
          <div className="glass-effect rounded-[2.5rem] p-10 sm:p-16 border border-yellow-500/20">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-shadow-gold">
              Готов присоединиться к <span className="gold-gradient">сообществу?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Подписывайся на социальные сети, включай уведомления о трансляциях и стань частью нашей вдохновляющей истории. Вместе мы преодолеем любые трудности!
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
              <a 
                href="https://twitch.tv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold gold-bg-gradient text-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
              >
                <Twitch className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold gold-bg-gradient text-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
              >
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold gold-bg-gradient text-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black" />
              </a>
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold gold-bg-gradient text-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
              >
                <i className="fab fa-vk text-lg sm:text-2xl text-black"></i>
              </a>
            </div>

            <a 
              href="mailto:contact@sitesotika.ru" 
              className="text-gray-400 hover:text-yellow-500 transition duration-200 text-sm sm:text-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-yellow-500" />
              contact@sitesotika.ru
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icons fallbacks
function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PaintBrushIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 22 1-1c1.4-1.4 2.4-3.2 3-5.2L18 8l-4-4-7.8 2C4.2 6.6 2.4 7.6 1 9l-1 1M14 4l6 6M11 16h4M12 13h2" />
    </svg>
  );
}

function MegaphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      <path d="m2 8 16-5M2 8v8M2 16l16 5" />
      <path d="M18 3v18" />
      <path d="M22 10a2 2 0 1 0 0 4M10 8h2v8h-2" />
    </svg>
  );
}
