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
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilter={filteredYearHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          date={props.expenses[3].date}
          amount={props.expenses[3].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
