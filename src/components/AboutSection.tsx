import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            О ШКОЛЕ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-3xl mx-auto">
            Beat Academy — это профессиональная DJ школа с многолетним опытом
            подготовки диджеев всех уровней
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all text-center">
            <Icon
              name="Award"
              className="text-neon-green mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-4">
              5+ лет опыта
            </h3>
            <p className="text-white/70 font-roboto">
              Работаем с 2019 года и подготовили более 500 диджеев
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-pink/20 hover:border-neon-pink/50 transition-all text-center">
            <Icon
              name="Users"
              className="text-neon-pink mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-montserrat font-bold text-neon-pink mb-4">
              Топ преподаватели
            </h3>
            <p className="text-white/70 font-roboto">
              Резидены лучших клубов Москвы делятся опытом
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-blue/20 hover:border-neon-blue/50 transition-all text-center">
            <Icon
              name="Headphones"
              className="text-neon-blue mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-montserrat font-bold text-neon-blue mb-4">
              Pro оборудование
            </h3>
            <p className="text-white/70 font-roboto">
              Pioneer DJ, Technics и другое профессиональное оборудование
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
