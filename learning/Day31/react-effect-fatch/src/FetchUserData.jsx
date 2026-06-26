import { useState } from "react";

export default function FetchUserData() {
  const [username, setUsername] = useState("");

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const [userLoading, setUserLoading] = useState(false);
  const [repoLoading, setRepoLoading] = useState(false);

  const [userError, setUserError] = useState("");
  const [repoError, setRepoError] = useState("");

  async function searchUser() {
    if (!username.trim()) return;

    setUser(null);
    setRepos([]);
    setUserError("");
    setRepoError("");

    try {
      setUserLoading(true);

      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setUserError(error.message);
    } finally {
      setUserLoading(false);
    }

    try {
      setRepoLoading(true);

      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data = await response.json();

      const sortedRepos = data.sort(
        (a, b) => b.stargazers_count - a.stargazers_count,
      );

      setRepos(sortedRepos);
    } catch (error) {
      setRepoError(error.message);
    } finally {
      setRepoLoading(false);
    }
  }

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      <hr />

      {userLoading ? (
        <p>Loading user...</p>
      ) : userError ? (
        <p>{userError}</p>
      ) : (
        user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width="150" />

            <h2>{user.name}</h2>
            <p>@{user.login}</p>

            <p>{user.bio}</p>

            <p>Public Repositories: {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
          </div>
        )
      )}

      <hr />

      <h2>Repositories</h2>

      {repoLoading ? (
        <p>Loading repositories...</p>
      ) : repoError ? (
        <p>{repoError}</p>
      ) : repos.length === 0 ? (
        <p>No repos found</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>

              <p>{repo.description || "No description"}</p>

              <p>Language: {repo.language || "Not specified"}</p>

              <p>⭐ {repo.stargazers_count}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
