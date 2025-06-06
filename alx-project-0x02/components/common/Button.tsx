import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-teal-600 text-white hover:bg-teal-700 ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
};

export default Button;
