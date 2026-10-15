import styles from "./page.module.css";

import Container from "./components/Container/Container";
import Stack from "./components/Stack/Stack";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Container size="xl">
        <Stack gap="md" align="center" justify="center">
          <h1 className={styles.title}>
            Aprender a leer
          </h1>

          <Card
            letter="A"
            lowercase="a"
            word="Abeja"
            image="/images/A.png"
            color="yellow"
          />

          <Button className={styles.startButton}>
            Comenzar
          </Button>
        </Stack>
      </Container>
    </main>
  );
}