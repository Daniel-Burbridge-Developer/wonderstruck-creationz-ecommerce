export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className={"container flex min-h-72 bg-slate-600 text-white"}>
      HELLO THERE HOW ARE YOU TODAY: {photoId}
    </div>
  );
}
