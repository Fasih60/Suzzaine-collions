import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import BookCard from "@/components/BookCard";
import { books, seriesNames } from "@/data/books";
import { cn } from "@/lib/utils";

const Books = () => {
  const [activeSeries, setActiveSeries] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = books.filter((book) => {
    const matchesSeries = activeSeries === "All" || book.series === activeSeries;

    const searchLower = searchQuery.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchLower) ||
      book.series.toLowerCase().includes(searchLower) ||
      book.characters.some((c) =>
        c.name.toLowerCase().includes(searchLower)
      );

    return matchesSeries && matchesSearch;
  });

  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section className="relative mt-[-80px] pt-40 pb-28 lg:pb-40 bg-gradient-to-b from-green-700 via-emerald-700 to-green-900 text-primary-foreground">

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="container mt-20 lg:mt-28 mx-auto px-4 lg:px-8 text-center relative z-10">

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

      {/* FILTER + GRID */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>

              <input
                type="text"
                placeholder="Search books or characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
              />
            </div>

          </div>

          {/* SERIES TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">

            {seriesNames.map((name) => (
              <button
                key={name}
                onClick={() => setActiveSeries(name)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm",
                  activeSeries === name
                    ? "bg-accent text-accent-foreground scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {name}
              </button>
            ))}

          </div>

          {/* GRID */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filtered.map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-serif">
                No books found matching your criteria.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveSeries("All");
                }}
                className="mt-4 text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Books;