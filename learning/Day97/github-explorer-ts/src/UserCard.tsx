import type { ReactNode } from "react";
import type { GitHubUser } from "./type";

export default function UserCard({ user }: { user: GitHubUser }): ReactNode {
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}
