import axios from 'axios';

const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=`);

export default search;
