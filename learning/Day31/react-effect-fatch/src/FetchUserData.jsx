import { useEffect, useState } from "react";

export default function FetchUserData() {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [repo, setRepo] = useState(null);
  const [repoLoading, setRepoLoadeing] = useState(true);
  const [repoError, setRepoError] = useState("");

  useEffect(() => {
    async function getRepo() {
      try {
        setRepoLoadeing(true);

        const response = await fetch(
          "https://api.github.com/users/octocat/repos",
        );
        if (!response.ok) {
          throw new Error("Failed to the fetch connection");
        }
        const data = await response.json();

        setRepo(data);
      } catch (err) {
        setRepoError(err.message);
      } finally {
        setRepoLoadeing(false);
      }
    }
    getRepo();
  }, []);

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

      {repo.length !== 0 ? (
        repo
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((item, index) => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description || "not given"}</p>
                <p>Language: {item.language || "not given"}</p>
                <p>{item.stargazers_count}</p>
              </div>
            );
          })
      ) : (
        <p>No repos found</p>
      )}
    </div>
  );
}
