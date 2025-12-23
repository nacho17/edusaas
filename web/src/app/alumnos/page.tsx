import { ProtectedGate } from "@/components/ProtectedGate";

export default function AlumnosPage() {
  return (
    <ProtectedGate>
      <main className="p-8">
        <h1 className="text-2xl font-semibold mb-2">
          Material para estudiantes
        </h1>
        <p>
          Este contenido es de acceso restringido.
        </p>
      </main>
    </ProtectedGate>
  );
}
