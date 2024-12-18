"use client";

import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";
import ImagePicker from "@/components/meals/image-picker";
import { useFormState } from "react-dom";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

// ShareMealPage(formData)
export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Teile dein <span className={classes.highlight}>Lieblingsgericht</span>
        </h1>
        <p>Oder ein anderes Gericht, das du teilen möchtest!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          {/* Name & E-Mail */}
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

          <ImagePicker name="image" />

          <p className={classes.actions}>
            {state.message && <p> {state.message}</p>}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
