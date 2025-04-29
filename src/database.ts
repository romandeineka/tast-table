export interface Person {
  name: string;
  age: number;
  monthlySalary: number;
  yearlySalary: number;
}

export interface Database {
  people: Person[];
}

export const database: Database = {
  people: [
    {
      name: "John",
      age: 22,
      monthlySalary: 1500,
      yearlySalary: 1500 * 12,
    },
    {
      name: "Bill",
      age: 45,
      monthlySalary: 4000,
      yearlySalary: 4000 * 12,
    },
    {
      name: "Mark",
      age: 30,
      monthlySalary: 1500,
      yearlySalary: 1500 * 12,
    },
    {
      name: "Bob",
      age: 22,
      monthlySalary: 2000,
      yearlySalary: 2000 * 12,
    },
  ],
};
