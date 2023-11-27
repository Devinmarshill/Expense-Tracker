const mongoose = require('mongoose');

const { Schema } = mongoose;

const expenseSchema = new Schema({
  transaction: {
    type: String,
    required: true,
    trim: true
  },
transactionDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
