const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"


//     1. filter() only "Sci-Fi" movies
const result=movies.filter((object)=>object.genre=="Sci-Fi")
console.log(result)

//     2. map() to return:
//             "Inception (8.8)"
const result1=movies.map((object)=>""+object.title+" ("+object.rating+")")
console.log(result1)

//     3. reduce() to find average movie rating
let averageRating=movies.reduce((acc,object)=>acc=object.rating,0)
console.log(averageRating)

//     4. find() movie "Joker"
let details=movies.find((object)=>object.title=="Joker")
console.log(details)

//     5. findIndex() of "Avengers"
let details1=movies.findIndex((object)=>object.title=="Avengers")
console.log(details1)