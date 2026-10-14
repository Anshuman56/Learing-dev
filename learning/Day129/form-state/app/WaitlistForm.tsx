"use client";
import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "./action";

const initialState: WaitlistState = { status: "idle", message: "" };
export default function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );
  return (
    <>
      <form action={formAction}>
        <input name="email" type="email" required />
        <button type="submit" disabled={pending}>
          {pending ? "Joining..." : "Join waitlist"}
        </button>
        {state.status === "success" ? (
          <p className="text-green-500">{state.message}</p>
        ) : (
          <p className="text-red-500">{state.message}</p>
        )}
      </form>
    </>
  );
}
