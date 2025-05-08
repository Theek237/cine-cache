import React, { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 15,
  expandButtonText = "See More...",
  collapseButtonText = "See Less",
  buttonColor = "blue",
}) {
  const [expanded, setExpanded] = useState(false);

  const words = children.split(" ");
  const collapsedText = [];
  for (let i = 0; i < collapsedNumWords; i++) {
    collapsedText.push(words[i]);
  }

  function handleClick() {
    setExpanded((prev) => !prev);
    console.log(words);
    console.log(collapsedText);
  }

  return (
    <div>
      {!expanded ? collapsedText.join(" ") : children}
      <button
        style={{ color: buttonColor }}
        className="cursor-pointer"
        onClick={handleClick}
      >
        {!expanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
