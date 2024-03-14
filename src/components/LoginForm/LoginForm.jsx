import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <div className={css.contactFormInput}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.inputField}
            type="text"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.contactFormInput}>
          <label htmlFor={passwordFieldId}>Password</label>
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
