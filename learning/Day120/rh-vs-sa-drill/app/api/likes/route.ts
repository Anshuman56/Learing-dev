let likes = 4;
export async function GET() {
  return Response.json({ likes });
}

export async function POST() {
  likes++;
  return Response.json({ likes });
}
