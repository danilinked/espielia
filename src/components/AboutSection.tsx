const experienceItems = [
  { role: "Diseñadora UX/UI", company: "Click Consulting", period: "2016 – 2018" },
  { role: "Diseño Gráfico", company: "KIMIKA", period: "2015 – 2016" },
  { role: "Diseñadora Visual", company: "Estudio Maravillas", period: "2014 – 2015" },
  { role: "Diseñadora en Prácticas", company: "Estudio Gràfic", period: "2012 – 2013" },
  { role: "Diseño Editorial", company: "Editorial Blanc", period: "2011 – 2012" },
  { role: "Prácticas de Diseño", company: "Taller Visual", period: "2010 – 2011" },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="heading-lg mb-4">Sobre mí</h2>
          <p className="text-muted-foreground max-w-2xl">
            Diseñadora con más de una década de experiencia en proyectos de branding, diseño editorial y experiencia de usuario.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="heading-sm mb-5">Sobre mí</h3>
            <p className="text-sm text-muted-foreground">
              Apasionada por el diseño y la creatividad, con un enfoque centrado en la simplicidad y la funcionalidad.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="heading-sm mb-5">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">Branding</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">Diseño Editorial</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">UX/UI</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">Tipografía</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">Ilustración</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-foreground">Dirección de Arte</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="heading-sm mb-5">Experiencia</h3>
            <div className="space-y-4">
              {experienceItems.map((exp) =>
                <div key={exp.period} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-foreground">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="heading-sm mb-5">Educación</h3>
            <p className="text-sm text-muted-foreground">
              Grado en Diseño Gráfico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;