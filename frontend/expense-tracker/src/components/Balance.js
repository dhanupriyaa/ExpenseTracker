import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="text-xl font-semibold mb-2">
      Your Balance: ₹{total}
    </div>
  );
};
export default Balance;
