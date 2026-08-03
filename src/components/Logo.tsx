interface LogoProps {
  size?: number;
  className?: string;
  withWordmark?: boolean;
}

export const Logo = ({ size = 32, className = "", withWordmark = false }: LogoProps) => {
  const height = size;
  const monogramWidth = size * 1.4;

  return (
    <span className={`inline-flex items-center gap-2.5 text-foreground ${className}`}>
      <svg
        width={monogramWidth}
        height={height}
        viewBox="0 0 56 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 4 L5 36 M5 4 L22 4 M5 20 L18 20 M5 36 L22 36" />
        <path d="M51 4 L51 36 M51 4 L34 4 M51 20 L38 20 M51 36 L34 36" />
      </svg>
      {withWordmark && (
        <span className="text-lg font-bold tracking-tight lowercase">espielia</span>
      )}
    </span>
  );
};
