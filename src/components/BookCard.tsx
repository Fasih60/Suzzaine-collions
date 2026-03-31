import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  index?: number;
}

const BookCard = ({ book, index = 0 }: BookCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow-md bg-card transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <p className="text-primary-foreground/90 text-sm leading-relaxed">
            {book.description}
          </p>
          {book.quote && (
            <p className="text-accent text-xs italic mt-3">"{book.quote}"</p>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <Badge variant="secondary" className="text-xs mb-2">
          {book.series}
        </Badge>
        <h3 className="font-serif text-lg font-semibold text-card-foreground leading-tight line-clamp-2">
          {book.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{book.year}</p>
      </div>
    </div>
  </motion.div>
);

export default BookCard;
