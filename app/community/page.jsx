import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Eine gemeinsame Leidenschaft:{" "}
          <span className={classes.highlight}>Essen</span>
        </h1>
        <p>Werde Teil unserer Community und teile deine Lieblingsrezepte!</p>
      </header>
      <main className={classes.main}>
        <h2>Vorteile der Community</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Ein leckeres Gericht" />
            <p>Rezepte teilen & entdecken</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="Eine Gruppe von Menschen, die kochen"
            />
            <p>Neue Freunde & Gleichgesinnte finden</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Eine Gruppe von Menschen bei einer Kochveranstaltung"
            />
            <p>An exklusiven Events teilnehmen</p>
          </li>
        </ul>
      </main>
    </>
  );
}
