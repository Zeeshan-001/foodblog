import Link from "next/link";
import classes from "./page.module.css";
import ImageSlider from "@/components/images/image-slider";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlider />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Genuss auf höchstem Niveau – für alle, die mehr wollen</h1>
            <p>Kosten und teilen Sie Gerichte aus aller Welt.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Werden Sie Teil der Community</Link>
            <Link href="/meals">Entdecken Sie Gerichte</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>So funktioniert's</h2>
          <p>
            NextLevel Food ist eine Plattform für Foodies, um ihre
            Lieblingsrezepte mit der Welt zu teilen. Es ist ein Ort, um neue
            Gerichte zu entdecken und sich mit anderen Liebhabern guter Küche zu
            vernetzen.
          </p>
          <p>
            NextLevel Food ist ein Ort, um neue Gerichte zu entdecken und sich
            mit anderen Food-Liebhabern auszutauschen.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Warum NextLevel Food?</h2>
          <p>
            NextLevel Food ist eine Plattform für Foodies, um ihre
            Lieblingsrezepte mit der Welt zu teilen. Es ist ein Ort, um neue
            Gerichte zu entdecken und sich mit anderen Liebhabern guter Küche zu
            vernetzen.
          </p>
          <p>
            NextLevel Food ist ein Ort, um neue Gerichte zu entdecken und sich
            mit anderen Food-Liebhabern auszutauschen.
          </p>
        </section>
      </main>
    </>
  );
}
