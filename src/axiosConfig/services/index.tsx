import fetchData from "./requests/fetchData";

export const getElements = async () => {
  const respData = await fetchData("/elements");
  return respData;
};
