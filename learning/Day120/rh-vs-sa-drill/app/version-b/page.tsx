import { getLikes, incrementLikes } from "../action";

export default async function Page() {
  const likes = getLikes();
  return (
    <>
      <h2>You get likes {likes}</h2>
      <form action={incrementLikes}>
        <button type="submit">Likes</button>
      </form>
    </>
  );
}
