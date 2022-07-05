import APIResponse from '@interfaces/APIResponse.interface';

export const mapLoadingStates = (states: Object): Record<string, boolean> => {
  const loading: Record<string, boolean> = {};
  Object.keys(states).map((e) => {
    return (loading[e] = false);
  });
  return loading;
};

export const sanitizeResponse = (
  response: APIResponse & Record<string, any>
) => {
  //Destructure to exclude response payload
  const { ResponseCode, ResponseMessage, ...rest } = response;
  return rest;
};
