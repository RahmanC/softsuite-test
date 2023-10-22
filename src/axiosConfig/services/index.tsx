import fetchData from "./requests/fetchData";
import postData from "./requests/postData";

export const getElements = async () => {
  const respData = await fetchData("/elements");
  return respData;
};

export const createElements = async (data: {}) => {
  const respData = await postData("/elements", data);
  return respData;
};

export const getElementById = async (id: string) => {
  const respData = await fetchData(`/elements/${id}`);
  return respData;
};

export const getElementLinks = async (id: string) => {
  const respData = await fetchData(`/elements/${id}/elementlinks`);
  return respData;
};
