import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export default function CTA({ to, children, variant = "primary", external }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles = {
    primary:
      "bg-cream-50 text-forest-800 hover:bg-white shadow-sm hover:shadow-md",
    ghost:
      "border border-cream-100/40 text-cream-100 hover:border-cream-100 hover:bg-white/10",
  } as const;

  const content = (
    <>
      {children}
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7.05 4.05a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.05 5.464a1 1 0 010-1.414z" />
      </svg>
    </>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]}`}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {content}
    </Link>
  );
}
