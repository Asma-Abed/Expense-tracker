import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilter={filteredYearHandler}
        />
        {filteredExpenses.length === 0 ? (
          <h2 className='expenses-list__fallback'>No expenses found.</h2>
        ) : (
          <ul className='expenses-list'>
            {' '}
            {filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
              ></ExpenseItem>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
