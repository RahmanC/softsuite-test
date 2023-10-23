import * as Yup from "yup";

export const step2Schema = Yup.object().shape({
  effectiveStartDate: Yup.date().required(),
  effectiveEndDate: Yup.date().required(),
  processingType: Yup.string().required(),
  payFrequency: Yup.string().required(),
  //   selectedMonths: Yup.array().when("payFrequency", {
  //     is: (payFrequency: string) => payFrequency === "Selected Months",
  //     then: (schema: any) =>
  //       schema
  //         .min(1, "At least one month must be selected")
  //         .required("At least one month must be selected"),
  //   }),
  prorate: Yup.string().required(),
  status: Yup.string().required(),
});

export const step1Schema = Yup.object().shape({
  name: Yup.string().required(),
  classificationId: Yup.string().required(),
  categoryId: Yup.string().required(),
  payRunId: Yup.string().required(),
  description: Yup.string().required(),
  reportingName: Yup.string().required(),
});

export const step1LinkSchema = Yup.object().shape({
  name: Yup.string().required(),
  suborganizationId: Yup.string(),
  departmentId: Yup.string().when("suborganizationId", {
    is: (suborgId: any) => !!suborgId,
    then: (schema: any) => schema.required("Department is required"),
  }),
  jobTitleId: Yup.string(),
  locationId: Yup.string(),
  employeeTypeId: Yup.string(),
  employeeCategoryId: Yup.string(),
});

export const step3Schema = Yup.object().shape({
  amountType: Yup.string().required(),
  amount: Yup.string().when("amountType", {
    is: "fixed value",
    then: (schema: any) => schema.required("Amount is required"),
  }),
  rate: Yup.string().when("amountType", {
    is: "rate of salary",
    then: (schema: any) => schema.required("Rate is required"),
  }),
  effectiveStartDate: Yup.date(),
  effectiveEndDate: Yup.date(),
  automate: Yup.string(),
  status: Yup.string(),
});
