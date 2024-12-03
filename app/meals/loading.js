import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return (
    <div className={classes["loading-dots"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
