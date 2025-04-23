import "./App.css";
import { PeopleTable } from "./PeopleTable";
import { database } from "./database";

function App() {
  return <PeopleTable people={database.people} />;
}

export default App;
