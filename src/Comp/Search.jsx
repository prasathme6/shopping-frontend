import React from "react";

const Search = ({ setSearch, search }) => {
  return (
    <form className="h-[250px] w-[100vw] bg-gray-200">
      <div className="relative top-12 left-130">
        <h1 className="font-semibold text-3xl relative left-7 mb-5">
          Search and grab the products
        </h1>

        <input
          type="search"
          placeholder="Type to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-b w-115 h-12 outline-none"
        />
      </div>

      <div className="relative flex gap-10 left-127 top-22">
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("");
          }}
          className="border rounded p-1 px-2"
        >
          All
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("men");
          }}
          className="border rounded p-1"
        >
          Men's
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("women");
          }}
          className="border rounded p-1"
        >
          Women's
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("jewelery");
          }}
          className="border rounded p-1"
        >
          Jewelery
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setSearch("electronics");
          }}
          className="border rounded p-1"
        >
          Electronics
        </button>
      </div>
    </form>
  );
};

export default Search;