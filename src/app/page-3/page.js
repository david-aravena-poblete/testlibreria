import styles from "./page.module.css";

import Container from "../components/Container/Container";
import Stack from "../components/Stack/Stack";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

export default function LearningPage() {
  return (
    <main className={styles.page}>
      <Container size="md">
        <Stack gap="md" align="center">
        <Grid
          columns={{ mobile: 1, tablet: 2, desktop: 2 }}
          gap={{ mobile: "sm", tablet: "md", desktop: "md" }}
          minItemWidth="0px"
          alignItems="center"
          justifyItems="center"
          className={styles.cardsGrid}
          >
            <Card
              letter="A"
              lowercase="a"
              word="Abeja"
              image="/images/A.png"
              color="yellow"
            />

            <Card
              letter="B"
              lowercase="b"
              word="Ballena"
              image="/images/B.png"
              color="blue"
            />
          </Grid>

          <div className={styles.buttonContainer}>
            <Button>Continuar</Button>
          </div>
        </Stack>
      </Container>
    </main>
  );
}