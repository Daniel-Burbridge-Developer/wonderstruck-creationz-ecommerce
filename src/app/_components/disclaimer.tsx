"use client";
// components/Disclaimer.js
import { useEffect, useState } from "react";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the disclaimer was already shown in the current session
    const hasSeenDisclaimer = sessionStorage.getItem("hasSeenDisclaimer");

    // Check if the referrer is external
    const isExternalReferrer =
      document.referrer &&
      new URL(document.referrer).hostname !== window.location.hostname;

    // Show the disclaimer if it's the user's first visit of the session or if coming from an external URL
    if (!hasSeenDisclaimer && (isExternalReferrer || !document.referrer)) {
      setIsOpen(true);
    }
  }, []);

  // Handle dismissing the disclaimer
  const handleDismiss = () => {
    sessionStorage.setItem("hasSeenDisclaimer", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-lg rounded-lg bg-gradient-to-r from-slate-400 via-blue-500 to-blue-800 p-8 text-center shadow-xl">
        <h2 className="mb-6 text-3xl font-extrabold text-white">
          ✨ <span>IMPORTANT NOTICE</span> ✨
        </h2>
        <div className="mb-6 flex flex-col py-4 text-lg text-white">
          <div>
            <p>
              These items are{" "}
              <span className="font-extrabold text-red-600">
                not real products
              </span>
              .
            </p>
          </div>
          <br />
          <div>
            <p>
              This website serves as a portfolio piece to showcase and enhance
              my skills as a web developer & designer. While I reserve the right
              to use this platform for a real shop in the future.
            </p>
          </div>
          <br />
          <div>
            <p>
              I apologize for any confusion.{" "}
              <span className="font-extrabold text-red-600">
                No purchases will be shipped.
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="transform rounded-lg bg-white px-6 py-3 font-bold text-black shadow-md transition-transform hover:scale-105 hover:bg-gray-200"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
