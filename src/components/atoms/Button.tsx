import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Menggunakan tipe bawaan React untuk children
  className?: string; // Optional, dengan default value
  type?: "button" | "submit" | "reset"; // Optional, dengan default value
}

const Button: React.FC<ButtonProps> = ({ children, className = "button", type = "button" }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
