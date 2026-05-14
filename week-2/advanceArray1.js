const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

//1. Use filter() to get only inStock products
const instockProducts=cart.filter((object)=>object.inStock==true)
console.log(instockProducts)

//2. Use map() to create a new array with:  { name, totalPrice }
const newArray=cart.map((object)=>({
    name:object.name,
    totalPrice:object.price*object.quantity
}))
console.log(newArray)

//     3. Use reduce() to calculate grand total cart value
const grandTotal=cart.reduce((acc,obj)=>acc+obj.price*obj.quantity,0)
console.log(grandTotal)


//     4. Use find() to get details of "Mouse"
const details=cart.find((obj)=>obj.name=="Mouse")
console.log(details)


//     5. Use findIndex() to find the position of "Keyboard"
const details1=cart.findIndex((obj)=>obj.name=="Keyboard")
console.log(details1)