"use server";
import { revalidatePath } from "next/cache";

let likes = 3;
export async function incrementLikes() {
  likes++;
  revalidatePath("/version-b");
}

export async function getLikes() {
  return likes;
}
