import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="button px-4 py-1 text-sm md:px-6 md:py-2">{text}</button>
  );
};

export default Button;
