import React from "react";
import PlayButton from "./PlayButton";
import { useFlashcardsContext } from "../contexts/FlashcardsContext";
import FlashCard from "./FlashCard";
import styles from "./FlashCardSection.module.sass";
import CreateFlashCard from "./CreateFlashCard";
import nextArrow from "/src/assets/chevron-right-solid.svg";

const FlashCardSection = () => {
  const [index, setIndex] = React.useState<number>(-1);
  const { Flashcards } = useFlashcardsContext();
  function randomize() {
    const size = Flashcards.length;
    let newIndex = Math.floor(Math.random() * size);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * size);
    }

    setIndex(newIndex);
  }

  return (
    <div className={styles.container}>
      <CreateFlashCard />
      {index === -1 ? (
        <PlayButton onClick={() => randomize()} />
      ) : (
        <div className={styles.flashcards}>
          <FlashCard data={Flashcards[index]} />
          <button className={styles.next} onClick={() => randomize()}>
            <img src={nextArrow} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashCardSection;
