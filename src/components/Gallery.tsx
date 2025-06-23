const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571266028243-d220c9c3b8a4?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79b2?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=400&fit=crop",
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-6">
            НАША СТУДИЯ
          </h2>
          <p className="text-xl text-white/70 font-roboto max-w-2xl mx-auto">
            Профессиональное оборудование от ведущих брендов для максимального
            обучающего эффекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Студия ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <p className="text-white font-montserrat font-bold">
                    Профессиональное оборудование
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-neon-green neon-glow">
              Pioneer DJ
            </div>
            <p className="text-white/70 font-roboto mt-2">
              Контроллеры и микшеры
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-neon-pink neon-glow">
              Technics
            </div>
            <p className="text-white/70 font-roboto mt-2">
              Вертушки для винила
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-neon-blue neon-glow">
              KRK & JBL
            </div>
            <p className="text-white/70 font-roboto mt-2">
              Мониторы и акустика
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
