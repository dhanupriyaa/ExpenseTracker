const Transaction = require('../models/Transactions');

exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
};

exports.addTransaction = async (req, res) => {
  const { text, amount } = req.body;
  const transaction = new Transaction({ text, amount });
  await transaction.save();
  res.status(201).json(transaction);
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.status(204).send();
};
