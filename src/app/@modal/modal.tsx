"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed flex h-screen w-screen items-center justify-center bg-black/90"
      onClose={onDismiss}
    >
      <div className="relative flex h-3/5 w-3/5 flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        {children}
        <button
          onClick={onDismiss}
          className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-700"
        />
      </div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
