import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { books } from "@/data/books";

const quotes = books.filter(b => b.quote).map(b => ({
  text: b.quote,
  author: b.title
}));

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  if (quotes.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote className="w-16 h-16 mx-auto text-accent mb-8 opacity-50" />
          
          <div className="h-[150px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-6">
                  "{quotes[currentIndex].text}"
                </p>
                <p className="text-accent tracking-widest uppercase text-sm font-semibold">
                  — {quotes[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevQuote}
              className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-accent transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-5 h-5 text-accent" />
            </button>
            
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-accent w-6" : "bg-primary-foreground/30 hover:bg-primary-foreground/60"
                  }`}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextQuote}
              className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-accent transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="w-5 h-5 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;
