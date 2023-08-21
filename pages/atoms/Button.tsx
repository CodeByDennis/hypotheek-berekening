import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  colorClass: string;
  icon?: string; // Nieuwe prop voor icoon
}

const Button = ({ onClick, label, colorClass, icon }: ButtonProps) => {
  const colorVariants: any = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
    zinc: "bg-zinc-600 hover:bg-zinc-500",
  };
  return (
    <button
      onClick={onClick}
      className={`${colorVariants[colorClass]} text-white font-bold py-2 px-4 rounded flex items-center`}>
      {icon && <span className="mr-2">{icon === "plus" ? "+ " : ""}</span>}
      {label}
    </button>
  );
};

export default Button;
