import { ProtectedGate } from "@/components/ProtectedGate";
import materiales from "@/content/materiales.json";

type Material = {
  id: string;
  titulo: string;
  descripcion?: string;
  archivo: string;
};

export default function AlumnosPage() {
  return (
    <ProtectedGate>
      <main className="p-8">
        <h1 className="text-2xl font-semibold mb-6">
          Material de estudio
        </h1>

        <ul className="space-y-4">
          {(materiales as Material[]).map((m) => (
            <li key={m.id} className="border p-4 rounded">
              <h2 className="font-medium">{m.titulo}</h2>
              {m.descripcion && (
                <p className="text-sm text-gray-600 mb-2">
                  {m.descripcion}
                </p>
              )}
              <a
                href={m.archivo}
                target="_blank"
                className="text-blue-600 underline"
              >
                Abrir PDF
              </a>
            </li>
          ))}
        </ul>
      </main>
    </ProtectedGate>
  );
}
