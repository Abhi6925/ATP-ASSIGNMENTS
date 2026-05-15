class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

// borrow() - Marks the book as not available
    Borrow(){
        if(this.isAvailable==true){
            console.log('book borrowed')
            this.isAvailable=false
        }
        else{
            console.log('Book not available')
        }
    }
// returnBook() - Marks the book as available
    returnBook(){
        this.isAvailable=true
        console.log('Book returned')
    }
// getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
    getInfo(){
        console.log(`the ${this.title} by ${this.author} (${this.pages} pages)`)
    }
// isLongBook() - Returns true if pages > 300, false otherwise
    isLongBook(){
        if(this.pages>=300){
            return true
        }
        return false
    }
}

let book1=new Book("Bahubali","rajamouli",325,true)
let book2=new Book("pushpa","sukumar",225,true)
let book3=new Book("devara","jnoan",275,false)
let book4=new Book("JS","soujith",200,true)
let book5=new Book("Pyhton","sunny",400,false)


// Display info of all books
book1.getInfo()

book1.Borrow()
book2.Borrow()
// book1.getInfo()
// book1.isLongBook()

// Return 1 book and show updated status
book2.returnBook()


// iv. Count how many books are "long books" (more than 300 pages)
let books=[book1,book2,book3,book4,book5]
let count=0
for(let i=0;i<books.length;i++){
    if(books[i].pages>300){
        count+=1
    }
}

console.log(`NO.of long Books:${count}`)


// v. List all available books
console.log("available books")

for(let i of books){
    if(i.isAvailable==true){
        console.log(`${i.title} is available`)
    }
}