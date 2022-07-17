import APIResponse from '@interfaces/APIResponse.interface';

export const mapLoadingStates = (states: Object): Record<string, boolean> => {
  const loading: Record<string, boolean> = {};
  Object.keys(states).map((e) => {
    return (loading[e] = false);
  });
  return loading;
};

export const mapKeyStates = (states: Object): Record<string, boolean> => {
  const obj: Record<string, boolean> = {};
  Object.keys(states).map((e) => {
    return (obj[e] = false);
  });
  return obj;
};

export const sanitizeResponse = (
  response: APIResponse & Record<string, any>
) => {
  //Destructure to exclude response payload
  try {
    const { ResponseCode, ResponseMessage, ...rest } = response;
    return rest;
  } catch (err) {
    return {};
  }
};
