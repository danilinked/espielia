import ScrollReveal from "./ScrollReveal";

const skills = [
"UX Research", "Product Design", "Branding", "Prototyping", "Design Systems", "Visual Design"];


const tools = [
"Figma", "Adobe Creative Suite", "Sketch", "Framer", "Webflow", "Notion"];


const experienceItems = [
{ role: "Diseñadora UX/UI", company: "Degusta Box", period: "Actualidad" },
{ role: "Diseñadora UX/UI", company: "Click Consulting", period: "2016 – 2018" },
{ role: "Fotógrafa", company: "KIMIKA", period: "2015 – 2016" },
{ role: "Diseño Gráfico / Pdv", company: "Estudio Maravillas", period: "2014 – 2015" },
{ role: "Diseñadora Junior", company: "IESTRATEGIC", period: "2013 – 2014" },
{ role: "Fotógrafa", company: "BRAVABUERO", period: "2012 – 2013" },
{ role: "Fotógrafa", company: "FLASHPOINT", period: "2011 – 2012" },
{ role: "Diseño Gráfico / Ilustración", company: "A.BÍS", period: "2010 – 2011" },
{ role: "Becaria de Diseño", company: "Estudio Nova", period: "2009 – 2010" }];


const AboutSection = () => {
  return (
    <section id="about" className="py-32 section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div>
              <p className="label-text mb-4">Sobre mí</p>
              <h2 className="heading-lg mb-8">Apasionada por crear experiencias que importan</h2>
              <div className="space-y-5">
                <p className="body-lg">Mi filosofía de diseño se centra en el diseño empático. Entender a las personas detrás de cada interfaz. Creo que los mejores productos son invisibles: no requieren explicación, simplemente funcionan.</p>
                <p className="body-md">He tenido el privilegio de colaborar con equipos de fintech, salud, e-commerce y SaaS, aportando siempre una perspectiva holística que conecta el oficio visual con el pensamiento estratégico.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="heading-sm mb-5">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) =>
                  <span key={s} className="project-tag">{s}</span>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="heading-sm mb-5">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) =>
                  <span key={t} className="project-tag">{t}</span>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="heading-sm mb-5">Experiencia</h3>
                <div className="space-y-4">
                  {experienceItems.map((exp) =>
                  <div key={exp.period} className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-foreground">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;




