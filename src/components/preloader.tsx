import { useEffect, useState } from "react";
import "./PreLoader.css";

interface PreLoaderProps {
  onComplete?: () => void;
}

export default function PreLoader({ onComplete }: PreLoaderProps) {
  const [step, setStep] = useState<"ready" | "happening" | "exit">("ready");

  useEffect(() => {
    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => setStep("happening"), 2000)
    );

    timers.push(
      window.setTimeout(() => setStep("exit"), 4000)
    );

    timers.push(
      window.setTimeout(() => onComplete?.(), 4800)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`pl-root ${step === "exit" ? "pl-exit" : ""}`}>
      {step === "ready" && (
        <h1 className="pl-text">
          It’s happening again!
        </h1>
      )}

      {step === "happening" && (
      <h1 className="pl-text">Are you ready?</h1>
      )}
    </div>
  );
}