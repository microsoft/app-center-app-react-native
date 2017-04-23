// because Fetch doesn't recognize error responses as
// actual errors since it's technically completing the response...

import Reactotron from 'reactotron-react-native';

export function handleApiErrors (response) {
  if (!response.ok) 
  {
    Reactotron.log(response.statusText);
    throw Error(response.statusText);
  }
  return response;
}