// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon, or use any other

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showBtn && (
        <button
          onClick={handleClick}
          className="p-2 animate-pulse   rounded-full bg-amber-600 text-white shadow-2xl shadow-blue-400 hover:bg-amber-700 transition-all"
        >
          <ArrowUp className="w-10 h-10" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
