import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0);

  return (
    <div className="flex justify-between w-64 mb-4">
      <div>
        <h4>Income</h4>
        <p className="text-green-600">₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-red-600">₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
