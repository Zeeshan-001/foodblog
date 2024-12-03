import fs from "fs";
import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";

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

// Save Data in Database
// npm i slugify xss
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extention = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extention}}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed");
    }
  });

  meal.image = `/images/${fileName}`;
  // Prepare the SQL query for inserting data into the "meals" table
  const statement = db.prepare(`
  INSERT INTO meals (
    title, 
    summary, 
    instructions, 
    creator, 
    creator_email, 
    image, 
    slug
  ) VALUES (
    @title, 
    @summary, 
    @instructions, 
    @creator, 
    @creator_email, 
    @image, 
    @slug
  )
`);

  // Safely execute the query with the provided "meal" data
  try {
    statement.run(meal);
    console.log("Meal successfully inserted into the database.");
  } catch (error) {
    console.error("Error inserting meal into the database:", error.message);
  }
}
