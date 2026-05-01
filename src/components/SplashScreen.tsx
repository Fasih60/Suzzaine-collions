import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Give time for exit animation
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
<motion.div
  key="splash"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0, filter: "blur(0px)", scale: 1.05 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-850 to-black"
>
          {/* Animated Background Accents */}
          <motion.div 
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[100px]"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img 
              src={logo} 
              alt="Suzanne Collins Logo" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
