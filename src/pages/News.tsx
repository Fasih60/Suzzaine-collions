import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { newsItems } from "@/data/books";
import { Badge } from "@/components/ui/badge";

const News = () => {
  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative mt-[-80px] pt-40 pb-28 lg:pb-40 bg-gradient-to-b from-green-700 via-emerald-700 to-green-900 text-primary-foreground">
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="container mt-20 lg:mt-28 mx-auto px-4 lg:px-8 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              News & <span className="text-accent">Updates</span>
            </h1>

            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              The latest announcements, awards, and releases
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

          <div className="space-y-6">

            {newsItems.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {item.date}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                  {item.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mt-3">
                  {item.description}
                </p>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default News;