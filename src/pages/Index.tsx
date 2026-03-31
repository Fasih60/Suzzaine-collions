import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import BookCard from "@/components/BookCard";
import { books, newsItems } from "@/data/books";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Star, TrendingUp } from "lucide-react";
import authorImg from "@/assets/author-portrait.jpg";

const featuredBooks = books.slice(0, 4);

const Index = () => {
  return (
    <>
      <Hero />

      {/* Selected Works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Selected Works"
            subtitle="Stories that have captivated millions of readers around the world"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredBooks.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/books">
                View All Books <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={authorImg}
                  alt="Author portrait"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
                About the Author
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Voice That Defined a Generation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Suzanne Collins is an acclaimed author known for creating richly imagined worlds 
                that explore themes of power, survival, and moral complexity. Her work has sold 
                over 100 million copies worldwide and been translated into dozens of languages.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From the underground realm of Gregor the Overlander to the dystopian arenas of Panem, 
                her stories continue to resonate with readers of all ages.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">
                  Read Full Bio <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: TrendingUp, stat: "100M+", label: "Books Sold Worldwide" },
              { icon: Star, stat: "50+", label: "Languages Translated" },
              { icon: Award, stat: "Dozens", label: "Literary Awards" },
            ].map(({ icon: Icon, stat, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Icon className="w-8 h-8 text-accent mb-3" />
                <span className="font-serif text-4xl font-bold text-accent">{stat}</span>
                <span className="text-primary-foreground/60 text-sm mt-1">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Latest News"
            subtitle="Recent announcements and updates"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {newsItems.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-card-foreground mt-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-muted-foreground/50 text-xs mt-3">{item.date}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/news">
                All News <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
