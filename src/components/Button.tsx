import React from "react";
import styles from "./Button.module.sass";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: VoidFunction;
}

const Button = ({ text, onClick, ...args }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick} {...args}>
      {text}
    </button>
  );
};

export default Button;
