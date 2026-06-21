import React, { useState } from "react";
import { Flag, Compass, Car, Wrench, Timer, Calendar, ChevronRight, CheckCircle2, Award } from "lucide-react";
import { motion } from "motion/react";

type SeriesKey = "forza" | "ac" | "pc";

interface TrackItem {
  name: string;
  bestLap: string;
}

interface TimeItem {
  track: string;
  car: string;
  time: string;
}

interface GameSection {
  title: string;
  image: string;
  badge?: string;
  description: string;
  lovedTracks: TrackItem[];
  topCars: { name: string; category: string }[];
  setupTips: string[];
  bestTimes: TimeItem[];
  vodSchedule: string;
}

export default function GamesView() {
  const [activeSeries, setActiveSeries] = useState<SeriesKey>("forza");

  const gamesData: Record<SeriesKey, GameSection[]> = {
    forza: [
      {
        title: "Forza Motorsport 2023",
        image: "/images/forza2023.png",
        badge: "Новинка",
        description: "Полная перезагрузка серии. Новая физика, 4K 60fps с трассировкой лучей в реальном времени, глубокая система прогрессии автомобилей. Акцент на чистую гонку, реалистичный износ шин и расход топлива. Спецификации CarPG.",
        lovedTracks: [
          { name: "Maple Valley", bestLap: "1:35.221" },
          { name: "Kyalami GP", bestLap: "1:44.332" },
          { name: "Mid-Ohio", bestLap: "1:28.901" },
          { name: "Hakone GP", bestLap: "1:41.115" }
        ],
        topCars: [
          { name: "Cadillac V-Series.R", category: "Forza GT" },
          { name: "Porsche 963", category: "GTP" },
          { name: "BMW M4 GT3", category: "GT3" },
          { name: "Corvette C8.R", category: "GTLM" }
        ],
        setupTips: [
          "Качай уровень авто до 50 для открытия всех производительных деталей",
          "Топливо: рассчитывай на 3-4 круга в квалификации для легкости",
          "Тормоза: выставляй баланс на 52% для стабилизации заноса",
          "Подвеска: делай мягче при заездах на ухабистых треках типа Mid-Ohio"
        ],
        bestTimes: [
          { track: "Spa-Francorchamps", car: "Porsche 963", time: "2:02.441" },
          { track: "Suzuka Circuit", car: "BMW M4 GT3", time: "2:00.112" },
          { track: "Watkins Glen", car: "Corvette C8.R", time: "1:44.889" }
        ],
        vodSchedule: "Стримы проводятся по вторникам и четвергам в 19:00 МСК. Записи доступны сразу после завершения заезда."
      },
      {
        title: "Forza Motorsport 7",
        image: "/images/forza7.png",
        badge: "Легенда",
        description: "Классическая соревновательная автогоночная игра. Огромная коллекция из более чем 700 автомобилей и динамическая смена погодных условий. Трассы лазерного сканирования со всего мира.",
        lovedTracks: [
          { name: "Nürburgring Nordschleife", bestLap: "6:45.109" },
          { name: "Brands Hatch GP", bestLap: "1:22.502" },
          { name: "Laguna Seca", bestLap: "1:19.988" }
        ],
        topCars: [
          { name: "Porsche 911 GT2 RS", category: "Exotic" },
          { name: "Ferrari FXX K", category: "Hypercars" },
          { name: "Lamborghini Huracán Super Trofeo", category: "Race Car" }
        ],
        setupTips: [
          "Регулируй давление в шинах до оптимальных 2.0-2.1 бар на горячую",
          "Ограничители клиренса: занижай подвеску для лучшего прижима на асфальте",
          "Дифференциал: 60-70% ускорения поможет стабильно выходить из медленных поворотов"
        ],
        bestTimes: [
          { track: "Nürburgring Nordschleife", car: "911 GT2 RS", time: "6:41.112" },
          { track: "Monza Circuit", car: "Ferrari FXX K", time: "1:40.890" }
        ],
        vodSchedule: "Ретро-заезды и фан-кубки по субботам. Записи в плейлисте на YouTube."
      }
    ],
    ac: [
      {
        title: "Assetto Corsa Competizione",
        image: "/images/acc.png",
        badge: "Профессионально",
        description: "Официальный симулятор чемпионата GT World Challenge. Максимальная точность симуляции физики, аэродинамики, работы подвески и электронных помощников (ABS, TC).",
        lovedTracks: [
          { name: "Monza GP", bestLap: "1:47.105" },
          { name: "Spa GP", bestLap: "2:17.302" },
          { name: "Silverstone GP", bestLap: "1:58.450" },
          { name: "Mount Panorama", bestLap: "2:01.350" }
        ],
        topCars: [
          { name: "Porsche 911 GT3 R (992)", category: "GT3" },
          { name: "Ferrari 296 GT3", category: "GT3" },
          { name: "Mercedes-AMG GT3 Evo", category: "GT3" },
          { name: "Aston Martin Vantage V8", category: "GT3" }
        ],
        setupTips: [
          "Давление в шинах строго подгоняй под 26.5-27.0 psi на горячую",
          "Выставляй значения TC и ABS прямо во время дождливых гонок",
          "Используй телеметрию MoTeC для отслеживания хода амортизаторов"
        ],
        bestTimes: [
          { track: "Monza GP", car: "Ferrari 296 GT3", time: "1:46.991" },
          { track: "Spa GP", car: "Porsche 911 (992)", time: "2:16.890" },
          { track: "Silverstone GP", car: "Aston Martin V8", time: "1:57.902" }
        ],
        vodSchedule: "Endurance-заезды и марафоны. По пятницам в 18:00 МСК."
      },
      {
        title: "Assetto Corsa",
        image: "/images/ac.png",
        badge: "Моддинг",
        description: "Легендарный физический движок с бесконечными возможностями кастомизации. Реалистичный дрифт-режим, кастомные треки и легендарные советские автомобили благодаря обширному сообществу моддеров.",
        lovedTracks: [
          { name: "Touge Akina", bestLap: "5:02.112" },
          { name: "Ebisu Minami", bestLap: "Drift Route" },
          { name: "Mugello", bestLap: "1:43.200" }
        ],
        topCars: [
          { name: "Toyota AE86 Drift", category: "Drift" },
          { name: "BMW M3 E30 Group A", category: "Retro" },
          { name: "Mazda RX-7 FD Spirit R", category: "JDM" }
        ],
        setupTips: [
          "Для дрифта блокируй задний дифференциал на 100%",
          "Ставь жесткие стабилизаторы поперечной устойчивости сзади для заноса",
          "Пользуйся утилитой Content Manager для кастомных погодных шейдеров"
        ],
        bestTimes: [
          { track: "Mugello GP", car: "BMW M3 Group A", time: "1:42.551" }
        ],
        vodSchedule: "Дрифт-вечера и свободные покатушки по воскресеньям."
      }
    ],
    pc: [
      {
        title: "Project CARS 2",
        image: "/images/pc1.png",
        badge: "Динамично",
        description: "Глубокая система смены времени суток и погоды Livetrack 3.0. Поддержка заездов по льду, гравию и мокрому глянцевому асфальту на широчайшем спектре классов автомобилей.",
        lovedTracks: [
          { name: "Le Mans 24h", bestLap: "3:22.099" },
          { name: "Red Bull Ring", bestLap: "1:30.125" },
          { name: "Cote d'Azur", bestLap: "Point-to-Point" }
        ],
        topCars: [
          { name: "Audi R18 e-tron", category: "LMP1" },
          { name: "Ford GT LM GTE", category: "GTE" },
          { name: "Formula Renault 3.5", category: "Open Wheel" }
        ],
        setupTips: [
          "Следи за температурой тормозных колодок и выбирай правильные воздуховоды",
          "При дожде увеличивай дорожный просвет для предотвращения аквапланирования"
        ],
        bestTimes: [
          { track: "Le Mans GP", car: "Audi R18 e-tron", time: "3:21.012" },
          { track: "Red Bull Ring", car: "Formula Renault", time: "1:29.401" }
        ],
        vodSchedule: "Кампания и редкие тематические стримы."
      }
    ]
  };

  const navTabs = [
    { id: "forza", label: "Forza Motorsport" },
    { id: "ac", label: "Assetto Corsa" },
    { id: "pc", label: "Project CARS" }
  ];

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 text-left">
      <div className="hero-glow -top-40 -left-40 opacity-40"></div>
      <div className="hero-glow bottom-0 right-0 opacity-20"></div>

      {/* Title Header */}
      <section className="relative pb-16 overflow-hidden border-b border-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 gold-border-gradient px-4 py-2 rounded-full mb-8">
              <Flag className="text-yellow-500 w-4 h-4 shrink-0" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-200 font-semibold">
                Racing Hub
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-black leading-none mb-6 text-shadow-gold">
              Гоночная <span className="gold-gradient">Коллекция</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Детальные разборы симуляторов: персональные сетапы, телеметрия лучших заездов, рекорды трасс и любимые суперкары. Всё для безупречной скорости в прямом эфире.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-5 md:p-6 border border-yellow-500/10">
                <div className="text-3xl sm:text-4xl font-black gold-gradient mb-1 font-display">6</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Игр на стримах</div>
              </div>
              <div className="glass-effect rounded-2xl p-5 md:p-6 border border-yellow-500/10">
                <div className="text-3xl sm:text-4xl font-black gold-gradient mb-1 font-display">847</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold font-semibold">Часов за Рулем</div>
              </div>
              <div className="glass-effect rounded-2xl p-5 md:p-6 border border-yellow-500/10">
                <div className="text-3xl sm:text-4xl font-black gold-gradient mb-1 font-display">120+</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold font-semibold">Изученных Трасс</div>
              </div>
              <div className="glass-effect rounded-2xl p-5 md:p-6 border border-yellow-500/10">
                <div className="text-3xl sm:text-4xl font-black gold-gradient mb-1 font-display">500+</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold font-semibold">Гоночных Авто</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Selection Navigation Sticky Bar */}
      <div className="sticky top-[80px] z-40 bg-black/95 backdrop-blur-xl border-b border-yellow-500/15 py-4 md:py-5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSeries(tab.id as SeriesKey)}
              className={`series-tab px-6 md:px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider backdrop-blur-md cursor-pointer ${
                activeSeries === tab.id ? "active" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Game Content Rendering Panel */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 space-y-24">
        {gamesData[activeSeries].map((game, index) => (
          <motion.section
            key={game.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="pb-20 border-b border-gray-900 last:border-0 last:pb-0"
          >
            {/* Split Grid Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12">
              {/* Cover Image container */}
              <div className="lg:col-span-6 relative group">
                <div className="relative aspect-video rounded-3xl overflow-hidden gold-border-gradient glass-card shadow-xl shadow-yellow-500/5">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  {game.badge && (
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 uppercase tracking-widest backdrop-blur-md">
                        {game.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Story Intro Info */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black gold-gradient leading-none">
                  {game.title}
                </h3>
                <div className="divider-gold w-24"></div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  {game.description}
                </p>
                <div className="pt-2">
                  <a
                    href="https://twitch.tv"
                    target="_blank"
                    className="btn-gold gold-bg-gradient text-black px-7 py-3 rounded-xl font-bold text-xs tracking-wider uppercase inline-flex items-center gap-3 shadow-lg shadow-yellow-500/5"
                  >
                    <TwitchIcon className="w-4 h-4 text-black fill-black" />
                    Регулярные Стримы
                  </a>
                </div>
              </div>
            </div>

            {/* Custom grids representing tracks, setups and top autos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Loved Tracks */}
              <div className="glass-card rich-card rounded-2xl p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-yellow-500 shrink-0" />
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white">Любимые трассы</h4>
                </div>
                <ul className="space-y-4">
                  {game.lovedTracks.map((track) => (
                    <li key={track.name} className="flex items-start gap-3 border-b border-white/5 pb-3.5 last:border-0 last:pb-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white text-sm">{track.name}</div>
                        <div className="text-xs text-gray-500">Лучший круг: {track.bestLap}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Autos catalog */}
              <div className="glass-card rich-card rounded-2xl p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-yellow-500 shrink-0" />
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white">Лучшие автомобили</h4>
                </div>
                <ul className="space-y-3.5">
                  {game.topCars.map((car) => (
                    <li key={car.name} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-sm text-white truncate">{car.name}</span>
                      <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/10 shrink-0">
                        {car.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom Setups and Tips */}
              <div className="glass-card rich-card rounded-2xl p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-yellow-500 shrink-0" />
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white">Настройки / Сетап</h4>
                </div>
                <ul className="space-y-3 text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {game.setupTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom times list & schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
              
              {/* Record Times */}
              <div className="glass-card rich-card rounded-2xl p-6 md:p-8">
                <h4 className="font-display text-xl md:text-2xl font-bold mb-5 flex items-center gap-3 text-white">
                  <Timer className="w-5 h-5 text-yellow-500" />
                  Личные рекорды круга
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-yellow-500/25">
                        <th className="py-2.5 px-1 font-bold text-yellow-500 uppercase tracking-wider">Трасса</th>
                        <th className="py-2.5 px-1 font-bold text-yellow-500 uppercase tracking-wider">Авто</th>
                        <th className="py-2.5 px-1 font-bold text-yellow-500 uppercase tracking-wider text-right">Время круга</th>
                      </tr>
                    </thead>
                    <tbody>
                      {game.bestTimes.map((item, idx) => (
                        <tr key={idx} className="border-b border-white/5 last:border-0">
                          <td className="py-3 px-1 font-medium text-white">{item.track}</td>
                          <td className="py-3 px-1 text-gray-400">{item.car}</td>
                          <td className="py-3 px-1 text-right font-black text-yellow-500 font-mono">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Schedule and VOD information card */}
              <div className="glass-card rich-card rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    Расписание заездов
                  </h4>
                  <div className="h-0.5 bg-yellow-500/5 mb-4"></div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {game.vodSchedule}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 bg-yellow-500/5 border border-yellow-500/10 p-4 rounded-xl mt-6">
                  <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                    Все трансляции в высоком битрейте 1080p 60fps
                  </span>
                </div>
              </div>

            </div>

          </motion.section>
        ))}
      </div>
    </div>
  );
}

// Custom Twitch icon path
function TwitchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9H9V6h2v5zm4 0h-2V6h2v5z" />
    </svg>
  );
}
