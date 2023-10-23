/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { FetchLookupValues } from "redux/slices/lookups";

import { yupResolver } from "@hookform/resolvers/yup";
import { step1Schema } from "hooks/schema";

const Step1 = ({ formData, closeModal, loading, data }: any) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(step1Schema) });

  const dispatch: any = useDispatch();
  const { classification, payrun, category } = useSelector(
    (state: any) => state.lookups
  );

  useLayoutEffect(() => {
    dispatch(FetchLookupValues());
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(formData)} className={styles.container_form}>
        <div className={styles.container_form_row}>
          <CustomInput
            name="name"
            control={control}
            label="name"
            type="text"
            placeholder="Input Name"
            errors={errors}
            register={register}
            defaultValue={data.name}
          />
          <CustomInput
            name="classificationId"
            control={control}
            label="element classification"
            type="select"
            errors={errors}
            register={register}
            options={classification}
            placeholder="Select Classification"
            defaultValue={data.classificationId}
          />
        </div>
        <div className={styles.container_form_row}>
          <CustomInput
            name="categoryId"
            control={control}
            label="Element category"
            type="select"
            options={category}
            placeholder="Select Element Category"
            errors={errors}
            register={register}
            defaultValue={data.categoryId}
          />
          <CustomInput
            name="payRunId"
            control={control}
            label="Payrun"
            type="select"
            options={payrun}
            placeholder="Select Payrun"
            errors={errors}
            register={register}
            defaultValue={data.payRunId}
          />
        </div>
        <CustomInput
          name="description"
          control={control}
          label="Description"
          type="textarea"
          placeholder="Input Description"
          errors={errors}
          register={register}
          defaultValue={data.description}
        />
        <CustomInput
          name="reportingName"
          control={control}
          label="reporting name"
          type="textarea"
          placeholder="Input Reporting Name"
          errors={errors}
          register={register}
          defaultValue={data.reportingName}
        />
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
