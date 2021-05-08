import {saveClient} from '../../api/saveClient';

export function eventClickAddClient(body: any): any {
  const endpoint = `${process.env.API_BACKEND}/send`;
  const params = {
    endpoint,
    body,
  };
  return saveClient(params)
    .then((sucess) => sucess)
    .catch((error) => error)
}