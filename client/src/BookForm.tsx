function BookForm() {
  const addBook = async () => {
    const book = {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishDate: 1925,
      isbn: "9780743273565",
    };
    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: { "Content-Type": "application/json" },
    });
    const newBook = await response.json();
    console.log(["New Book", newBook]);
  };

  return <button onClick={addBook}>Add new book</button>;
}

export default BookForm;
