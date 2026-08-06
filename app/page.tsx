"use client";

import { useState } from "react";

export default function Home() {
  const isDev = import.meta.env.DEV;
  const [unlocked, setUnlocked] = useState(isDev);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) {
    return (
      <main className="prototype-shell">
        <iframe
          src={isDev
            ? "./ewey-reference.html?v=dev-live-events-league-sentence&start=worldtype"
            : "./ewey-reference.html?v=fashion-3"}
          title="EWEy interactive prototype"
          allow="fullscreen"
        />
      </main>
    );
  }

  return (
    <main className="gate">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password.toLowerCase() === "angel") {
            setUnlocked(true);
            setError(false);
          } else {
            setError(true);
            setPassword("");
          }
        }}
      >
        <div className="logo">EWE<span>y</span></div>
        <p className="eyebrow">Private preview</p>
        <h1>Step inside.</h1>
        <p className="sub">Enter the password to experience EWEy.</p>
        <div className="gate-row">
          <input
            autoFocus
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
              setError(false);
            }}
            aria-invalid={error}
          />
          <button>Enter →</button>
        </div>
        {error && <p className="error" role="alert">Try that password again.</p>}
      </form>
    </main>
  );
}
