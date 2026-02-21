import { useState } from "react";

const VeggiesSVG = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-xs mx-auto" aria-label="Kumpulan sayuran segar">
    {/* Wortel */}
    <g transform="translate(40, 60)">
      <polygon points="20,20 30,100 10,100" fill="hsl(25, 85%, 55%)" />
      <polygon points="20,20 30,100 10,100" fill="hsl(25, 85%, 58%)" opacity="0.6" />
      <path d="M15,25 Q20,0 25,25" fill="hsl(142, 50%, 45%)" />
      <path d="M10,28 Q15,-5 20,28" fill="hsl(142, 50%, 40%)" />
      <path d="M20,28 Q25,-5 30,28" fill="hsl(142, 50%, 50%)" />
      <line x1="15" y1="50" x2="25" y2="50" stroke="hsl(25, 70%, 48%)" strokeWidth="1" opacity="0.4" />
      <line x1="14" y1="65" x2="26" y2="65" stroke="hsl(25, 70%, 48%)" strokeWidth="1" opacity="0.3" />
    </g>
    {/* Tomat */}
    <g transform="translate(130, 70)">
      <ellipse cx="30" cy="35" rx="32" ry="30" fill="hsl(350, 70%, 50%)" />
      <ellipse cx="30" cy="35" rx="32" ry="30" fill="hsl(350, 65%, 55%)" opacity="0.5" />
      <ellipse cx="22" cy="28" rx="8" ry="5" fill="hsl(350, 60%, 62%)" opacity="0.4" />
      <path d="M25,8 Q30,0 35,8 Q40,2 38,10 Q32,6 28,12 Q22,5 25,8Z" fill="hsl(142, 50%, 40%)" />
    </g>
    {/* Bayam / Daun */}
    <g transform="translate(210, 50)">
      <ellipse cx="25" cy="50" rx="18" ry="35" fill="hsl(142, 55%, 42%)" transform="rotate(-10, 25, 50)" />
      <ellipse cx="25" cy="50" rx="18" ry="35" fill="hsl(142, 50%, 48%)" opacity="0.5" transform="rotate(10, 25, 50)" />
      <line x1="25" y1="20" x2="25" y2="90" stroke="hsl(142, 40%, 35%)" strokeWidth="2" />
      <line x1="25" y1="40" x2="15" y2="35" stroke="hsl(142, 40%, 35%)" strokeWidth="1" />
      <line x1="25" y1="55" x2="35" y2="48" stroke="hsl(142, 40%, 35%)" strokeWidth="1" />
      <line x1="25" y1="70" x2="18" y2="65" stroke="hsl(142, 40%, 35%)" strokeWidth="1" />
    </g>
    {/* Kubis */}
    <g transform="translate(85, 120)">
      <circle cx="25" cy="25" r="22" fill="hsl(120, 35%, 65%)" />
      <circle cx="25" cy="25" r="22" fill="hsl(120, 40%, 72%)" opacity="0.5" />
      <path d="M10,20 Q25,5 40,20" fill="none" stroke="hsl(120, 30%, 55%)" strokeWidth="1.5" />
      <path d="M12,30 Q25,18 38,30" fill="none" stroke="hsl(120, 30%, 55%)" strokeWidth="1" />
    </g>
  </svg>
);

const ZonkVeggiesSVG = () => (
  <svg viewBox="0 0 200 180" className="w-full max-w-[200px] mx-auto" aria-label="Sayuran segar">
    {/* Wortel santai */}
    <g transform="translate(30, 30) rotate(-15, 40, 60)">
      <polygon points="25,15 35,100 15,100" fill="hsl(25, 85%, 58%)" />
      <path d="M18,20 Q25,-5 32,20" fill="hsl(142, 50%, 45%)" />
      <path d="M22,18 Q28,-8 35,18" fill="hsl(142, 50%, 50%)" />
    </g>
    {/* Tomat santai */}
    <g transform="translate(100, 60)">
      <ellipse cx="35" cy="40" rx="35" ry="33" fill="hsl(350, 65%, 55%)" />
      <ellipse cx="28" cy="32" rx="9" ry="6" fill="hsl(350, 55%, 65%)" opacity="0.4" />
      <path d="M28,10 Q35,0 42,10 Q48,3 45,14 Q38,8 32,15 Q26,6 28,10Z" fill="hsl(142, 50%, 40%)" />
    </g>
  </svg>
);

const FloatingVeggie = ({ emoji, style }: { emoji: string; style: React.CSSProperties }) => (
  <span
    className="absolute text-2xl md:text-3xl opacity-20 pointer-events-none select-none animate-bounce"
    style={style}
  >
    {emoji}
  </span>
);

const Index = () => {
  const [isLucky, setIsLucky] = useState(true);

  const toggle = () => setIsLucky((prev) => !prev);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 transition-all duration-700 ease-in-out relative overflow-hidden"
      style={{
        background: isLucky
          ? "linear-gradient(135deg, hsl(120, 45%, 85%), hsl(0, 0%, 100%))"
          : "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(350, 50%, 90%))",
      }}
    >
      {/* Floating decorative veggies */}
      <FloatingVeggie emoji="🥕" style={{ top: "10%", left: "8%", animationDelay: "0s", animationDuration: "3s" }} />
      <FloatingVeggie emoji="🍅" style={{ top: "20%", right: "10%", animationDelay: "0.5s", animationDuration: "3.5s" }} />
      <FloatingVeggie emoji="🥬" style={{ bottom: "15%", left: "12%", animationDelay: "1s", animationDuration: "4s" }} />
      <FloatingVeggie emoji="🥦" style={{ bottom: "25%", right: "8%", animationDelay: "1.5s", animationDuration: "3.2s" }} />
      <FloatingVeggie emoji="🌽" style={{ top: "50%", left: "5%", animationDelay: "0.8s", animationDuration: "3.8s" }} />
      <FloatingVeggie emoji="🥒" style={{ top: "40%", right: "5%", animationDelay: "0.3s", animationDuration: "4.2s" }} />

      <div
        className="w-full max-w-md text-center rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-500 ease-in-out relative z-10"
        style={{
          backgroundColor: isLucky ? "hsla(120, 40%, 97%, 0.9)" : "hsla(30, 70%, 97%, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Content transitions */}
        <div
          key={isLucky ? "lucky" : "zonk"}
          className="animate-fade-in"
        >
          {isLucky ? (
            <>
              <div className="text-5xl mb-4">🎉</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-veggie-green-dark tracking-tight">
                SELAMAT! ANDA BERUNTUNG!
              </h1>
              <VeggiesSVG />
              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                Sayuran segar adalah pilihan terbaik untuk kesehatanmu! 🥗
              </p>
            </>
          ) : (
            <>
              <div className="text-5xl mb-4">😊</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-veggie-tomato tracking-tight">
                MAAAF, COBA LAGI YA!
              </h1>
              <ZonkVeggiesSVG />
              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                Tetap konsumsi sayuran segar ya, coba lagi untuk hasil yang berbeda! 🌿
              </p>
            </>
          )}

          <button
            onClick={toggle}
            className="mt-6 px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: isLucky ? "hsl(142, 50%, 40%)" : "hsl(350, 65%, 55%)",
              color: "white",
              boxShadow: isLucky
                ? "0 4px 14px hsla(142, 50%, 40%, 0.4)"
                : "0 4px 14px hsla(350, 65%, 55%, 0.4)",
            }}
          >
            🔄 COBA LAGI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
