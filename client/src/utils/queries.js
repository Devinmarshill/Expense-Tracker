import { gql } from "@apollo/client";
export const EXPENSES= gql`
query Expenses {
    expenses {
      firstName
      lastName
      expenses {
        _id
        price
        quantity
        transaction
        transactionDate
      }
    }
  }`
