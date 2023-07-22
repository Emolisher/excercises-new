// SOrt an Array of numbers
arrayY = [3, 1, 2, 6, 4, 5];

sortedArr = arrayY.sort((a, b) => {
  return a - b;
});
// works cuz we can return <0 & >0
console.log(sortedArr);

sortedArrTwo = arrayY.sort((a, b) => {
  return a < b ? -1 : 1;
});
console.log(sortedArrTwo);

//sort an Array of Objects by author's Last name
const books = [
  { name: "Byzantium : the Early Ages", author: "John Norwich" },
  { name: "The End is Always Near", author: "Dan Carlin" },
  { Name: "Understanding Power", author: "Noam Chomsky" },
];

books.sort((book1, book2) => {
    const lastN1 = book1.author.split(" ")[1]
    const lastN2 = book2.author.split(" ")[1]
    return lastN1 < lastN2 ? -1 : 1;
})
console.log(books);

