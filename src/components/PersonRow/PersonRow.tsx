import React from "react";
import { Person } from "../../database";

type Props = {
  youngestPerson: Person;
  p: Person;
};

export default function PersonRow({ youngestPerson, p }: Props) {
  return (
    <tr>
      <td className={p.age === youngestPerson.age ? "highlight" : ""}>
        {p.name}
      </td>
      <td>{p.age}</td>
      <td>{p.monthlySalary}</td>
      <td>{p.monthlySalary * 12}</td>
    </tr>
  );
}
