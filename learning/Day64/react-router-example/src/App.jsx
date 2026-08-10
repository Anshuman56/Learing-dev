import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link,
  useParams,
} from "react-router";
import Home from "./home";
import About from "./about";
import NoMatch from "./noMatch";

const BlogPosts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },

  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};

function Posts() {
  return (
    <div>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

function Post() {
  const { slug } = useParams();
  const post = slug ? BlogPosts[slug] : null;
  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <h3>
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
