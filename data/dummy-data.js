import Expense from "../models/expense";

export const EXPENSES = [
  new Expense("e1", "A Book", 4.50, new Date("2020-05-19")),
  new Expense("e2", "Trip to bahama", 4000.50, new Date("2020-06-15")),
  new Expense("e3", "Bakery Item", 14.50, new Date("2020-01-15")),
  new Expense("e4", "Coffee at Starbucks", 4.50, new Date("2020-02-15")),
  new Expense(
    "e5",
    "Monthly Netflix Subscription",
    15.99,
    new Date("2022-02-01")
  ),
  new Expense("e6", "Groceries - Walmart", 120.30, new Date("2022-02-10")),
  new Expense("e7", "Electricity Bill", 75.00, new Date("2021-01-28")),
  new Expense("e8", "Uber Ride to Office", 12.25, new Date("2022-03-02")),
  new Expense("e9", "Book: Atomic Habits", 18.00, new Date("2022-03-10")),
  new Expense("e10", "Lunch at Chipotle", 9.75, new Date("2022-03-03")),
  new Expense("e11", "Movie Ticket", 13.00, new Date("2023-03-05")),
  new Expense("e12", "Spotify Premium", 9.99, new Date("2025-06-07")),
  new Expense("e13", "Phone Case", 19.99, new Date("2025-06-06")),
];