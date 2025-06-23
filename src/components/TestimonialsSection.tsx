import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей",
      role: "Диджей в клубе",
      text: "Beat Academy дала мне всё необходимое для старта карьеры. Сейчас играю в топовых клубах Москвы!",
      rating: 5,
    },
    {
      name: "Мария",
      role: "Студентка",
      text: "Преподаватели - настоящие профессионалы. За 3 месяца научилась тому, что не могла освоить годами самостоятельно.",
      rating: 5,
    },
    {
      name: "Дмитрий",
      role: "Event-диджей",
      text: "Отличная школа с современным оборудованием. Рекомендую всем, кто серьёзно относится к диджеингу.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            ОТЗЫВЫ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            Что говорят наши выпускники о Beat Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="text-neon-green fill-current"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-white/80 font-roboto mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-neon-green/20 pt-4">
                <h4 className="font-montserrat font-bold text-neon-green">
                  {testimonial.name}
                </h4>
                <p className="text-white/60 font-roboto text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
