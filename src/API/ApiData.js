const axios = require('axios').default;

// Api get for fetching the data from given API
export const ApiGet = (BaseURL) => {
  return new Promise((resolve, reject) => {
      axios.get(BaseURL)
          .then((responseJson) => {
              resolve(responseJson);
          })
          .catch((error) => {
              if (error && error.hasOwnProperty('response') &&
                  error.response && error.response.hasOwnProperty('data') && error.response.data &&
                  error.response.data.hasOwnProperty('error') && error.response.data.error) {
                  reject(error.response.data.error);
              } else {
                  reject(error);
              }
          });
  });
}