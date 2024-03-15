import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./Register.module.css";

export default function Register() {
  return (
    <div className={css.container}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}
