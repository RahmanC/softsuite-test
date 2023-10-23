/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from "react";
import CustomInput from "../customInput/CustomInput";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchGradeSteps,
  FetchGrades,
  FetchLookupValues,
} from "redux/slices/lookups";

const Step2 = ({ onSubmit, loading, handleBack, data }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedGrade = watch("grade");

  const dispatch: any = useDispatch();
  const { union, grades, gradeSteps } = useSelector(
    (state: any) => state.lookups
  );

  useLayoutEffect(() => {
    dispatch(FetchLookupValues());
    dispatch(FetchGrades());
  }, []);

  useLayoutEffect(() => {
    dispatch(FetchGradeSteps(selectedGrade));
  }, [dispatch, selectedGrade]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container_form}>
        <div className={styles.container_form_row}>
          <CustomInput
            name="grade"
            control={control}
            label="grade"
            type="select"
            options={grades}
            placeholder="Select Grade"
            errors={errors}
            defaultValue={data.grade}
          />
          <CustomInput
            name="gradeStep"
            control={control}
            label="grade step"
            type="select"
            options={gradeSteps}
            placeholder="Select Grade Step"
            errors={errors}
            defaultValue={data.gradeStep}
          />
        </div>

        <CustomInput
          name="unionId"
          control={control}
          label="union"
          placeholder="Select a Union"
          type="select"
          options={union}
          errors={errors}
          defaultValue={data.unionId}
        />

        <CustomInput
          name="additionalInfo"
          control={control}
          label="additional info"
          type="textarea"
          placeholder="N/A"
          errors={errors}
          defaultValue={data.additionalInfo}
        />

        <div className={styles.container_form_row}>
          <Button
            label="Back"
            onClick={handleBack}
            customClass={styles.container_form_row_button}
          />
          <Button disabled={loading} type="submit" label="Next" />
        </div>
      </form>
    </div>
  );
};

export default Step2;
