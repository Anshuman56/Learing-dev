"use server";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function joinWaitlist(
  prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const email = formData.get("email");
  console.log(email);
  if (typeof email !== "string" || email.trim() === "") {
    return {
      status: "error",
      message: "You can't submit an empty email.",
    };
  }

  if (!email.includes("@")) {
    return {
      status: "error",
      message: "It's not a valid email.",
    };
  }
  return { status: "success", message: "Thanks! We’ll be in touch" };
}
