const fetch = require("node-fetch");
// you will need a google api key from here: https://console.developers.google.com/
const api_key = process.env.api_key;

const bookSearch = async (book) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${api_key}&maxResults=5`
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
    throw new Error("There was an error with your request!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  bookSearch,
};
