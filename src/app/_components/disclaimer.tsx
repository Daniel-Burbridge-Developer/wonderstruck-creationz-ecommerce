"use client";
// components/Disclaimer.js
import { useEffect, useState } from "react";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the referrer is external
  useEffect(() => {
    const isExternalReferrer =
      document.referrer && new URL(document.referrer).hostname !== window.location.hostname;

    if (isExternalReferrer) {
      setIsOpen(true);
    }
  }, []);

  // Handle dismissing the disclaimer
  const handleDismiss = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">
          This is a disclaimer message. Please read and accept to continue using the website.
        </p>
        <button
          onClick={handleDismiss}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
