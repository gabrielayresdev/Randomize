import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type IFlashcard = Record<string, string>[];

interface IFlashcardsContext {
  Flashcards: IFlashcard;
  addFlashcard: (key: string, value: string) => void;
}

const FlashCardsContext = React.createContext<IFlashcardsContext | null>(null);

export function useFlashcardsContext() {
  const context = React.useContext(FlashCardsContext);
  if (!context) throw new Error("Context must be used inside provider");
  return context;
}

const FlashcardsContextProvider = ({ children }: React.PropsWithChildren) => {
  const { state: Flashcards, setState: setFlashcards } =
    useLocalStorage<IFlashcard>(
      "flashcards",
      [],
      (value) => {
        return JSON.parse(value);
      },
      (value) => {
        return JSON.stringify(value);
      }
    );
  console.log(Flashcards);

  function addFlashcard(key: string, value: string) {
    const newCard = { [key]: value };
    if (Flashcards) setFlashcards([...Flashcards, newCard]);
    else setFlashcards([newCard]);
  }
  return (
    <FlashCardsContext.Provider value={{ Flashcards, addFlashcard }}>
      {children}
    </FlashCardsContext.Provider>
  );
};

export default FlashcardsContextProvider;
