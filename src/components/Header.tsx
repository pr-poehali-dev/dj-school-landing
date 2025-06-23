import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neon-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-pink rounded-full pulse-glow"></div>
            <span className="text-2xl font-montserrat font-bold gradient-text">
              BEAT ACADEMY
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white hover:text-neon-green transition-colors font-roboto"
            >
              О школе
            </a>
            <a
              href="#target"
              className="text-white hover:text-neon-pink transition-colors font-roboto"
            >
              Для кого
            </a>
            <a
              href="#genres"
              className="text-white hover:text-neon-blue transition-colors font-roboto"
            >
              Направления
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-neon-green transition-colors font-roboto"
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="text-white hover:text-neon-pink transition-colors font-roboto"
            >
              Контакты
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-green transition-colors"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-white hover:text-neon-green transition-colors font-roboto"
              >
                О школе
              </a>
              <a
                href="#target"
                className="text-white hover:text-neon-pink transition-colors font-roboto"
              >
                Для кого
              </a>
              <a
                href="#genres"
                className="text-white hover:text-neon-blue transition-colors font-roboto"
              >
                Направления
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-neon-green transition-colors font-roboto"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-white hover:text-neon-pink transition-colors font-roboto"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
