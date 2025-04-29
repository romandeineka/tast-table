import { useMemo, useState } from "react";
import { Person } from "./database";
import PersonRow from "./components/PersonRow/PersonRow";
import Modal from "./components/Modal/Modal";

//TASKS:
// 1. average salary
// 2. yearly salary for each person
// 3. highlight youngest person
// 4. sort table by salary

interface PeopleTableProps {
  people: Person[];
}

enum SortDirection {
  activeAsc = "Asc",
  activeDesc = "Desc",
}

export const PeopleTable = ({ people }: PeopleTableProps) => {
  // const [averageSalary, setAverageSalary] = useState<number>(111);
  const [sortedSalary, setSortedSalary] = useState(SortDirection.activeAsc);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [peopleState, setPeopleState] = useState<Person[]>(people);

  const avarageSalary = useMemo(
    () =>
      peopleState.reduce(
        (accumulator, person) => accumulator + person.monthlySalary,
        0
      ) / people.length,
    [peopleState]
  );

  const youngestPerson = useMemo(
    () =>
      people.reduce((prevPerson, currPerson) =>
        prevPerson.age < currPerson.age ? prevPerson : currPerson
      ),
    [people]
  );

  const sortedBySalary =
    sortedSalary === SortDirection.activeAsc
      ? [...peopleState].sort((a, b) => a.monthlySalary - b.monthlySalary)
      : [...peopleState].sort((a, b) => b.monthlySalary - a.monthlySalary);

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)} className="">
          Add user
        </button>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            onSubmit={(newPerson) => {
              setPeopleState((prevPeople) => [...prevPeople, newPerson]);
            }}
          />
        )}
      </div>
      <table id="table">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>
            Monthly salary
            <div className="wrapperButton">
              <button
                className={sortedSalary === "Asc" ? "active" : ""}
                onClick={() => {
                  setSortedSalary(SortDirection.activeAsc);
                }}
              >
                ASC
              </button>
              <button
                className={sortedSalary === "Desc" ? "active" : ""}
                onClick={() => {
                  setSortedSalary(SortDirection.activeDesc);
                }}
              >
                DESC
              </button>
            </div>
          </th>
          <th>Yearly salary</th>
        </thead>
        <tbody>
          {sortedBySalary.map((p, index) => (
            <PersonRow key={index} youngestPerson={youngestPerson} p={p} />
          ))}
        </tbody>
      </table>
      <span>Average salary: {avarageSalary}</span>
    </>
  );
};
