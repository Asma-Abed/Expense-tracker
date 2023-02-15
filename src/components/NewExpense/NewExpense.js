import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [addExpenseForm, setAddExpenseForm] = useState(false);
  const addExpenseBtnHandler = () => {
    setAddExpenseForm(true);
  };
  const cancelExpenseForm = () => {
    setAddExpenseForm(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpenseForm(false);
  };
  return (
    <div className='new-expense'>
      {!addExpenseForm && (
        <button onClick={addExpenseBtnHandler}>Add New Expense</button>
      )}
      {addExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
