import React from "react";
import "./styles.css";
import Listz from "./Listz";
import Blog from "./Blog";
import NameForm from "./formz";

export default function App() {
  const numbers = [1, 2, 3, 4, 5, 8];

  const posts = [
    { id: 1, title: "Jedi", content: "Use the Force for good" },
    { id: 2, title: "Sith", content: "USe the Force for evil" }
  ];

  return (
    <div className="App">
      <Listz numbers={numbers} />
      <Blog posts={posts} />
      <NameForm />
    </div>
  );
}
