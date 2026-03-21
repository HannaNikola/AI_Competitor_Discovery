"use client";

import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setResult } from "../store/resultSlice";
import axios from "axios";
import { useState } from "react";
import { RootState } from "../store";

// const SearchInput = () => {
//   const dispatch = useDispatch();
//   const [urlLink, setUrlLink] = useState("");
//   const isLoading = useSelector((state: RootState) => state.result.loading);

//   const test = async () => {
//     try {
//       dispatch(setLoading());
//       const res = await fetch("/api/discover", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url: urlLink }),
//       });

//       const data = await res.json();
//       console.log(data);
//       if (!data.success) {
//         throw new Error(data.error || "Request failed");
//       }
//       dispatch(setResult(data));
//     } catch (err: any) {
//       dispatch(setError(err.message));
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       test();
//     }
//   };

//   return (
//     <div className="flex w-full border-b border-devideBorder justify-center pb-7">
//       <input
//         type="text"
//         value={urlLink}
//         onChange={(e) => setUrlLink(e.target.value)}
//         onKeyDown={handleKeyPress}
//         placeholder="Search..."
//         className="w-175 h-12 border border-borderInput bg-input text-gray-400 px-4 py-2 rounded-lg outline-none focus:border-button"
//       />
//       <button
//         type="button"
//         onClick={test}
//         disabled={isLoading}
//         className={`
//     flex justify-center items-center w-60 h-12 px-5 py-2 rounded-lg font-semibold
//     text-textButton bg-button ml-7 transition-all duration-150

//     /* Эффект нажатия */
//     active:scale-95

//     /* Стили для заблокированной кнопки */
//     disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
//   `}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchInput;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [urlLink, setUrlLink] = useState("");
  const isLoading = useSelector((state: RootState) => state.result.loading);

  const test = async () => {
    try {
      dispatch(setLoading());
      const res = await axios.post(
        "https://your-app.onrender.com/api/pipeline",
        {
          url: urlLink,
        },
      );

      const data = res.data;
      console.log(data);
      if (!data.success) {
        throw new Error(data.error || "Request failed");
      }
      dispatch(setResult(data));
    } catch (err: any) {
      dispatch(setError(err.message));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      test();
    }
  };

  return (
    <div className="flex w-full border-b border-devideBorder justify-center pb-7">
      <input
        type="text"
        value={urlLink}
        onChange={(e) => setUrlLink(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className="w-175 h-12 border border-borderInput bg-input text-gray-400 px-4 py-2 rounded-lg outline-none focus:border-button"
      />
      <button
        type="button"
        onClick={test}
        disabled={isLoading}
        className={`
    flex justify-center items-center w-60 h-12 px-5 py-2 rounded-lg font-semibold 
    text-textButton bg-button ml-7 transition-all duration-150
    
    /* Эффект нажатия */
    active:scale-95 
    
    /* Стили для заблокированной кнопки */
    disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
  `}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
