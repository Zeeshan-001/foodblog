"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// Input Validation
const InputValidation = (text) => {
  return text.trim() === "" || !text;
};

// Get Data From Input-Form
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validations
  if (
    InputValidation(meal.title) ||
    InputValidation(meal.summary) ||
    InputValidation(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return {
      message: "Ungültige Eingabe",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout"); // Cache revalidation
  redirect("/meals");
}
