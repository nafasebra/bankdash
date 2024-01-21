import React from "react";

interface CardProps {
  supTitle: string;
  title: string;
  icon: React.ReactNode | React.ReactNode[];
  mainColor: string;
  mainColorAlpha: string;
  reverse: boolean;
}

function IconCard(props: CardProps) {
  const { icon, supTitle, title, mainColor, mainColorAlpha, reverse } = props;

  return (
    <div className="flex items-center gap-3 bg-white rounded-xl p-5">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${mainColorAlpha} ${mainColor}`}
      >
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      </div>
      <div className={`w-[calc(100%-3.75rem)] flex ${reverse ? "flex-col" : "flex-col-reverse"}`}>
        <p className="text-sm text-primary-400 leading-0">{supTitle}</p>
        <p className="text-xl font-semibold text-black leading-0">{title}</p>
      </div>
    </div>
  );
}

export default IconCard;
