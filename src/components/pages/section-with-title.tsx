import React from "react";

interface SectionProps {
  className?: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  container: boolean;
}

function SectionWithTitle(props: SectionProps) {
  const { children, title, className, container } = props;

  return (
    <section className={`flex flex-col gap-5 ${className || ""}`}>
      <h2 className="flex items-center text-2xl font-semibold text-primary-200">
        {title}
      </h2>
      <div
        className={`${
          container ? "bg-white p-5 overflow-hidden rounded-lg" : ""
        } space-y-5`}
      >
        {children}
      </div>
    </section>
  );
}

SectionWithTitle.defaultProps = {
  container: true,
};

export default SectionWithTitle;
