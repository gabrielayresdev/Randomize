import React from "react";
import styles from "./FlashCard.module.sass";

interface IFlashcard {
  data: Record<string, string>;
}

const FlashCard = ({ data }: IFlashcard) => {
  const [blur, setBlur] = React.useState(true);
  console.log("Data: ", data);
  const key = Object.keys(data)[0];
  const value = data[key];

  React.useEffect(() => {
    setBlur(true);
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.key}>{key}</div>
      <div
        className={`${styles.value} ${blur ? styles.blur : styles.visible}`}
        onClick={() => setBlur(false)}
      >
        <p>{value}</p>
      </div>
    </div>
  );
};

export default FlashCard;
