import axios from 'axios';

function createApiClient() {
  const BASE_URL = 'https://rgcunha-online-shop.herokuapp.com/api';

  async function getProducts() {
    const path = `${BASE_URL}/products`;
    const { data } = await axios.get(path);
    return data;
  }

  return {
    getProducts
  }
}

const apiClient = createApiClient();
export default apiClient;