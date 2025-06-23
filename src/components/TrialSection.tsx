import Icon from "@/components/ui/icon";

const TrialSection = () => {
  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-pink/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon
              name="Gift"
              className="text-neon-green mx-auto mb-6 pulse-glow"
              size={80}
            />
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold gradient-text mb-6">
              ОСТАВЬ ЗАЯВКУ НА ПРОБНЫЙ УРОК
            </h2>
            <p className="text-xl text-white/70 font-roboto mb-8">
              Первое занятие абсолютно бесплатно! Приходи, попробуй и почувствуй
              атмосферу профессиональной DJ школы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-neon-green/20">
              <Icon
                name="Clock"
                className="text-neon-green mx-auto mb-3"
                size={40}
              />
              <h4 className="font-montserrat font-bold text-neon-green mb-2">
                60 минут
              </h4>
              <p className="text-white/60 font-roboto text-sm">
                Длительность урока
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/20">
              <Icon
                name="User"
                className="text-neon-pink mx-auto mb-3"
                size={40}
              />
              <h4 className="font-montserrat font-bold text-neon-pink mb-2">
                1 на 1
              </h4>
              <p className="text-white/60 font-roboto text-sm">
                Индивидуальное занятие
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20">
              <Icon
                name="Zap"
                className="text-neon-blue mx-auto mb-3"
                size={40}
              />
              <h4 className="font-montserrat font-bold text-neon-blue mb-2">
                0 ₽
              </h4>
              <p className="text-white/60 font-roboto text-sm">
                Полностью бесплатно
              </p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-montserrat font-bold text-xl px-12 py-6 rounded-lg hover:scale-105 transition-transform neon-border pulse-glow">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
