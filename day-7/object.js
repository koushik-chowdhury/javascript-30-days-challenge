// Objects

console.log(`---------Activity 1--------`);
// task 1: Create an object representing a book with properties like title, author, and year,

const book = {
  author: "Koushik Chowdhury",
  title: "failure",
  year: "2024",
};
console.log(book);

// task 2: Access and log the title and author properties of the book object.

console.log(`Title is ${book.title} and author is ${book.author}`);

function nameAndAuthor(book) {
  return `${book.author} ${book.title}`;
}

console.log(nameAndAuthor(book));
