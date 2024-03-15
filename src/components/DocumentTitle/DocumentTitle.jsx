import css from "./DocumentTitle.module.css";

export default function DocumentTitle({ children }) {
  return <title>{children}</title>;
}
