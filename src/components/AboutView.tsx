import React from "react";
import { Star, Twitch, Youtube, MessageCircle, Rocket, Cpu, Monitor, Headphones, Gamepad2, Settings } from "lucide-react";
import { motion } from "motion/react";

export default function AboutView() {
  const specs = [
    { category: "Игровой ПК", icon: <Cpu className="w-5 h-5 text-yellow-500" />, items: [
      { label: "Процессор", value: "AMD Ryzen 9 5900X" },
      { label: "Видеокарта", value: "NVIDIA GeForce RTX 4080" },
      { label: "Оперативная память", value: "32GB G.Skill Trident Z DDR4 3600MHz" },
      { label: "Накопитель", value: "2TB Samsung 980 Pro NVMe" },
      { label: "Материнская плата", value: "ASUS ROG STRIX B550-F" }
    ]},
    { category: "Симрейсинг Сетап", icon: <Gamepad2 className="w-5 h-5 text-yellow-500" />, items: [
      { label: "Рулевая база", value: "Thrustmaster T300 RS GT Edition" },
      { label: "Педали", value: "Thrustmaster T-LCM Load Cell Pedals" },
      { label: "Стойка для руля", value: "Next Level Racing Wheel Stand 2.0" },
      { label: "Кокпит / Кресло", value: "Playseat Trophy Sim Racing Seat" },
      { label: "Шифтер / КПП", value: "Thrustmaster TH8A Shifter" }
    ]},
    { category: "Периферия", icon: <Monitor className="w-5 h-5 text-yellow-500" />, items: [
      { label: "Монитор", value: "Gigabyte M32QC Curved 170Hz 2K" },
      { label: "Наушники", value: "HyperX Cloud Alpha S Wireless" },
      { label: "Микрофон", value: "Shure MV7 Podcast Mic" },
      { label: "Веб-камера", value: "Logitech StreamCam Full HD 60fps" }
    ]}
  ];

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 text-left">
      <div className="hero-glow -top-40 -left-40 opacity-40"></div>
      <div className="hero-glow top-1/3 -right-40 opacity-30"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Visual: Video Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-md float-animation">
              <div className="absolute inset-0 gold-bg-gradient opacity-15 blur-3xl rounded-full"></div>
              <div className="w-full h-full rounded-3xl overflow-hidden gold-border-gradient shadow-2xl shadow-yellow-500/20 relative glass-card">
                <video 
                  src="/images/about-portrait.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 shrink-0" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-bold">История</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black leading-none text-shadow-gold">
              Дмитрий<br />
              <span className="gold-gradient">Передний</span>
            </h1>

            <h2 className="text-lg md:text-xl text-yellow-500 font-bold tracking-wide">
              Стример с ограниченными возможностями здоровья (ОВЗ)
            </h2>

            <div className="divider-gold w-32"></div>

            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              <p className="text-white font-medium">
                Привет! Меня зовут Дима, и я доказываю каждый день, что ограничения — только в голове. Стримлю гонки, общаюсь с комьюнити и показываю, что игровой мир открыт абсолютно для каждого.
              </p>
              <p>
                На моем канале СайтСотика вы найдете профессиональные заезды, разборы гоночных трасс, общение в прямом эфире и теплую дружескую поддержку. Я прохожу сложнейшие автосимуляторы, ставлю рекорды времени и делюсь эмоциями со зрителями.
              </p>
              <p>
                Моя глобальная цель — мотивировать людей преодолевать любые преграды в своей жизни, не сдаваться перед трудностями и находить единомышленников. Присоединяйся к нашему путешествию!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4.5 pt-4">
              <a 
                href="https://twitch.tv" 
                target="_blank" 
                rel="referrer noreferrer" 
                className="btn-gold glass-effect text-white hover:text-black px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition flex items-center gap-2.5"
              >
                <Twitch className="w-4 h-4 fill-current" /> Twitch
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="referrer noreferrer" 
                className="btn-gold glass-effect text-white hover:text-black px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition flex items-center gap-2.5"
              >
                <Youtube className="w-4 h-4 fill-current" /> YouTube
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="referrer noreferrer" 
                className="btn-gold glass-effect text-white hover:text-black px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition flex items-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Telegram
              </a>
              <a 
                href="https://boosty.to" 
                target="_blank" 
                rel="referrer noreferrer" 
                className="btn-gold glass-effect text-white hover:text-black px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition flex items-center gap-2.5"
              >
                <Rocket className="w-4 h-4" /> Boosty
              </a>
            </div>
          </motion.div>

        </div>

        {/* Specifications Section */}
        <div className="mt-28 md:mt-36">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full mb-4">
              <Settings className="w-4 h-4 text-yellow-500 shrink-0" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-bold">Оборудование</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-shadow-gold">Спецификации Сетапа</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
              Что помогает создавать плавные стримы и выжимать максимум из гоночных трасс.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-3xl p-8 border border-yellow-500/10 hover:border-yellow-500/30 transition duration-300"
              >
                <div className="flex items-center gap-3.5 mb-6 border-b border-yellow-500/5 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/5 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-200 font-medium text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
