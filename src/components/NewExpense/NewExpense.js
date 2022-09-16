import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const [isEditing, setisEditing] = useState(false);
  const addExpenseHandler = () => {
    setisEditing(true);
  };

  const hideEditingForm = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideEditingForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
