import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
    console.log("Searching for order:", query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        className="bg-yellow-100 text-stone-400 px-4 py-2   text-sm md:text-base rounded-full placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring-yellow-500 focu:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
