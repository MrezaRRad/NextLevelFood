const Database = require("better-sqlite3");
const db = new Database("meals.db");

export function getMeals() {
  const stmt = db.prepare("SELECT * FROM meals").all();

  return stmt;
}
