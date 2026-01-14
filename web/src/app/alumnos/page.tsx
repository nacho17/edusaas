import { ProtectedGate } from "@/components/ProtectedGate";

async function getMateriales() {
  const res = await fetch("http://localhost:3000/api/materiales", {
    cache: "no-store",
  });

  const json = await res.json();
  return json.data ?? [];
}

export default async function AlumnosPage() {
  const materiales = await getMateriales();

  return (
    <ProtectedGate>
      <main className="p-8">
        <h1 className="text-2xl font-semibold mb-6">
          Material de estudio
        </h1>

        <ul className="space-y-4">
          {materiales.map((m: any) => (
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
