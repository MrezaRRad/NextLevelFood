import { resolve } from "styled-jsx/css";

const Database = require("better-sqlite3");
const db = new Database("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM meals").all();
}
