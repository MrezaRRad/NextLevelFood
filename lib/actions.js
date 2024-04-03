"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function handleSubmitForm(formData) {
  const newMeal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(newMeal);

  redirect("/meals");
}
