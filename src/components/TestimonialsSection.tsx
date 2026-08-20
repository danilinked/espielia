import ScrollReveal from "./ScrollReveal";

const education = [
  {
    title: "Finalización Ilustración",
    institution: "WdKA, Rotterdam",
    period: "2010",
  },
  {
    title: "CFGS Ilustración",
    institution: "Escola la Massana, Bcn",
    period: "2009",
  },
  {
    title: "CFGS Gráfica Publicitaria",
    institution: "Escola la Massana, Bcn",
    period: "2006",
  },
];

const courses = [
  {
    title: "Máster IA generativa para Creativos",
    institution: "Founderz",
    period: "2025 - 2026",
  },
  {
    title: "Máster en UX/UI: Fotógrafa y Producto Digital",
    institution: "Shifta by Elisava",
    period: "2023 - 2024",
  },
  {
    title: "UX Immersive",
    institution: "UXER School",
    period: "2022",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 section-padding bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <p className="label-text mb-4">Formación</p>
          <h2 className="heading-lg mb-16">Conocimiento y estudios</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="heading-sm mb-6">Estudios</h3>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="heading-sm mb-6">Cursos y certificaciones</h3>
              <div className="space-y-6">
                {courses.map((item) => (
                  <div key={item.title} className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


