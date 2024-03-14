import DocumentTitle from "../../components/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.container}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
}
