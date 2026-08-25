import { BrowserRouter, Route, Routes } from "react-router";
import User from "./user";
import Repos from "./repos";
import Search from "./search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hello world</h1>} />
        <Route path="/user" element={<User />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
