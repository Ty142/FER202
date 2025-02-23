import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchFilter = () => {
  const ProductList = [
    { name: "Coca" },
    { name: "Pepsi" },
    { name: "Sprite" },
    { name: "Fanta" },
  ];
  const [search, setSearch] = useState("");

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="card-title mb-3">Search Drinks</h3>
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Search
          </label>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Enter your favorite drink"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="list-group">
          {ProductList.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          ).map((filteredProduct, index) => (
            <li key={index} className="list-group-item">
              {filteredProduct.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
