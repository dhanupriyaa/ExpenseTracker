import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (!text || !amount) return;
    addTransaction({ text, amount: +amount });
    setText('');
    setAmount('');
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={e => setText(e.target.value)}
          className="border w-full p-2 mb-2"
        />
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={e => setAmount(e.target.value)}
          className="border w-full p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
export default AddTransaction;
