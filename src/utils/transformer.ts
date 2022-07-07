export const getQueryUrlParams = (
  params: Record<string, any> | undefined | null
) => {
  let queryUrl = '?';
  if (params) {
    Object.keys(params).map(
      (e: string, index: number) =>
        (queryUrl += `${index === 0 ? '' : '&'}${e}=${params[e]}`)
    );
  }
  return queryUrl || '';
};

export const getInitialName = (name: string | any) => {
  return (name && name.substring(0, 1)) || '';
};
