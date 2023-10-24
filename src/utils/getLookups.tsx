import { useSelector } from "react-redux";

export const GetLookups = () => {
  const {
    classification,
    category,
    payrun,
    department,
    suborganization,
    location,
    grades,
    gradeSteps,
  } = useSelector((state: any) => state.lookups);

  const getSubOrganizationName = (id: string | undefined) => {
    const foundSuborganization = suborganization?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundSuborganization ? foundSuborganization.name : "-";
  };

  const getLocationName = (id: string | undefined) => {
    const foundLocation = location.find(
      (item: { id: string | undefined }) => item?.id === id
    );
    return foundLocation ? foundLocation.name : "-";
  };

  const getGrade = (id: string | undefined) => {
    const foundGrade = grades?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundGrade ? foundGrade.name : "-";
  };

  const getGradeStep = (id: string | undefined) => {
    const foundGradeStep = gradeSteps?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundGradeStep ? foundGradeStep.name : "-";
  };

  const getDepartment = (id: string | undefined) => {
    const foundDepartment = department?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundDepartment ? foundDepartment.name : "-";
  };

  const getClassificationName = (id: string | undefined) => {
    const foundClassification = classification?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundClassification ? foundClassification.name : "-";
  };

  const getCategoryName = (id: string | undefined) => {
    const foundCategory = category?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundCategory ? foundCategory.name : "-";
  };

  const getPayRunName = (id: string | undefined) => {
    const foundPayRun = payrun?.find(
      (item: { id: string | undefined }) => item.id === id
    );
    return foundPayRun ? foundPayRun.name : "-";
  };

  return {
    getCategoryName,
    getPayRunName,
    getClassificationName,
    getSubOrganizationName,
    getDepartment,
    getLocationName,
    getGrade,
    getGradeStep,
  };
};
