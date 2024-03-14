import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { fetchContacts } from "../redux/operations";
// import { selectLoading } from "../redux/tasks/selectors";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactList } from "../components/ContactList/ContactList";
export default function Tasks() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />

      {/* <div>{isLoading && "Request in progress..."}</div> */}
    </>
  );
}
