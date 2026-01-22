export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  ...props
}) {
  const baseStyles = `
    h-[40px]
    px-[24px] py-[10px]
    rounded-md
    text-sm font-medium
    inline-flex items-center gap-2
    border border-primary
    transition
    items-center
    hover:opacity-90
  `;

  const variants = {
    primary: `
      bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)]
      text-white
      shadow-lg shadow-sky-600/20
  
    `,
    outline: `
      border border-primary
      text-primary
      bg-transparent
      hover:bg-primary/10
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}

      {withArrow && (
        <span className="text-base transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
