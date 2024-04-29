import { useEffect, useState } from "react";
import "./App.css";
import BookForm from "./BookForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      const response = await fetch("/api/books"); /* Anropa till api:et */
      const books = await response.json(); /* Spara böcker till en variabel */
      setBooks(books); /* Lägg in böckerna i setBooks */
      setIsLoading(false);
    };
    fetcher();
  }, []);

  return (
    <div>
      <BookForm />
    </div>
  );
}

export default App;
