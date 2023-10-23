/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchDepartments,
  FetchLookupValues,
  FetchSuborganization,
} from "redux/slices/lookups";

const Step1 = ({ formData, closeModal, loading, data }: any) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedSubOrg = watch("suborganizationId");

  const dispatch: any = useDispatch();
  const {
    employeeCategory,
    employeeType,
    jobTitle,
    location,
    suborganization,
    department,
  } = useSelector((state: any) => state.lookups);

  useLayoutEffect(() => {
    dispatch(FetchLookupValues());
    dispatch(FetchSuborganization());
  }, []);

  useLayoutEffect(() => {
    dispatch(FetchDepartments(selectedSubOrg));
  }, [dispatch, selectedSubOrg]);

  return (
    <div>
      <form onSubmit={handleSubmit(formData)} className={styles.container_form}>
        <CustomInput
          name="name"
          control={control}
          label="element link name"
          type="text"
          placeholder="Input Name"
          errors={errors}
          register={register}
          defaultValue={data.name}
        />
        <div className={styles.container_form_row}>
          <CustomInput
            name="suborganizationId"
            control={control}
            label="suborganization"
            type="select"
            errors={errors}
            register={register}
            options={suborganization}
            placeholder="Select a Suborganization"
            defaultValue={data.suborganizationId}
          />
          <CustomInput
            name="departmentId"
            control={control}
            label="department"
            type="select"
            errors={errors}
            register={register}
            options={department}
            placeholder="Select a Department"
            defaultValue={data.classificationId}
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="jobTitleId"
            control={control}
            label="job title"
            type="select"
            options={jobTitle}
            placeholder="Select a Job Title"
            errors={errors}
            register={register}
            defaultValue={data.jobTitleId}
          />
          <CustomInput
            name="locationId"
            control={control}
            label="location"
            type="select"
            options={location}
            placeholder="Select a Location"
            errors={errors}
            register={register}
            defaultValue={data.payRunId}
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="employeeTypeId"
            control={control}
            label="employee type"
            type="select"
            options={employeeType}
            placeholder="Select an Employee Type"
            errors={errors}
            register={register}
            defaultValue={data.jobTitleId}
          />
          <CustomInput
            name="employeeCategoryId"
            control={control}
            label="employee category"
            type="select"
            options={employeeCategory}
            placeholder="Select an Employee Category"
            errors={errors}
            register={register}
            defaultValue={data.payRunId}
          />
        </div>

        <div className={styles.container_form_row}>
          <Button
            label="Cancel"
            onClick={closeModal}
            disabled={loading}
            customClass={styles.container_form_row_button}
          />
          <Button disabled={loading} type="submit" label="Next" />
        </div>
      </form>
    </div>
  );
};

export default Step1;
