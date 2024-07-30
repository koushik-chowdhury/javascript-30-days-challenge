// Objects

console.log(`---------Activity 1--------`);
// task 1: Create an object representing a book with properties like title, author, and year,

const book = {
  author: "Koushik Chowdhury",
  title: "failure",
  year: "2024",
  id: "01",
};
console.log(book);

// task 2: Access and log the title and author properties of the book object.

console.log(`Title is ${book.title} and author is ${book.author}`);

console.log(`---------Activity 2--------`);

// task 3: Add a method to the book object that return a string with the book's title and aouthor, and log the result of calling this method.

function nameAndAuthor(book) {
  return `${book.author} ${book.title}`;
}

console.log(nameAndAuthor(book));

// task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

/*
function updateYear(newYear) {
  book.year = newYear;
}
*/
updateYear = (newYear) => (book.year = newYear);
updateYear(205);
console.log(book);

console.log(`---------Activity 3--------`);

// task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  c: {
    writer: "Dennis Ritchi",
    title: "Learn C",
  },
  javascript: {
    writer: "unknown",
    title: "javascript",
  },
};

console.log(library);

// task 6:

// console.log(`${library.c.writer} \n ${library.javascript.writer}`);

for (const key in library) {
  if (library.hasOwnProperty(key)) {
    console.log(`${key} writer: ${library[key].writer}`);
  }
}

console.log(`---------Activity 4--------`);
// task 7: Add a method to the book object that uses the this keyword to return a astirng with the book's title and year, and log the result of calling this method.

const techBook = {
  writer: "Koushik Chowdhury",
  age: 21,
  title: "i don't know",
  test: function () {
    return `${this.writer} ${this.title}`;
  },
};

// console.log(techBook.test());

console.log(`---------Activity 5--------`);
// task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value.

for (const key in techBook) {
  if (techBook.hasOwnProperty(key) && key === "writer") {
    console.log(`${key} :  ${techBook[key]}`);
  }
}
