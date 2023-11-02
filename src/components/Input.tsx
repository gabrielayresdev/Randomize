import React from "react";
import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ value, setValue, ...args }: IInput) => {
  return (
    <input
      type="text"
      value={value}
      onChange={({ target }) => setValue(target.value)}
      className={styles.input}
      {...args}
    />
  );
};

export default Input;
