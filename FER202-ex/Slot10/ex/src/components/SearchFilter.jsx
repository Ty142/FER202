import { useState } from "react";
const SearchFilter = () => {
  const ProductList = [
    { name: "Coca" },
    { name: "Pepsi" },
    { name: "Sprite" },
    { name: "fanta" },
  ];
  const [search, setSearch] = useState("");
  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        placeholder="Enter your favorite drink"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <ul>
        {ProductList.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        ).map((filteredProduct, index) => (
          <li key={index}>{filteredProduct.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
