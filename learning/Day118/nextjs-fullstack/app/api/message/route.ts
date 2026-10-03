import { dbConnect } from "@/lib/dbConnect";
import message from "@/lib/models/message";

export async function GET() {
  await dbConnect();
  const data = await message.find({});
  console.log(data);
  return Response.json(data);
}
