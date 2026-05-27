import React, { useState } from "react";

const SearchFilter = ({ items }) => {
  const [search, setSearch] = useState("");

  // Case-insensitive filtering
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div>
      <h2>Search Filter</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtered List */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;