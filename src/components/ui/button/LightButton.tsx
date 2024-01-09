import React, { ButtonHTMLAttributes } from "react";

interface LightButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

function LightButton(props: LightButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`bg-light rounded-full min-w-[52px] h-[52px] flex items-center justify-center gap-3 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default LightButton;
