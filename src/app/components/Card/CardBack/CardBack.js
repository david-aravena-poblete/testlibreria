import styles from "../Card.module.css";

export default function CardBack({ letter = "A" }) {
  return (
    <span className={styles.card__backLetter}>
      {letter}
    </span>
  );
}