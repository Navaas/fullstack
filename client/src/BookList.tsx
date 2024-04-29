import { useEffect, useState } from "react";

function BookList() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/books");
      const books = await response.json();
      setBooks(books);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  return (
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : (
        books.map((book) => <li>{book.title}</li>)
      )}
    </ul>
  );
}

export default BookList;
