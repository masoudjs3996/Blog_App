import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const btnType: Record<ButtonVariant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
