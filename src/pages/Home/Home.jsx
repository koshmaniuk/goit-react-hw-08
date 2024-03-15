import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div style={css.container}>
        <h1 style={css.title}>
          Phonebook by Yaroslav Koshmaniuk{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
