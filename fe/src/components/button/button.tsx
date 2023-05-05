import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({children, className, ...buttonProps}) => {
  return (
    <button className={`bg-red-300 px-2 py-1 rounded ${className}`} {...buttonProps}>{children}</button>
  )
}

export default Button;
