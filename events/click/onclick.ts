function eventOnClick(params: {
  endpoint: string, 
  verb: string, 
  body: BodyInit | null | undefined,
  headers: HeadersInit | undefined}): Promise<Response>{

  return fetch(params.endpoint, {
    method: params.verb,
    headers: params.headers,
    body: JSON.stringify(params.body)
  }).then(async function(response) {
    return response.json()
    .then((jsonResponse) => jsonResponse);
  }).catch((error) => error);
}

export { eventOnClick };