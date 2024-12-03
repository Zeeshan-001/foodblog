"use client";
import { useFormStatus } from "react-dom";
function MealsFormSubmit() {
  //   const status = useFormStatus();
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "submitting" : "Gerichtteilen"}
    </button>
  );
}

export default MealsFormSubmit;
