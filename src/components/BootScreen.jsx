import { useEffect, useRef, useState } from "react";
import { player } from "../data/player";
import Crest from "./Crest";

export default function BootScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const onDoneRef = useRef(onDone);
  const finished = useRef(false);
  onDoneRef.current = onDone;

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    try {
      sessionStorage.setItem("fiche-kickoff", "1");
    } catch {
      /* navigation privée : on entre quand même */
    }
    onDoneRef.current();
  };

  useEffect(() => {
    let frame = 0;
    let timer = 0;
    const start = performance.now();
    const duration = 2100;

    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / duration);
      setProgress(Math.round(ratio * 100));
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timer = window.setTimeout(finish, 180);
      }
    };

    frame = requestAnimationFrame(tick);
    const onKey = () => finish();
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
    // L'animation ne doit démarrer qu'une fois.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      className={`boot${leaving ? " is-out" : ""}`}
      type="button"
      onClick={finish}
      aria-label="Passer l'introduction"
    >
      <span className="boot-glow" aria-hidden="true" />
      <span className="boot-ring" aria-hidden="true" />
      <span className="boot-ring boot-ring-late" aria-hidden="true" />
      <Crest size={84} />
      <p className="boot-kicker">Fiche joueur</p>
      <p className="boot-name">
        <span>{player.firstName}</span>
        <span>{player.lastName}</span>
      </p>
      <p className="boot-role">{player.role}</p>
      <p className="boot-count" aria-hidden="true">
        {progress}
      </p>
      <span
        className="boot-bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span style={{ width: `${progress}%` }} />
      </span>
      <span className="boot-skip">Cliquer ou appuyer pour entrer</span>
    </button>
  );
}
