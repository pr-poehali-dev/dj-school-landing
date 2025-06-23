import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Нужен ли опыт для обучения?",
      answer:
        "Нет, мы принимаем студентов с любым уровнем подготовки. У нас есть программы как для начинающих, так и для продвинутых диджеев.",
    },
    {
      question: "Какое оборудование используется?",
      answer:
        "Мы используем только профессиональное оборудование: Pioneer DJ контроллеры, Technics вертушки, KRK и JBL мониторы.",
    },
    {
      question: "Сколько длится обучение?",
      answer:
        "Продолжительность зависит от выбранной программы: от 2 месяцев для начинающих до 6 месяцев для профессионального курса.",
    },
    {
      question: "Можно ли заниматься онлайн?",
      answer:
        "Основное обучение проходит в студии, но мы предоставляем дополнительные онлайн-материалы и поддержку.",
    },
    {
      question: "Помогаете ли с трудоустройством?",
      answer:
        "Да, мы помогаем лучшим выпускникам с поиском работы в клубах и на мероприятиях благодаря нашим партнёрам.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            FAQ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            Ответы на часто задаваемые вопросы
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-montserrat font-bold text-white">
                  {faq.question}
                </h3>
                <Icon
                  name="ChevronDown"
                  className={`text-neon-green transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-white/70 font-roboto">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
