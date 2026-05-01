import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
<nav
  className={cn(
    "fixed top-4 left-1/2 -translate-x-1/2 z-50",
    "w-[92%] max-w-5xl",

    // Glass morphism capsule
    "backdrop-blur-2xl bg-black/30 border border-white/20",

    // Shape
    "rounded-full shadow-2xl",

    // smooth transitions
    "transition-all duration-300",

    scrolled || !isHome || isOpen
      ? "bg-black/60 shadow-black/40"
      : "bg-black/30"
  )}
>


      <div className="relative w-full max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
<Link to="/" className="flex items-center gap-2 text-white group">
  <img
    src={logo}
    alt="Logo"
    className="h-18 w-18 md:h-24 md:w-24 object-contain drop-shadow-md"
  />

<span className="font-serif text-sm md:text-base font-bold tracking-wide">
  Suzanne Collins
</span>
</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all group",
                  location.pathname === link.to
                    ? "text-emerald-300"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute left-0 bottom-0 w-full h-[2px] bg-emerald-400 scale-x-0 transition-transform origin-left duration-300",
                    location.pathname === link.to
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-md transition"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-black/70 border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition",
                    location.pathname === link.to
                      ? "text-emerald-300 bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
};

export default Navbar;