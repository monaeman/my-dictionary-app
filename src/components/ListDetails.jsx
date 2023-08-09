const ListDetails = ({ result }) => {
  // Check if result is not undefined before destructuring
  if (!result) {
    return null; // or display a loading message
  }

  //const { word, meanings } = result;

  return (
    <div className="card mt-20">
      <div className="p-20">
        <h3>Word: {word}</h3>

        <div>
          <h3>Meaning:</h3>
          <p>{meanings[0].definitions[0].definition}</p>
        </div>

        <div>
          <h3>Example:</h3>
          <p>{meanings[0].definitions[0].example}</p>
        </div>

        <div>
          <h3>Synonyms:</h3>
          <ul>
            {meanings[0].synonyms.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
