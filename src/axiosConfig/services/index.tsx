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

export const createElementLinks = async (id: string, data: {}) => {
  const respData = await postData(`/elements/${id}/elementlinks`, data);
  return respData;
};

export const editElementLinks = async (
  elementId: string,
  id: string,
  data: {}
) => {
  const respData = await putData(
    `/elements/${elementId}/elementlinks/${id}`,
    data
  );
  return respData;
};

export const deleteElementLinks = async (elementId: string, id: string) => {
  const respData = await deleteData(
    `/elements/${elementId}/elementlinks/${id}`
  );
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

export const getSuborganization = async () => {
  const respData = await fetchData(`/suborganizations`);
  return respData;
};

export const getSuborganizationById = async (id: string) => {
  const respData = await fetchData(`/suborganizations/${id}`);
  return respData;
};

export const getDepartments = async (id: string) => {
  const respData = await fetchData(`/suborganizations/${id}/departments`);
  return respData;
};

export const getDepartmentById = async (subId: string, id: string) => {
  const respData = await fetchData(
    `/suborganizations/${subId}/departments/${id}`
  );
  return respData;
};

export const getGrades = async () => {
  const respData = await fetchData(`/grade`);
  return respData;
};

export const getGradeById = async (id: string) => {
  const respData = await fetchData(`/grade/${id}`);
  return respData;
};

export const getGradeSteps = async (id: string) => {
  const respData = await fetchData(`/grade/${id}/gradesteps`);
  return respData;
};

export const getGradeStepById = async (gradeId: string, id: string) => {
  const respData = await fetchData(`/grade/${gradeId}/gradesteps/${id}`);
  return respData;
};
