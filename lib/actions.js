"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function handleSubmitForm(prevStat, formData) {
  const newMeal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(newMeal.title) ||
    isInvalidText(newMeal.creator) ||
    isInvalidText(newMeal.creator_email) ||
    isInvalidText(newMeal.instructions) ||
    isInvalidText(newMeal.summary) ||
    !newMeal.creator_email.includes("@") ||
    !newMeal.image ||
    newMeal.image.size === 0
  ) {
    return {
      message: "Invalid input....",
    };
  }

  await saveMeal(newMeal);

  revalidatePath("/meals", "");

  redirect("/meals");
}
