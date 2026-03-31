import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import authorImg from "@/assets/author-portrait.jpg";
import { Award, BookOpen, Film, Pen } from "lucide-react";

const timeline = [
  { year: "1962", event: "Born in Hartford, Connecticut", icon: Pen },
  { year: "1991", event: "Began career writing for children's television", icon: Film },
  { year: "2003", event: "Published Gregor the Overlander, launching The Underland Chronicles", icon: BookOpen },
  { year: "2008", event: "The Hunger Games published — became an instant bestseller", icon: BookOpen },
  { year: "2010", event: "Mockingjay completes the trilogy; named to Time 100 list", icon: Award },
  { year: "2012", event: "The Hunger Games adapted into a blockbuster film franchise", icon: Film },
  { year: "2020", event: "The Ballad of Songbirds and Snakes published", icon: BookOpen },
  { year: "2025", event: "Sunrise on the Reaping set for release", icon: BookOpen },
];

const About = () => {
  return (
    <div className="pt-20 lg:pt-14">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24" >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-accent">the Author</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={authorImg}
                alt="Author portrait"
                className="rounded-lg shadow-xl w-full max-w-sm mx-auto lg:mx-0"
              />
            </motion.div>
            <motion.div
              className="lg:col-span-3 space-y-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Suzanne Collins
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Suzanne Collins is an American author best known for writing The Hunger Games trilogy. 
                Born in Hartford, Connecticut, she is the daughter of a U.S. Air Force officer, and her 
                family moved frequently during her childhood. This military background gave her a deep 
                understanding of the effects of war — a theme that runs through much of her work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Before writing novels, Collins worked in children's television, contributing to shows 
                such as Clarissa Explains It All and Little Bear. Her first novel series, The Underland 
                Chronicles, began with Gregor the Overlander in 2003 and spanned five books set in a 
                fantastical world beneath New York City.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Hunger Games, published in 2008, became a cultural phenomenon, spending over 260 
                consecutive weeks on the New York Times bestseller list. The trilogy has sold over 100 
                million copies worldwide and was adapted into a major film franchise. Collins returned 
                to Panem in 2020 with The Ballad of Songbirds and Snakes, and announced Sunrise on the 
                Reaping for 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Collins holds a degree in theater and telecommunications from Indiana University and an 
                MFA in dramatic writing from New York University. She currently resides in Connecticut 
                with her family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Career Milestones" subtitle="A journey through decades of storytelling" />
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start py-5 border-l-2 border-accent pl-6 relative"
              >
                <div className="absolute -left-3 top-5 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-3 h-3 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-accent font-serif font-bold text-lg">{item.year}</span>
                  <p className="text-foreground mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Awards & Recognition" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Time 100 Most Influential People",
              "New York Times Notable Book",
              "Publishers Weekly Best Book of the Year",
              "CYBILS Award Winner",
              "Astrid Lindgren Memorial Award Nominee",
              "Over 100 Million Copies Sold Worldwide",
            ].map((award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-card border rounded-lg p-5"
              >
                <Award className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-card-foreground text-sm font-medium">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
