import Icon from "@/components/ui/icon";

const Programs = () => {
  const genres = [
    {
      title: "House",
      duration: "Deep & Tech",
      price: "Groove",
      color: "neon-green",
      features: [
        "Deep basslines",
        "Четкий ритм 4/4",
        "Синтезаторные партии",
        "Атмосферные пады",
      ],
    },
    {
      title: "Techno",
      duration: "Hard & Acid",
      price: "Power",
      color: "neon-pink",
      features: [
        "Индустриальные звуки",
        "Повторяющиеся петли",
        "Кислотные линии",
        "Темный драйв",
      ],
    },
    {
      title: "Hip-Hop",
      duration: "Trap & Boom Bap",
      price: "Flow",
      color: "neon-blue",
      features: [
        "Мощные биты",
        "Сэмплы и скретчи",
        "Басовые линии",
        "Ритмичные брейки",
      ],
    },
  ];

  return (
    <section id="genres" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            МУЗЫКАЛЬНЫЕ НАПРАВЛЕНИЯ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            Изучите основные жанры электронной музыки и найдите свой стиль
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-${genre.color}/20 hover:border-${genre.color}/50 transition-all hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-montserrat font-bold text-${genre.color} mb-2`}
                >
                  {genre.title}
                </h3>
                <div className="text-white/60 font-roboto mb-4">
                  {genre.duration}
                </div>
                <div
                  className={`text-3xl font-montserrat font-bold text-${genre.color} neon-glow`}
                >
                  {genre.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {genre.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-white/80 font-roboto"
                  >
                    <Icon
                      name="Check"
                      className={`text-${genre.color} mr-3`}
                      size={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full bg-gradient-to-r from-${genre.color} to-${genre.color} text-black font-montserrat font-bold py-3 rounded-lg hover:scale-105 transition-transform`}
              >
                ИЗУЧИТЬ
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-neon-green/10 to-neon-pink/10 p-6 rounded-lg border border-neon-green/20">
            <Icon
              name="Music"
              className="text-neon-green mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-2">
              НАЙДИ СВОЙ СТИЛЬ!
            </h3>
            <p className="text-white/70 font-roboto">
              Погрузись в мир электронной музыки и открой для себя новые жанры
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
