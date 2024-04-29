
import React, { useState } from "react";
import "./BankInfo.css";

function Transactions() {
  const [search, searchingIcon] = useState("");
  const [expenses, Expenditure] = useState([
    {
      date: "25-01-2020",
      description: "Medical Bill",
      category: "Medical Expense",
      amount: 400000,
    },
    {
      date: "4-02-2022",
      description: "Monthly water payments",
      category: "Water Bill",
      amount: 4000,
    },
    {
      date: "21-06-2023",
      description: "Food and snacks",
      category: "shopping for food",
      amount: 10000,
    },
    {
      date: "1-01-2024",
      description: "Payment made to Kenyan Embassy",
      category: "Travelling",
      amount: 150000,
    },
    {
      date: "3-06-2024",
      description: "Bought a car",
      category: "Cars",
      amount: 1300000,
    },
    {
      date: "02-06-2023",
      description: "Dinner Night",
      category: "Family and Friends",
      amount: 20000,
    },
    {
      date: "02-06-2023",
      description: "Fees to Elimu Bora School",
      category: "School Fees",
      amount: 20000,
    },
  ]);
  function Form({ expenses }) {
    const [date, DateUsed] = useState("");
    const [description, DescriptionUsed] = useState("");
    const [category, CategorysUsed] = useState("");
    const [amount, AmountUsed] = useState("");
  
    const submition = (e) => {
    
      const AddedExpense = {
        date,
        description,
        category,
        amount: parseFloat(amount),
      };
      expenses(AddedExpense);
      DateUsed("");
      DescriptionUsed("");
      CategorysUsed("");
      AmountUsed("");
    };
  
    return (
      <form onSubmit={submition}>
        <input
          type="date"
          value={date}
          onChange={(e) => DateUsed(e.target.value)}
          placeholder="Date"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => DescriptionUsed(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => CategorysUsed(e.target.value)}
          placeholder="Category"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => AmountUsed(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit">Add Transaction</button>
      </form>
    );
  }
  

  const [sortaraangement, sorting] = useState(null);

  const Search = (e) => {
    searchingIcon(e.target.value);
  };

  const sort = (exp) => {
    if (sortaraangement === exp) {
      Expenditure([...expenses].reverse());
    } else {
      const expensessorted = [...expenses].sort((a, b) => {
        if (a[exp] < b[exp]) return -1;
        if (a[exp] > b[exp]) return 1;
        return 0;
      });
      Expenditure(expensessorted);
    }

    sorting(exp);
  };

  const Expensefiltered = search.trim() === "" ? expenses : expenses.filter((expense) =>
  expense.description.toLowerCase().includes(search.toLowerCase())
);

  console.log("Search Term:", search);
console.log("Filtered Expenses:", Expensefiltered);


  const Expense = (newExpense) => {
    Expenditure([...expenses, newExpense]);
  };

  return (
    <div className="TransactionTable">
      <input
        type="text"
        value={search}
        onChange={Search}
        placeholder="Search your recent Transactions"
      />
      <Form expenses={Expense} />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th onClick={() => sort("date")}>Date</th>
              <th onClick={() => sort("description")}>Description</th>
              <th onClick={() => sort("category")}>Category</th>
              <th onClick={() => sort("amount")}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Expensefiltered.map((expense, idk) => (
              <tr key={idk}>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;

