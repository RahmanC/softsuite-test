import deleteData from "./requests/deleteData";
import fetchData from "./requests/fetchData";
import postData from "./requests/postData";
import putData from "./requests/putData";

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

export const editElementById = async (id: string, data: {}) => {
  const respData = await putData(`/elements/${id}`, data);
  return respData;
};

export const deleteElementById = async (id: string) => {
  const respData = await deleteData(`/elements/${id}`);
  return respData;
};

export const getElementLinks = async (id: string) => {
  const respData = await fetchData(`/elements/${id}/elementlinks`);
  return respData;
};

export const getLookups = async () => {
  const respData = await fetchData(`/lookups`);
  return respData;
};

export const getLookupById = async (id: string) => {
  const respData = await fetchData(`/lookups/${id}`);
  return respData;
};

export const getLookupValues = async (id: string) => {
  const respData = await fetchData(`/lookups/${id}/lookupvalues`);
  return respData;
};

export const getLookupValueById = async (lookupId: string, id: string) => {
  const respData = await fetchData(`/lookups/${lookupId}/lookupvalues/${id}`);
  return respData;
};
