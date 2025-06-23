import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 gradient-text pulse-glow">
            BEAT ACADEMY
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-roboto max-w-3xl mx-auto">
            Профессиональная DJ школа с топовым оборудованием и индивидуальным
            подходом
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-montserrat font-bold px-8 py-4 rounded-lg neon-border hover:scale-105 transition-transform">
              БЕСПЛАТНЫЙ УРОК
            </button>
            <button className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-montserrat font-bold px-8 py-4 rounded-lg transition-all">
              СМОТРЕТЬ ПРОГРАММЫ
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all">
              <Icon
                name="Music"
                className="text-neon-green mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-montserrat font-bold text-neon-green mb-2">
                House
              </h3>
              <p className="text-white/70 font-roboto">
                Изучите основы electronic dance music
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/20 hover:border-neon-pink/50 transition-all">
              <Icon
                name="Zap"
                className="text-neon-pink mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-montserrat font-bold text-neon-pink mb-2">
                Techno
              </h3>
              <p className="text-white/70 font-roboto">
                Погрузитесь в мир техно культуры
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20 hover:border-neon-blue/50 transition-all">
              <Icon
                name="Headphones"
                className="text-neon-blue mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-montserrat font-bold text-neon-blue mb-2">
                Hip-Hop
              </h3>
              <p className="text-white/70 font-roboto">
                Овладейте искусством scratching
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-neon-green" size={32} />
      </div>
    </section>
  );
};

export default Hero;
