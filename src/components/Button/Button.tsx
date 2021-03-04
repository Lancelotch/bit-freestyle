import React from "react";

type GreetingProps = {
  text: string;
}

const Button:React.FC<GreetingProps> = ({ text }) => {
  return <button>{text}</button>
};

export default Button;