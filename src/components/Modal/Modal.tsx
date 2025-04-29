import React, { Dispatch, SetStateAction, useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { Person } from "../../database";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onSubmit: (newPerson: Person) => void;
};

export default function Modal({
  setShowModal,
  onSubmit,
}: Props) {
  const [valueName, setValueName] = useState<string>("");
  const [ageName, setAgeName] = useState<number>(0);
  const [valueMonthly, setValueMonthly] = useState<number>(0);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newPerson: Person = {
      name: valueName,
      age: ageName,
      monthlySalary: valueMonthly,
      yearlySalary: valueMonthly * 12,
    };

    onSubmit(newPerson);

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
          <form action="" onSubmit={handleSubmit} className="form-wrapper">
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
