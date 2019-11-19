import axios from "axios"

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/`
const searchURL = `search.php?s=`


let tokenSource;
const fetchDrinks = async keyword => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel('New request - Cancel prev. get');
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(`${baseURL}${searchURL}${keyword}`, {
      cancelToken: tokenSource.token
    });

    return { drinks: data.drinks }
    
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};

export {
    baseURL,
    searchURL,
    fetchDrinks
}

