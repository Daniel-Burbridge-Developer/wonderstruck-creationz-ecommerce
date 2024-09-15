import { db } from "./db";

export async function getHeroImages() {
  return await db.query.heroImages.findMany();
}
