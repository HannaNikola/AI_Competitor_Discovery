"use client";
import SearchInput from "../compoents/SearchInput";
import Report from "../compoents/Report";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AiNetworkLoader } from "../compoents/AiNetworkLoader";

export default function Home() {
  const isLoading = useSelector((state: RootState) => state.result.loading);
  const analysis = useSelector((state: RootState) => state.result.analysis);
  const isError = useSelector((state: RootState) => state.result.error);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-mainTitle text-2xl sm:text-4xl font-bold mb-5 max-sm:mt-5">
        AI Competitor Discovery
      </h1>
      <h2 className=" text-[16px] sm:text-lg mb-5">
        Find similar products for any startap
      </h2>
      <p className="text-secondTitle  mb-7 sm:mb-10">
        If you want to get information about a startup, you need to enter the
        company's website.
      </p>
      <SearchInput />
      {!isLoading && analysis && <Report />}
      {/* <Report /> */}
      {isLoading && (
        <>
          <div className="flex flex-col items-center justify-center mt-5 sm:mt-15">
            <p className="mb-4">Generating report...... Please wait.</p>
            <AiNetworkLoader />
          </div>
        </>
      )}
      {isError && <div className="text-red-500 text-xl font-medium mt-6">{isError}</div>}
    </div>
  );
}
