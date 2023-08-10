import React from "react";
import App from "../App";

const ListDetails = ({ result }) => {
  // Check if 'result' is defined
  if (!result) {
    return <div>No data available</div>;
  }

  // Destructure properties from the 'result' object
  const { word, definition, example } = result;

  return (
    <div className="card mt-20">
      <div className="p-20">
        <h3>Word: {word}</h3>
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
        <div>
          <h3>Example:</h3>
          <p>{example}</p>
        </div>
      </div>
    </div>
  );
};
<App />;
export default ListDetails;
