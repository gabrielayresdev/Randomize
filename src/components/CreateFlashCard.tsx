import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useFlashcardsContext } from "../contexts/FlashcardsContext";
import styles from "./CreateFlashCard.module.sass";

const CreateFlashCard = () => {
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");
  const { addFlashcard } = useFlashcardsContext();

  return (
    <div className={styles.createFlashcard}>
      <Input value={key} setValue={setKey} placeholder="Escreva sua pergunta" />
      <Input value={value} setValue={setValue} />
      <Button
        text="Criar flashcard"
        onClick={() => {
          addFlashcard(key, value);
        }}
      />
    </div>
  );
};

export default CreateFlashCard;
