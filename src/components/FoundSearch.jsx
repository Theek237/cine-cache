import React, { useState } from "react";

function FoundSearch() {
  const [numOfResults, setNumOfResults] = useState(0);

  return <div>Found {numOfResults} Results</div>;
}

export default FoundSearch;
