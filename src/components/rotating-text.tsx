import { useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";

const phrases = [
  "Venez sympa comme vous êtes.",
  "Jouer et apprendre !",
  "Encore une dernière ?",
  "L’aqua-poney peut attendre.",
];

export function RotatingText() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="rotating-line" data-paused={paused}>
      <span className="sr-only">
        Venez sympa comme vous êtes. Jouer et apprendre !
      </span>
      <div className="rotating-words" aria-hidden="true">
        {phrases.map((phrase, index) => (
          <span key={phrase} style={{ "--word-index": index } as CSSProperties}>
            {phrase}
          </span>
        ))}
      </div>
      <button
        className="rotation-control"
        type="button"
        aria-label={
          paused
            ? "Reprendre le texte défilant"
            : "Mettre le texte défilant en pause"
        }
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </div>
  );
}
