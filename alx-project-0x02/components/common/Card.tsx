import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm">
      <h2 className="text-xl font-semibold mb-2 text-green-800">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
