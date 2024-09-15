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
      document.referrer && new URL(document.referrer).hostname !== window.location.hostname;

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
  <div className="bg-gradient-to-r from-slate-400 via-blue-500 to-blue-800 p-8 rounded-lg shadow-xl max-w-lg w-full text-center">
    <h2 className="text-3xl font-extrabold text-white mb-6">
      ✨ <span>IMPORTANT NOTICE</span> ✨
    </h2>
    <div className="flex flex-col text-lg text-white mb-6 py-4">
      <div><p>These items are not real products.</p></div><br/><div><p>This website serves as a portfolio piece to showcase and enhance my skills as a web developer & designer. While I reserve the right to use this platform for a real shop in the future.</p></div><br/><div><p>I apologize for any confusion. No purchases will be shipped.</p></div>
    </div>
    <button
      onClick={handleDismiss}
      className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      Understood
    </button>
  </div>
</div>

  );
};

export default Disclaimer;
