export interface Person {
  name: string;
  age: number;
  monthlySalary: number;
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
    },
    {
      name: "Bill",
      age: 45,
      monthlySalary: 4000,
    },
    {
      name: "Mark",
      age: 30,
      monthlySalary: 1500,
    },
    {
      name: "Bob",
      age: 22,
      monthlySalary: 2000,
    },
  ],
};
