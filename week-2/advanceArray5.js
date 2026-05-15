
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
let creditTran=transactions.filter((object)=>object.type=="credit")
console.log(creditTran)


//     2. map() to extract only transaction amounts
const transAmount=transactions.map((object)=>object.amount)
console.log(transAmount)


//     3. reduce() to calculate final account balance
const finalAmount=transactions.reduce((acc,object)=>acc+object.amount,0)
console.log(finalAmount)


//     4. find() the first debit transaction
const firstDebit=transactions.find((object)=>object.type=="debit")
console.log(firstDebit)
//     5. findIndex() of transaction with amount 10000

let amountIndex=transactions.findIndex((object)=>object.amount==10000)
console.log(amountIndex)