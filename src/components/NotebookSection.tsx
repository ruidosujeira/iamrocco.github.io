import { ReactNode } from "react";

interface NotebookSectionProps {
  children: ReactNode;
  annotation?: string;
  className?: string;
}

export function NotebookSection({ children, annotation, className = "" }: NotebookSectionProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Left margin line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] ml-8 md:ml-16" />
      
      {/* Top annotation */}
      {annotation && (
        <div className="absolute -top-6 left-12 md:left-20 text-[10px] text-white/20 tracking-wide font-mono">
          {annotation}
        </div>
      )}
      
      {/* Content with left padding to account for margin */}
      <div className="pl-16 md:pl-24 pr-8 md:pr-16">
        {children}
      </div>
    </section>
  );
}
