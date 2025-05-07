import React from "react";
import { Person } from "../../database";

type Props = {
  isYoungest: boolean;
  person: Person;
  onEditPerson: () => void;
};

export default function PersonRow({ isYoungest, person, onEditPerson }: Props) {
  return (
    <tr>
      <td className={isYoungest ? "highlight" : ""}>{person.name}</td>
      <td>{person.age}</td>
      <td>{person.monthlySalary}</td>
      <td>{person.monthlySalary * 12}</td>
      <button onClick={onEditPerson}>edit</button>
    </tr>
  );
}
