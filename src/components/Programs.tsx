import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Начинающий DJ",
      duration: "2 месяца",
      price: "15,000₽",
      color: "neon-green",
      features: [
        "Основы диджеинга",
        "Работа с контроллером",
        "Базовые техники микширования",
        "Знакомство с жанрами",
      ],
    },
    {
      title: "Продвинутый курс",
      duration: "4 месяца",
      price: "25,000₽",
      color: "neon-pink",
      features: [
        "Продуктивное диджеинг",
        "Scratching и трюки",
        "Работа с толпой",
        "Создание сетов",
      ],
    },
    {
      title: "Профессионал",
      duration: "6 месяцев",
      price: "35,000₽",
      color: "neon-blue",
      features: [
        "Клубное диджеинг",
        "Звуковое оборудование",
        "Продюсирование",
        "Карьерное развитие",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            ПРОГРАММЫ ОБУЧЕНИЯ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            От первых шагов до профессионального уровня - выберите программу под
            свои цели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-${program.color}/20 hover:border-${program.color}/50 transition-all hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-montserrat font-bold text-${program.color} mb-2`}
                >
                  {program.title}
                </h3>
                <div className="text-white/60 font-roboto mb-4">
                  {program.duration}
                </div>
                <div
                  className={`text-3xl font-montserrat font-bold text-${program.color} neon-glow`}
                >
                  {program.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-white/80 font-roboto"
                  >
                    <Icon
                      name="Check"
                      className={`text-${program.color} mr-3`}
                      size={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full bg-gradient-to-r from-${program.color} to-${program.color} text-black font-montserrat font-bold py-3 rounded-lg hover:scale-105 transition-transform`}
              >
                ЗАПИСАТЬСЯ
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-neon-green/10 to-neon-pink/10 p-6 rounded-lg border border-neon-green/20">
            <Icon
              name="Gift"
              className="text-neon-green mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-2">
              ПЕРВОЕ ЗАНЯТИЕ БЕСПЛАТНО!
            </h3>
            <p className="text-white/70 font-roboto">
              Приходите на пробный урок и почувствуйте атмосферу
              профессиональной DJ школы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
