import React from "react";

interface SectionProps {
  className?: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function SectionWithTitle(props: SectionProps) {
  const { children, title, className } = props;

  return (
    <section className={`flex flex-col gap-5 ${className || ""}`}>
      <h2 className="flex items-center text-2xl font-semibold text-primary-200">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionWithTitle;
