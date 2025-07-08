import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="font-semibold mb-2">History</h3>
      <ul>
        {transactions.map(txn => (
          <Transaction key={txn._id} txn={txn} />
        ))}
      </ul>
    </div>
  );
};
export default TransactionList;
