import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  // .run() - For insert or change
  // .get() - for get One Item
  await new Promise((res) => setTimeout(res, 2000)); // For Loading Porpose
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
