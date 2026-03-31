import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookCard from "@/components/BookCard";
import { books, seriesNames } from "@/data/books";
import { cn } from "@/lib/utils";

const Books = () => {
  const [activeSeries, setActiveSeries] = useState("All");

  const filtered =
    activeSeries === "All"
      ? books
      : books.filter((b) => b.series === activeSeries);

  return (
    <div className="pt-20 lg:pt-14">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              The <span className="text-accent">Books</span>
            </h1>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Explore the complete collection of novels by Suzanne Collins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {seriesNames.map((name) => (
              <button
                key={name}
                onClick={() => setActiveSeries(name)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                  activeSeries === name
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
