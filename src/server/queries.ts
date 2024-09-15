import { db } from "./db";

export async function getHeroImages() {
  return await db.query.heroImages.findMany();
}

export async function getHeroImage(id: number) {
  const image = await db.query.heroImages.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");

  return image;
}
