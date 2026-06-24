import { useEffect, useState } from "react";

export default function FetchUserData() {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        setLoding(true);

        const response = await fetch("https://api.github.com/users/octoca");
        if (!response.ok) {
          throw new Error("Failed to the fetch connection");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoding(false);
      }
    }
    getUser();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (loding) {
    return <h1>Loding..</h1>;
  }
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="150" />

      <h1>{user.name}</h1>
      <h2>@{user.login}</h2>

      <p>{user.bio}</p>

      <p>
        <strong>Public Repositories:</strong> {user.public_repos}
      </p>

      <p>
        <strong>Followers:</strong> {user.followers}
      </p>
    </div>
  );
}
