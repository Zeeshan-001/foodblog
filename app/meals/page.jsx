import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";

// Get Meals
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Leckere Gerichte, erstellt
          <spna className={classes.highlight}> von dir</spna>
        </h1>

        <p>
          Wähle dein Lieblingsrezept aus und koche es selbst. Es ist einfach und
          macht Spaß!
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share">Teile dein Lieblingsrezept</Link>
        </p>
      </header>

      {/* All Meals Show on Meals Page with Loading */}
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading . . .</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
