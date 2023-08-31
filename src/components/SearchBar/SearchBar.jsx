import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
