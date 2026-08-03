import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

const renderInlineFormatting = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i} className="font-normal">{part}</span>;
  });
};

const RichText = ({ text }: {text: string;}) => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 mt-2 mb-2">
          {currentList.map((item, i) =>
          <li key={i}>{renderInlineFormatting(item)}</li>
          )}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("•")) {
      currentList.push(trimmed.slice(1).trim());
    } else {
      flushList();
      if (trimmed) {
        // Check if line is a subheading (ends with ":" and is short)
        const isSubheading = trimmed.endsWith(":") && trimmed.length < 60;
        if (isSubheading) {
          elements.push(
            <h4 key={`h4-${i}`} className="font-semibold text-muted-foreground mt-6 mb-2">{trimmed}</h4>
          );
        } else {
          elements.push(<p key={`p-${i}`} className="mb-1">{renderInlineFormatting(trimmed)}</p>);
        }
      }
    }
  });
  flushList();

  return <div className="body-md max-w-3xl">{elements}</div>;
};

const Section = ({ label, title, text }: {label: string;title: string;text: string;}) =>
<ScrollReveal>
    <div className="py-16 border-t border-border">
      <p className="label-text mb-3">{label}</p>
      <h3 className="heading-md mb-5">{title}</h3>
      <RichText text={text} />
    </div>
  </ScrollReveal>;


const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <div className="section-padding pt-8">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}>
            
            <Link to="/" className="inline-flex items-center gap-2 nav-link mb-12">
              <ArrowLeft className="w-4 h-4" /> Volver a Proyectos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) =>
              <span key={tag} className="project-tag">{tag}</span>
              )}
            </div>
            <h1 className="heading-display mb-6 whitespace-pre-line">{project.title}</h1>
            <p className="body-lg max-w-3xl mb-12">{project.summary}</p>

            <div className="flex flex-wrap gap-x-12 gap-y-4 mb-16">
              <div>
                <p className="label-text mb-1">Rol</p>
                <p className="text-sm font-medium text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="label-text mb-1">Cliente</p>
                <p className="text-sm font-medium text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="label-text mb-1">Año</p>
                <p className="text-sm font-medium text-foreground">{project.year}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            
            <div className="relative group overflow-hidden rounded-xl mb-4">
              <img
                src={project.images[selectedImage] || project.image}
                alt={`${project.title} - imagen ${selectedImage + 1}`}
                className="w-full aspect-video object-cover transition-opacity duration-300" />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}
            </div>
            <div className="grid grid-cols-5 gap-3 mb-8">
              {project.images.slice(0, 5).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden transition-opacity duration-200 ${
                    selectedImage === index
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} - miniatura ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <Section label="01 — Problema" title="El Desafío" text={project.problem} />
          <Section label="02 — Investigación" title="Entendiendo a los Usuarios" text={project.research} />
          <Section label="03 — Proceso" title="Enfoque de Diseño" text={project.process} />
          <Section label="04 — Solución" title="El Diseño" text={project.solution} />
          <Section label="05 — Impacto" title="Resultados" text={project.impact} />
        </div>
      </div>
      <Footer />
    </>);

};

export default ProjectPage;