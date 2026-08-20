import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:espielia@gmail.com", text: "espielia@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elia-espinosa-jerez/", text: "https://www.linkedin.com/in/elia-espinosa-jerez/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 section-padding">
      <div className="section-container">
        <ScrollReveal>
          <p className="label-text mb-4">Contacto</p>
          <h2 className="heading-display mb-8 max-w-4xl">Creemos algo juntos.</h2>
          <p className="body-lg max-w-2xl mb-16">Disponible para proyectos freelance, colaboraciones y oportunidades a tiempo completo. ¡Hablemos!</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {links.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-lg border border-border hover:bg-secondary transition-colors duration-300"
              >
                <div>
                  <span className="label-text">{link.label}</span>
                  <p className="text-sm font-medium text-foreground mt-1">{link.text}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

