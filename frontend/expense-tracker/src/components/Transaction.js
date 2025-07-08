import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ txn }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = txn.amount < 0 ? '-' : '+';

  return (
    <li className="flex justify-between items-center border p-2 mb-1">
      <span>{txn.text}</span>
      <span>{sign}₹{Math.abs(txn.amount)}</span>
      <button
        onClick={() => deleteTransaction(txn._id)}
        className="text-red-500 ml-4"
      >x</button>
    </li>
  );
};
export default Transaction;
