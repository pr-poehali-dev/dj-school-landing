import Icon from "@/components/ui/icon";

const TargetSection = () => {
  const targets = [
    {
      title: "Новички",
      description:
        "Никогда не держали в руках диджейский пульт, но мечтаете научиться",
      icon: "Play",
      color: "neon-green",
    },
    {
      title: "Любители",
      description: "Имеете базовые навыки и хотите повысить уровень мастерства",
      icon: "Volume2",
      color: "neon-pink",
    },
    {
      title: "Будущие профи",
      description: "Планируете работать диджеем в клубах и на мероприятиях",
      icon: "Star",
      color: "neon-blue",
    },
  ];

  return (
    <section id="target" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            ДЛЯ КОГО
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            Наши программы подойдут для всех, кто хочет освоить искусство
            диджеинга
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-${target.color}/20 hover:border-${target.color}/50 transition-all hover:scale-105 animate-fade-in text-center`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon
                name={target.icon as any}
                className={`text-${target.color} mx-auto mb-6`}
                size={64}
              />
              <h3
                className={`text-2xl font-montserrat font-bold text-${target.color} mb-4`}
              >
                {target.title}
              </h3>
              <p className="text-white/70 font-roboto">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
