export const useStorage = (key: string) => {
  // setting data to Session storage
  const setSessionStorage = (userData: {}) =>
    sessionStorage.setItem(key, JSON.stringify(userData));

  // get data from Session storage
  const getSessionStorage = JSON.parse(sessionStorage.getItem(key) as string);

  //   remove data from Session storage
  const removeSessionStorage = () => sessionStorage.removeItem(key);

  return { setSessionStorage, getSessionStorage, removeSessionStorage };
};
