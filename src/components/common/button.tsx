import { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-gray-dark px-5 py-3 font-bold shadow-md transition-colors  hover:text-green-light hover:shadow-lg active:text-green active:shadow-sm">
      {children}
    </button>
  );
};

export default Button;
