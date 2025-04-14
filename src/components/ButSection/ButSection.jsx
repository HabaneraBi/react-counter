import styles from "./ButSection.module.css";
import Button from "../Button/Button";

export default function ButSection({ setP }) {
  const decrement = () => {
    setP((prev) => (!prev ? prev : prev - 1));
  };

  const increment = () => {
    setP((prev) => prev + 1);
  };
  return (
    <section className={styles.secBut}>
      <Button onClick={decrement} className={"but-red"}>
        - Минус
      </Button>
      <Button onClick={increment} className={"but-green"}>
        Плюс +
      </Button>
    </section>
  );
}
