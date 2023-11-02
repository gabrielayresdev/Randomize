import styles from "./App.module.sass";
import FlashCardSection from "./components/FlashCardSection";

function App() {
  return (
    <div className={styles.app}>
      <FlashCardSection />
    </div>
  );
}

export default App;
