import { useState } from "react";
import { sculptureList } from "./data.jsx";

export default function Gallary() {
  let [index, setIndex] = useState(0);
  let [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handleClick() {
    if (hasNext) setIndex(index + 1);
  }

  function handlePreClick() {
    if (hasPrev) setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sulpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick} disabled={!hasNext}>
        next
      </button>
      <button onClick={handlePreClick} disabled={!hasPrev}>
        prev
      </button>
      <h2>
        <i>{sulpture.name}</i>
        by {sulpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sulpture.description}</p>}
      <img src={sulpture.url} alt={sulpture.alt} />
    </>
  );
}
