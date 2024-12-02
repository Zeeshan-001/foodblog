import classes from "./page.module.css";

export default function TeilenMahlzeitSeite() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Teile dein <span className={classes.highlight}>Lieblingsgericht</span>
        </h1>
        <p>Oder ein anderes Gericht, das du teilen möchtest!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Dein Name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Deine E-Mail</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Titel</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Kurze Zusammenfassung</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Anleitung</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          BILDAUSWAHL
          <p className={classes.actions}>
            <button type="submit">Gericht teilen</button>
          </p>
        </form>
      </main>
    </>
  );
}
