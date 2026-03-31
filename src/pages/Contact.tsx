import { motion } from "framer-motion";
import { Mail, Globe, Info } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20 lg:pt-14">
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Information about reaching the author and her representatives
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border rounded-lg p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-3">
                    A Note on Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Suzanne Collins is known for maintaining a private personal life. She does 
                    not have official social media accounts. Any accounts claiming to be hers 
                    are not authorized.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-lg p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-3">
                    Literary Representation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For all professional inquiries, including rights, licensing, and press, 
                    please contact her literary agency. Suzanne Collins is represented by 
                    Rosemary Stimola of Stimola Literary Studio.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border rounded-lg p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-3">
                    Publishers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Hunger Games series and The Underland Chronicles are published by 
                    Scholastic Press. For book-related inquiries, visit Scholastic's official website.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-lg p-6 lg:p-8 text-center"
            >
              <p className="text-muted-foreground text-sm">
                This is a fan tribute website and is not officially affiliated with 
                Suzanne Collins, Scholastic, or any of their representatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
