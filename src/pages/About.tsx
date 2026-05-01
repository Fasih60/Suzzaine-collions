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
              About <span className="text-accent">the Author</span>
            </h1>
          </motion.div>

        </div>
      </section>

      {/* BIO */}
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
                Suzanne Collins is an American author best known for writing The Hunger Games trilogy...
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Before writing novels, Collins worked in children's television...
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The Hunger Games, published in 2008, became a cultural phenomenon...
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Collins holds a degree in theater and telecommunications...
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">

          <SectionHeading
            title="Themes & Writing Style"
            subtitle="The hallmarks of a Suzanne Collins novel"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {[
              {
                title: "Just War Theory",
                description: "Ethics of war and moral ambiguity of combat.",
              },
              {
                title: "Media Manipulation",
                description: "Control through spectacle and media systems.",
              },
              {
                title: "Survival & Trauma",
                description: "Psychological toll of violence on individuals.",
              },
              {
                title: "Authoritarianism",
                description: "Oppression, inequality, and rebellion themes.",
              }
            ].map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Pen className="w-5 h-5 text-accent" />
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {theme.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">

          <SectionHeading
            title="Career Milestones"
            subtitle="A journey through decades of storytelling"
          />

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
                  <span className="text-accent font-serif font-bold text-lg">
                    {item.year}
                  </span>
                  <p className="text-foreground mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          <SectionHeading title="Awards & Recognition" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {[
              "Time 100 Most Influential People",
              "New York Times Notable Book",
              "Publishers Weekly Best Book",
              "CYBILS Award Winner",
              "Astrid Lindgren Memorial Nominee",
              "100M+ Copies Sold Worldwide",
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
                <span className="text-card-foreground text-sm font-medium">
                  {award}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;