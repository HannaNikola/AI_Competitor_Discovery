import SearchInput from "./compoents/SearchInput";
import Report from "./compoents/Report";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-mainTitle text-4xl font-bold mb-5">
        AI Competitor Discovery
      </h1>
      <h2 className="text-secondTitle text-lg mb-10">
        Find similar products for any startap
      </h2>
      <SearchInput />
      <Report />
    </div>
  );
}
