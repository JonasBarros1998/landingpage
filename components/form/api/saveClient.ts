import axios from 'axios';

export async function saveClient(params:any): Promise<any> {

  return await axios.post(`${params.endpoint}`, params.body)
    .then((response) => response)
    .catch((error) => error);
}
