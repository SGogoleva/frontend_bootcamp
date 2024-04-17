import { error } from "console";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const authors = [
  { id: uuidv4(), name: "Josh Adkins", dateOfBirth: "1995-06-19" },
  { id: uuidv4(), name: "George Garrity", dateOfBirth: "1926-09-24" },
  { id: uuidv4(), name: "Charles Parker", dateOfBirth: "1915-09-26" },
  { id: uuidv4(), name: "Karin D. Rodland", dateOfBirth: "1939-02-18" },
];

const books = [
  {
    id: uuidv4(),
    name: "Footprints in the Sand",
    price: 375,
    authorId: authors[0].id,
  },
  {
    id: uuidv4(),
    name: "The Quiet Revolution",
    price: 12,
    authorId: authors[1].id,
  },
  {
    id: uuidv4(),
    name: "Snow This Christmas",
    price: 56,
    authorId: authors[2].id,
  },
  {
    id: uuidv4(),
    name: "Celestial Dreamscape",
    price: 87,
    authorId: authors[3].id,
  },
];

app.use(bodyParser.json());

app.get("/books", (req, res) => {
  const booksWithAuthors = books.map((book) => ({
    ...book,
    author: authors.find((author) => author.id === book.authorId),
  }));
  res.json(booksWithAuthors);
});

app.get("/books/:id", (req, res) => {
  const idRequest = req.params.id;
  const requestedBook = books.find((book) => book.id === idRequest);
  if (!requestedBook) {
    return res.status(404).json({ error: "Book not found" });
  }
  const reqAuthor = authors.find(
    (author) => author.id === requestedBook.authorId
  );
  const bookWithAuthor = { ...requestedBook, reqAuthor };
  res.json(bookWithAuthor);
});

app.post("/books", (req, res) => {
  const { name, price, authorId } = req.body;
  if (!name || !price || !authorId) {
    return res.status(400).json({ error: "Must add name, price and authorId" });
  }

  const isAuthorExists = authors.some((author) => author.id == authorId);
  if (!isAuthorExists) {
    return res.status(400).json({ error: "The author does not exists" });
  }

  const newBook = {
    id: uuidv4(),
    name,
    price,
    authorId,
  };

  books.push(newBook);
  res.status(201).send(newBook);
});

app.put("/books/:id", (req, res) => {
  const idRequest = req.params.id;
  const updBook = books.find((book) => book.id == idRequest);
  if (!updBook) {
    return res.status(404).json({ error: "Book not found" });
  }
  const { name, price } = req.body;
  if (name) {
    updBook.name = name;
  }
  if (price) {
    updBook.price = price;
  }
  res.status(204).send(updBook);
});

app.delete("/books/:id", (req, res) => {
  const idRequest = req.params.id;
  const idxBook = books.findIndex((book) => book.id == idRequest);
  if (idxBook == -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  books.splice(idxBook, 1);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Server is listening on  http://localhost:${port}`);
});
