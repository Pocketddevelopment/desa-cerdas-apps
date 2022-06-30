export const mapLoadingStates = (states: Object): Record<string, boolean> => {
  const loading: Record<string, boolean> = {};
  Object.keys(states).map((e) => {
    return (loading[e] = false);
  });
  return loading;
};
