import Card from "../components/Card/Card";
import styles from "./page.module.css";

const cards = [
  { letter: "A", word: "Abeja", color: "yellow" },
  { letter: "B", word: "Ballena", color: "blue" },
  { letter: "C", word: "Casa", color: "pink" },
  { letter: "D", word: "Dulce", color: "purple" },
  { letter: "E", word: "Elefante", color: "gray" },
  { letter: "F", word: "Flor", color: "yellow" },
  { letter: "G", word: "Gato", color: "gray" },
  { letter: "H", word: "Helado", color: "pink" },
  { letter: "I", word: "Iguana", color: "green" },
  { letter: "J", word: "Jirafa", color: "yellow" },
  { letter: "K", word: "Koala", color: "gray" },
  { letter: "L", word: "León", color: "orange" },
  { letter: "M", word: "Mono", color: "brown" },
  { letter: "N", word: "Nube", color: "blue" },
  { letter: "O", word: "Oso", color: "brown" },
  { letter: "P", word: "Perro", color: "yellow" },
  { letter: "Q", word: "Queso", color: "yellow" },
  { letter: "R", word: "Ratón", color: "gray" },
  { letter: "S", word: "Sandía", color: "red" },
  { letter: "T", word: "Tortuga", color: "green" },
  { letter: "U", word: "Uva", color: "purple" },
  { letter: "V", word: "Vaca", color: "gray" },
  { letter: "W", word: "Wafle", color: "brown" },
  { letter: "X", word: "Xilófono", color: "blue" },
  { letter: "Y", word: "Yogurth", color: "pink" },
  { letter: "Z", word: "Zorro", color: "orange" },
];

export default function PruebaFuentesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Card
            key={card.letter}
            letter={card.letter}
            lowercase={card.letter.toLowerCase()}
            word={card.word}
            image={`/images/${card.letter}.png`}
            color={card.color}
          />
        ))}
      </div>
    </main>
  );
}