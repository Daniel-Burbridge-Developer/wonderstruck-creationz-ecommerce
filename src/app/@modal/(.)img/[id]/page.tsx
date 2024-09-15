import { getHeroImage } from "@/server/queries";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) {
    return (
      <div className={"container flex min-h-72 bg-slate-600 text-white"}>
        Invalid photo ID: {photoId}
      </div>
    );
  }

  const image = await getHeroImage(idAsNumber);

  return (
    <div>
      <Image src={image.url} alt={image.name} width={64} height={64} />
    </div>
  );
}
