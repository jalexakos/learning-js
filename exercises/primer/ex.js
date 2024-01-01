// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookTitle) {
  bookTitleLowerCase = bookTitle.toLowerCase();
  if (!bookTitleLowerCase.includes("great")) {
    favoriteBooks.push(bookTitle);
  }
  return;
}

// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
  console.log(`Favorite books: ${favoriteBooks.length}.`);
  for (const book in favoriteBooks) {
    console.log(favoriteBooks[book]);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();
