const AGE_OF_EMPIRES_II_API_URL =
  'https://age-of-empires-2-api.herokuapp.com/api/v1';

class ApiService {
  getResourcesFromApi = resource => {
    return fetch(AGE_OF_EMPIRES_II_API_URL + '/' + resource, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };

  getResourceFromApi = (resource, id) => {
    return fetch(AGE_OF_EMPIRES_II_API_URL + '/' + resource + '/' + id, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export default new ApiService();
