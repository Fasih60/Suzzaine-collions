import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import hungerGames from "@/assets/hunger-games.jpg";
import catchingFire from "@/assets/catching-fire.jpg";
import mockingjay from "@/assets/mockingjay.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Dark Forest + Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover origin-bottom scale-[1.15] opacity-50 mix-blend-overlay"
        />
        {/* Gradient overlay: dark green -> transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e1d] via-[#0a2e1d]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full container mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side (Content) */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Soft light/glow behind text */}
          <div className="absolute -inset-10 bg-green-500/10 blur-[80px] rounded-full z-0 pointer-events-none" />

          <p className="relative z-10 text-green-400 font-semibold tracking-widest text-sm mb-4 uppercase">
            AUTHOR OF THE HUNGER GAMES
          </p>
          <h1 className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
            <span className="block mb-2">Suzanne</span>
            <span className="text-yellow-500 drop-shadow-md">Collins</span>
          </h1>
          <p className="relative z-10 mt-6 text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
            Crafting worlds that challenge our understanding of power, survival, and what it means to be human.
          </p>

          <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-yellow-950 font-bold rounded-full px-8 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 border-none"
            >
              <Link to="/books">
                Explore Books
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-500/30 bg-transparent text-white hover:text-white hover:bg-green-900/40 hover:border-green-500/50 rounded-full px-8 backdrop-blur-sm transition-all duration-300 group"
            >
              <Link to="/about">
                About the Author
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Side (Animated Images) */}
        <div className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative mt-8 lg:mt-0 flex items-center justify-center">

          {/* Main front image */}
          <motion.div
            className="absolute z-30 w-[150px] sm:w-[180px] md:w-[240px] lg:w-[280px] shadow-2xl rounded-xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 2, -1, 0]
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img
              src={hungerGames}
              alt="Book 1"
              className="w-full h-auto object-cover bg-neutral-900 aspect-[2/3]"
            />
          </motion.div>

          {/* Left background image */}
          <motion.div
            className="absolute z-20 w-[110px] sm:w-[140px] md:w-[180px] lg:w-[220px] shadow-xl rounded-xl overflow-hidden border border-white/5 left-0 sm:left-4 md:left-[10%] top-[10%] opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{
              opacity: 0.8,
              x: 0,
              y: [10, -5, 10],
              rotate: [-10, -8, -10]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
            }}
          >
            <img
              src={catchingFire}
              alt="Catching Fire"
              className="w-full h-auto object-cover bg-neutral-800 aspect-[2/3]"
            />
          </motion.div>

          {/* Right background image */}
          <motion.div
            className="absolute z-10 w-[90px] sm:w-[120px] md:w-[160px] lg:w-[200px] shadow-xl rounded-xl overflow-hidden border border-white/5 right-0 sm:-right-4 md:right-[5%] bottom-[5%] lg:bottom-[10%] opacity-60 backdrop-blur-md"
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{
              opacity: 0.6,
              x: 0,
              y: [-10, 10, -10],
              rotate: [12, 15, 12]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.4 },
              x: { duration: 0.8, delay: 0.4 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            <img
              src={mockingjay}
              alt="Mockingjay"
              className="w-full h-auto object-cover bg-neutral-900 aspect-[2/3]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
