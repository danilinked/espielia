const Footer = () => {
  return (
    <footer className="py-8 section-padding border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} espielia — Elia Espinosa. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Dribbble", "Behance"].map((s) => (
            <a key={s} href="#" className="nav-link text-xs">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
