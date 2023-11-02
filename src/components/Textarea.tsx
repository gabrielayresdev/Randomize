import React from "react";
import styles from "./Textarea.module.sass";

interface ITextarea extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Textarea = ({ value, setValue }: ITextarea) => {
  return (
    <textarea
      value={value}
      onChange={({ target }) => setValue(target.value)}
      className={styles.textarea}
    />
  );
};

export default Textarea;
