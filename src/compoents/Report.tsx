"use client";
import { useSelector } from "react-redux";

type Competitor = {
  name: string;
  product_category: string;
  key_value_proposition: string;
  business_model: string;
};
const Report = () => {
  const { analysis, competitors, insight, loading, error } = useSelector(
    (state: any) => state.result,
  );

  return (
    <div className="mt-10">
      <div className="w-full border border-devideBorder rounded-xl p-6 mb-7 ">
        <h3>Company Overview</h3>

        <p className="font-semibold text-mainTitle list-disc list-inside">
          Product Category:<span className="promptText">{analysis?.product_category}</span>
        </p>
        <p>
          Summery:<span>{analysis?.short_summary}</span>
        </p>
        <ul>
          Target Users:
          {analysis?.target_users?.map((user: string, index: number) => (
            <li
              key={index}
              className="font-semibold text-mainTitle list-disc list-inside"
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <div className="flex flex-col basis-xs mr-7  ">
          <div className=" flex flex-col basis-xs border border-devideBorder rounded-xl p-6 mb-7 ">
            <h3>Similar Products</h3>
            <ul className="text-blue-400 list-disc list-inside">
              {competitors?.competitors?.map(
                (item: Competitor, index: number) => (
                  <li key={index} className="mb-2 text-blue-400">
                    {item.name} — {item.product_category}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className=" flex flex-col basis-sm border border-devideBorder rounded-xl p-6 ">
          <h3>Market Overview</h3>
          <p className="text-textResult leading-relaxed ">
            {insight?.opportunity}
          </p>
          {/* <div className="flex mt-auto ">
            <button className="flex justify-center  w-66.25 px-5 py-2 rounded-lg  font-semibold text-textButton bg-button">
              Download report
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Report;
