"use client";

import { useDispatch } from "react-redux";
import { setResult } from "../store/resultSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const test = async () => {
    const res = await fetch("/api/discover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: "" }),
    });

    const data = await res.json();
    console.log(data.text);
    dispatch(setResult(data.text));
  };

  return (
    <div className="flex w-full border-b border-devideBorder justify-center pb-7">
      <input
        type="text"
        placeholder="Search..."
        className="w-175 h-12 border border-borderInput bg-input text-gray-400 px-4 py-2 rounded-lg outline-none focus:border-button"
      />
      <button
        type="button"
        onClick={test}
        className="flex justify-center items-center w-60 h-12 px-5 py-2 rounded-lg font-semibold text-textButton bg-button ml-7"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
