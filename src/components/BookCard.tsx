import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  index?: number;
}

const BookCard = ({ book, index = 0 }: BookCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load favorite status from local storage
    const favorites = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    setIsFavorite(favorites.includes(book.id));

    // Generate fake random reading progress (0 to 100%)
    setProgress(Math.floor(Math.random() * 101));
  }, [book.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const favorites = JSON.parse(localStorage.getItem("favoriteBooks") || "[]");
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== book.id);
    } else {
      newFavorites = [...favorites, book.id];
    }
    
    localStorage.setItem("favoriteBooks", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow-md bg-card transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="aspect-[3/4] overflow-hidden relative">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
            />
          </button>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              {book.genre[0]}
            </Badge>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
              {book.description}
            </p>
            {book.quote && (
              <p className="text-accent text-xs italic">"{book.quote}"</p>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <Badge variant="secondary" className="text-xs mb-3 w-fit">
            {book.series}
          </Badge>
          <h3 className="font-serif text-lg font-semibold text-card-foreground leading-tight mb-2">
            {book.title}
          </h3>
          <div className="flex justify-between items-center mt-auto mb-4 text-sm text-muted-foreground">
            <span>{book.year}</span>
            <div className="flex items-center">
              <span className="text-accent mr-1">★</span>
              <span>{book.rating > 0 ? book.rating : "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
