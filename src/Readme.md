Dictionary App
This is a simple dictionary app that allows users to search for word definitions using an external API. The app is built using React and provides a user interface for searching and displaying word definitions.

---

Features
*Search for word definitions
*Display definition and other details of the searched word
*Clear search results
*Crossword game
\*A link for writing a good resume

---

How to use the App
1-Enter a word in the search input and click the search button
2- the app will fetch the definition of the entered word from an external API.
3-The definition and details of the word will be displayed on the screen.
4-Click the " Clear" button to reset the search results and input field.
--
Technologies Used
React : A java script library for building user interfaces.

- FontAwesome : Apopular icon library for adding icons to the UI
- Fetch API: used to make HTTP requests to the external API

---

API Usage
The app uses this link for the API Key https://rapidapi.com/apininjas/api/dictionary-by-api-ninjas/
--

function :

The handleSearch function is an asynchronous function that is triggered when the search button is clicked. It first prevents the default form submission . If the keyWord is empty after trimming whitespace, an error is logged, and the function returns early.

Otherwise, it constructs the URL for the API request with the provided keyword. It then uses the fetch function to send a GET request to the API using the specified options. If the response is successful, the result is set in the state using setResult. If there's an error, it's logged to the console.

The useEffect hook is used to log the result to the console when the component mounts. The empty dependency array [] ensures that this effect only runs once after the initial render.

The handleClear function is responsible for clearing the input keyword and resetting the result to an empty object.

The ListDetails component displays the result.

Netlify link : https://effortless-figolla-195435.netlify.app/
