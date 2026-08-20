import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "Investigación", description: "Comprender a los usuarios, el contexto del mercado y los objetivos del negocio a través de entrevistas, análisis de datos y auditorías competitivas." },
  { number: "02", title: "Estrategia", description: "Definir la dirección del diseño, la arquitectura de información y las métricas." },
  { number: "03", title: "Wireframes", description: "Explorar estructura y disposición mediante prototipos de baja fidelidad, enfocándose en flujos de usuario y jerarquía de contenido." },
  { number: "04", title: "Diseño", description: "Crear interfaces de alta fidelidad con atención a la tipografía, color, espaciado y microinteracciones." },
  { number: "05", title: "Pruebas", description: "Validar diseños mediante pruebas de usabilidad, experimentos A/B y ciclos de retroalimentación con stakeholders." },
  { number: "06", title: "Iteración", description: "Refinar basándose en datos reales, retroalimentación de usuarios y requisitos de producto en evolución." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 section-padding bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <p className="label-text mb-4">Proceso de Diseño</p>
          <h2 className="heading-lg mb-16 max-w-3xl">
            Un enfoque sistemático para resolver desafíos de diseño
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div>
                <span className="text-accent font-bold text-sm">{step.number}</span>
                <h3 className="heading-sm mt-2 mb-3">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

