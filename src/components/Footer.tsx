import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-neon-green/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-pink rounded-full pulse-glow"></div>
              <span className="text-2xl font-montserrat font-bold gradient-text">
                BEAT ACADEMY
              </span>
            </div>
            <p className="text-white/70 font-roboto">
              Профессиональная DJ школа с индивидуальным подходом к каждому
              ученику
            </p>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-bold text-neon-green mb-4">
              Программы
            </h4>
            <ul className="space-y-2 text-white/70 font-roboto">
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Начинающий DJ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Продвинутый курс
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Профессионал
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-bold text-neon-pink mb-4">
              Направления
            </h4>
            <ul className="space-y-2 text-white/70 font-roboto">
              <li>
                <a href="#" className="hover:text-neon-pink transition-colors">
                  House
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-pink transition-colors">
                  Techno
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-pink transition-colors">
                  Hip-Hop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-bold text-neon-blue mb-4">
              Контакты
            </h4>
            <div className="space-y-2 text-white/70 font-roboto">
              <p>+7 (495) 123-45-67</p>
              <p>info@beatacademy.ru</p>
              <p>г. Москва, ул. Музыкальная, 15</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/50 font-roboto mb-4 md:mb-0">
              © 2024 Beat Academy. Все права защищены.
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neon-green hover:text-neon-pink transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-neon-green hover:text-neon-pink transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
              <a
                href="#"
                className="text-neon-green hover:text-neon-pink transition-colors"
              >
                <Icon name="Music" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
