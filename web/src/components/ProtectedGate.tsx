"use client";

import { useState } from "react";

export function ProtectedGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [code, setCode] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState(false);

  const submit = () => {
    if (code === process.env.NEXT_PUBLIC_STUDENT_CODE) {
      setAllowed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (allowed) return <>{children}</>;

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Acceso para estudiantes
      </h2>

      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código de acceso"
        className="border p-2 w-full mb-2"
      />

      {error && (
        <p className="text-red-600 text-sm mb-2">
          Código incorrecto
        </p>
      )}

      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2"
      >
        Ingresar
      </button>
    </div>
  );
}
