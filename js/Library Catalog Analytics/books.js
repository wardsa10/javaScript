// Sample dataset for all exercises
const books = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    year: 1937,
    rating: 4.7,
    genres: ["Fantasy"],
  },
  {
    title: "1984",
    author: "Orwell",
    year: 1949,
    rating: 4.8,
    genres: ["Dystopian", "Political Fiction"],
  },
  {
    title: "The Name of the Wind",
    author: "Rothfuss",
    year: 2007,
    rating: 4.5,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Brave New World",
    author: "Huxley",
    year: 1932,
    rating: 4.2,
    genres: ["Dystopian"],
  },
  {
    title: "Dune",
    author: "Herbert",
    year: 1965,
    rating: 4.6,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Fahrenheit 451",
    author: "Bradbury",
    year: 1953,
    rating: 4.3,
    genres: ["Dystopian", "Science Fiction"],
  },
  {
    title: "The Road",
    author: "McCarthy",
    year: 2006,

    rating: 4.0,
    genres: ["Post-Apocalyptic"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Lee",
    year: 1960,
    rating: 4.9,
    genres: ["Classic", "Coming-of-Age"],
  },
];

//ex1______________________

function getRecentBooks(books, afterYear) {
  return books
    .filter((book) => book.year >= afterYear)
    .map((book) => book.title);
}

console.log(getRecentBooks(books, 2006));

//ex2________________________________

function getAverageRating(books) {
  const total = books.reduce((sum, book) => sum + book.rating, 0);

  const average = total / books.length;

  return average.toFixed(2);
}

//ex3__________________________________
function sortBooksBy(books, key, asc = true) {
  return [...books].sort((a, b) => {
    if (a[key] < b[key]) return asc ? -1 : 1;
    if (a[key] > b[key]) return asc ? 1 : -1;
    return 0;
  });
}

console.log(sortBooksBy(books, "year"));
console.log(sortBooksBy(books, "year", false));

//ex4___________________________________________

function countGenres(books) {
  return books.reduce((counts, book) => {
    book.genres.forEach((genre) => {
      counts[genre] = (counts[genre] || 0) + 1;
    });

    return counts;
  }, {});
}

console.log(countGenres(books));

//ex5______________________

function groupByAuthor(books) {
  return books.reduce((result, book) => {
    const author = book.author;

    if (!result[author]) {
      result[author] = [];
    }

    result[author].push(book);

    return result;
  }, {});
}

console.log(groupByAuthor(books));

//ex6______________________________

function hasHighlyRated(books, threshold) {
   for (let index = 0; index < books.length; index++) {
      if (books[index].rating === threshold)
      {
         return true
        }
   }

   return false

}


console.log(hasHighlyRated(books,4.5));


//ex7_______________________________________

function allBeforeYear(books, year) {
    for (let index = 0; index < books.length; index++) {
      if (books[index].year >year) {
        return true;
      }
   }
   return false
}

console.log(allBeforeYear(books,1994));


//ex8__________________________


function findByTitle(books, title) {
   

    for (let index = 0; index < books.length; index++) {
      if (books[index].title ===title) {
        return books[index];
      }
    }
    return undefined;
}

console.log(findByTitle(books, "The Hobbit"));


//------------ Bonus Challenges----------------------

//1_______________________________
function ClassicYear(books) {
   
   return books.map(book => ({
      ...book,
      isClassic: book.year < 1950
   }))
}

console.log(ClassicYear(books));


//2_____________________________

function dystopianTitles(books) {
   return books.filter(book => {
   return   book.genres.includes("Dystopian")
   }).map(book=>book.title).sort()
}

console.log(dystopianTitles(books));

//3_____________________________
function hasKeyword(books, keyword) {
  return books.some((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase()),
  );
}

console.log(hasKeyword(books,"t"));
