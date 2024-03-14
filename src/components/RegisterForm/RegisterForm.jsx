import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .min(5, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(21, "Too long!")
    .required("Required"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
      className={css.main}
    >
      <Form className={css.form}>
        <div className={css.contactFormInput}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.inputField}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </div>
        <div className={css.contactFormInput}>
          <label htmlFor={emailFieldId}>email</label>
          <Field
            className={css.inputField}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </div>
        <div className={css.contactFormInput}>
          <label htmlFor={passwordFieldId}>password</label>
          <Field
            className={css.inputField}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </div>
        <button className={css.contactFormBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
