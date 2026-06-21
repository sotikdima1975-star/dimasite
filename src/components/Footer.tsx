import React from "react";
import { Crown, Mail, Send, Briefcase, Twitch, Youtube, MessageCircle, AlertCircle } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onContactClick: () => void;
}

export default function Footer({ setActiveTab, onContactClick }: FooterProps) {
  const scrollAndTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-900 bg-[#070707] pt-16 md:pt-20 pb-10 mt-16 text-gray-400">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Card */}
          <div className="space-y-6">
            <button
              onClick={() => scrollAndTab("main")}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 gold-bg-shine rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition duration-300">
                <Crown className="text-black w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl md:text-3xl font-bold tracking-wide text-white">
                Сайт<span className="gold-gradient">Сотика</span>
              </span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Премиальный стриминг без границ. Вдохновляем, развлекаем, побеждаем вместе.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="referring noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition group border border-gray-800 hover:border-yellow-600/30"
                aria-label="Twitch"
              >
                <Twitch className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="referring noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition group border border-gray-800 hover:border-yellow-600/30"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition duration-300" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="referring noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition group border border-gray-800 hover:border-yellow-600/30"
                aria-label="Telegram"
              >
                <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-yellow-500 transition duration-300" />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="referring noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition group border border-gray-800 hover:border-yellow-600/30"
                aria-label="VK"
              >
                <i className="fab fa-vk text-gray-500 group-hover:text-yellow-500 transition text-sm"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] gold-gradient font-sans">
              Навигация
            </h4>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() => scrollAndTab("main")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition cursor-pointer"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndTab("about")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition cursor-pointer"
                >
                  Обо мне
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndTab("games")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition cursor-pointer"
                >
                  Игры
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndTab("team")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition cursor-pointer"
                >
                  Команда
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndTab("partners")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition cursor-pointer"
                >
                  Партнеры
                </button>
              </li>
            </ul>
          </div>

          {/* Content Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] gold-gradient font-sans">
              Контент
            </h4>
            <ul class="space-y-3.5">
              <li>
                <button
                  onClick={() => scrollAndTab("games")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition text-left cursor-pointer"
                >
                  Ресинг контент
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndTab("games")}
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition text-left cursor-pointer"
                >
                  Расписание гонок
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition block"
                >
                  Архив записей
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition block"
                >
                  Мерч (скоро)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] gold-gradient font-sans">
              Контакты
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5 text-sm">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-650 text-xs text-gray-500 mb-0.5">Email</div>
                  <a href="mailto:contact@sitesotika.ru" className="text-gray-300 font-medium hover:text-yellow-500 transition">
                    contact@sitesotika.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-sm">
                <Send className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-650 text-xs text-gray-500 mb-0.5">Telegram</div>
                  <a href="https://t.me/sitesotika" target="_blank" className="text-gray-300 font-medium hover:text-yellow-500 transition">
                    @sitesotika
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-sm">
                <Briefcase className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-650 text-xs text-gray-500 mb-0.5">Для сотрудничества</div>
                  <a href="mailto:business@sitesotika.ru" className="text-gray-300 font-medium hover:text-yellow-500 transition">
                    business@sitesotika.ru
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p className="font-medium text-center md:text-left">
            © {new Date().getFullYear()} СайтСотика | Дмитрий Передний. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-yellow-600 transition font-medium">
              Политика конфиденциальности
            </a>
            <a href="#" class="hover:text-yellow-600 transition font-medium">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
