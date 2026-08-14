import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import portraitImage from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-20">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label-text mb-6">
              DISEÑADORA GRÁFICA Y UX/UI
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-display mb-8 text-5xl lg:text-6xl xl:text-7xl">
              Diseñando experiencias digitales{" "}
              <span className="text-accent">simples</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="body-lg max-w-xl mb-12 font-light text-primary text-base">Con más de 10 años de experiencia, creo productos intuitivos e identidades visuales sólidas. Creo que el buen diseño no necesita explicarse.

            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4">
              <a href="#work" className="cta-primary">
                VER PROYECTOS
              </a>
              <a href="#contact" className="cta-secondary">
                Contactar
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" />
              <img

                alt="Designer portrait"
                className="w-full h-full object-cover relative z-10 rounded-2xl" src="/lovable-uploads/b8276944-f847-48c2-928d-470ab65138ba.png" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block cursor-pointer"
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;