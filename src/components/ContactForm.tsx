import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    genre: "House",
    experience: "Начинающий",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
              ЗАПИСАТЬСЯ НА УРОК
            </h2>
            <p className="text-xl text-white/70 font-roboto">
              Первое занятие бесплатно! Заполните форму и мы свяжемся с вами
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-roboto mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black/50 border border-neon-green/30 rounded-lg px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-black/50 border border-neon-green/30 rounded-lg px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto mb-2">
                    Интересующий жанр
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) =>
                      setFormData({ ...formData, genre: e.target.value })
                    }
                    className="w-full bg-black/50 border border-neon-green/30 rounded-lg px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                  >
                    <option value="House">House</option>
                    <option value="Techno">Techno</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-roboto mb-2">
                    Уровень опыта
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full bg-black/50 border border-neon-green/30 rounded-lg px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                  >
                    <option value="Начинающий">Начинающий</option>
                    <option value="Продвинутый">Продвинутый</option>
                    <option value="Профессионал">Профессионал</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-black font-montserrat font-bold py-4 rounded-lg hover:scale-105 transition-transform neon-border"
                >
                  ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/20">
                <Icon name="MapPin" className="text-neon-pink mb-4" size={32} />
                <h3 className="text-xl font-montserrat font-bold text-neon-pink mb-2">
                  Адрес
                </h3>
                <p className="text-white/70 font-roboto">
                  г. Москва, ул. Музыкальная, 15
                  <br />
                  м. Парк Культуры
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20">
                <Icon name="Clock" className="text-neon-blue mb-4" size={32} />
                <h3 className="text-xl font-montserrat font-bold text-neon-blue mb-2">
                  Режим работы
                </h3>
                <p className="text-white/70 font-roboto">
                  Пн-Пт: 10:00 - 22:00
                  <br />
                  Сб-Вс: 12:00 - 20:00
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-green/20">
                <Icon name="Phone" className="text-neon-green mb-4" size={32} />
                <h3 className="text-xl font-montserrat font-bold text-neon-green mb-2">
                  Контакты
                </h3>
                <p className="text-white/70 font-roboto">
                  +7 (495) 123-45-67
                  <br />
                  info@beatacademy.ru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
