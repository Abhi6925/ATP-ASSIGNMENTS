const temperatures = [32, 35, 28, 40, 38, 30, 42];

//filter() method
//filtering the temparatures >35 
const result1=temperatures.filter((temparature)=>temparature>35)
console.log(result1)

//map() method
//convert all temperatures from Celsius → Fahrenheit

const result2=temperatures.map((temparature)=>(temparature*(9/5))+32)
console.log(result2)

// reduce() to calculate average temperature
let averageTemp=temperatures.reduce((acc,temparature)=>acc+temparature)
console.log(averageTemp/temperatures.length)

// find() first temperature above 40
const Temp=temperatures.find((temparature)=>temparature>40)
console.log(Temp)

// findIndex() of temperature 28
const Temp1=temperatures.findIndex((temparature)=>temparature==28)
console.log(Temp1)