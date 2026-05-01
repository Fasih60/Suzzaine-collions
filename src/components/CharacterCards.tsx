import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

const CharacterCards = () => {
  // Collect a few notable characters from different books
  const characters = [
    {
      name: "Katniss Everdeen",
      book: "The Hunger Games",
      description: "The resourceful and pragmatic tribute from District 12 who becomes the face of the rebellion.",
      image: "🏹"
    },
    {
      name: "Coriolanus Snow",
      book: "The Ballad of Songbirds and Snakes",
      description: "An ambitious young man from a fallen Capitol family who will do anything to restore his status.",
      image: "🐍"
    },
    {
      name: "Gregor",
      book: "Gregor the Overlander",
      description: "An 11-year-old boy who falls into the Underland and is declared the 'Warrior' of a great prophecy.",
      image: "🦇"
    },
    {
      name: "Peeta Mellark",
      book: "The Hunger Games",
      description: "The compassionate baker's son and District 12 tribute who uses his charm and selflessness to survive.",
      image: "🍞"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Notable Characters"
          subtitle="Iconic figures from Suzanne Collins' expanded universes"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => (
            <div key={char.name} className="group perspective-1000 h-[300px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden bg-card border rounded-xl shadow-md flex flex-col items-center justify-center p-6">
                  <div className="text-6xl mb-6">{char.image}</div>
                  <h3 className="font-serif text-xl font-bold text-center text-foreground">{char.name}</h3>
                  <p className="text-sm text-accent mt-2 font-medium tracking-wide uppercase">{char.book}</p>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-primary-foreground rounded-xl shadow-xl flex flex-col items-center justify-center p-6 text-center border border-accent/20">
                  <h3 className="font-serif text-lg font-bold text-accent mb-4">{char.name}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{char.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterCards;
