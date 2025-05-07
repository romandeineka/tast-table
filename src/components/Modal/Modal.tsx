import React, { Dispatch, SetStateAction, useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { Person } from "../../database";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onSubmit: (updatedPerson: Person) => void;
  selectedPerson: Person | null;
};

export default function Modal({
  setShowModal,
  onSubmit,
  selectedPerson,
}: Props) {
  const [valueName, setValueName] = useState<string>(
    selectedPerson?.name ?? ""
  );
  const [ageName, setAgeName] = useState<number>(selectedPerson?.age ?? 0);
  const [valueMonthly, setValueMonthly] = useState<number>(
    selectedPerson?.monthlySalary ?? 0
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const updatedPerson: Person = {
      name: valueName,
      age: ageName,
      monthlySalary: valueMonthly,
      yearlySalary: valueMonthly * 12,
    };

    onSubmit(updatedPerson);

    setValueName("");
    setAgeName(0);
    setValueMonthly(0);

    setShowModal(false);
  };

  return (
    <section className="modal">
      <article className="modal-content">
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className="exit-icon"
        >
          <IoMdClose />
        </div>
        <main className="modal-mainContents">
          <form onSubmit={handleSubmit} className="form-wrapper">
            <label>
              Name:
              <input
                value={valueName}
                onChange={(e) => {
                  setValueName(e.target.value);
                }}
                type="text"
                name="name"
              />
            </label>
            <label>
              Age:
              <input
                value={ageName}
                onChange={(e) => {
                  setAgeName(+e.target.value);
                }}
                type="number"
                name="age"
              />
            </label>
            <label>
              Monthly salary:
              <input
                value={valueMonthly}
                onChange={(e) => {
                  setValueMonthly(+e.target.value);
                }}
                type="number"
                name="monthly salary"
              />
            </label>

            <input type="submit" value="SUBMIT" />
          </form>
        </main>
      </article>
    </section>
  );
}
