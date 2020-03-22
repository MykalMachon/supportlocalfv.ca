export const generateFetchSettings = (apiKey: string) => {
  return {
    headers: {
      authorization: `bearer ${apiKey}`,
    },
  };
};
