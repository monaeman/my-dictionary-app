import React from "react";

function ListDetails({ result }) {
  const loaded = () => {
    // Check if 'result' is defined
    //if (!result) {
    //return <div>No data available</div>;
    //}

    // Destructure properties from the 'result' object
    //const { word, definition } = result;

    // Check if 'result' is defined
    //if (!result) {
    // return <div>No data available</div>;
    //}
    console.log(result);
    return (
      <div className="card mt-20">
        <div className="p-20">
          <h3>Word: {result.word}</h3>
          <div>
            <h3>Definition:</h3>
            <p>{result.definition}</p>
          </div>
          {/*<div>
          <h3>Example:</h3>
          <p>{result.example}</p>
  </div>*/}
        </div>
      </div>
    );
  };
  const loading = () => {
    return <h1> No definition found</h1>;
  };
  return result ? loaded() : loading();
}

export default ListDetails;
