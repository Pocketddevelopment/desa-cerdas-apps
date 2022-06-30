export const getQueryUrlParams = (
  params: Record<string, any> | undefined | null
) => {
  let queryUrl = '?';
  if (params) {
    Object.keys(params).map(
      (e: string, index: number) =>
        (queryUrl += `${index === 0 ? '' : '&'}${params[e]}`)
    );
  }
  return queryUrl || '';
};
