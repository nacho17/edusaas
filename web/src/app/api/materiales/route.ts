import materiales from "@/content/materiales.json";

export async function GET() {
  return Response.json({
    ok: true,
    data: materiales,
  });
}
