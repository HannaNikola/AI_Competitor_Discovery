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
    <div className=" w-full mt-7  sm:mt-10">
      <div className="w-full border border-devideBorder rounded-xl p-4 sm:p-6 mb-5 sm:mb-7 ">
        <h3>Company Overview</h3>

        <p className="font-semibold text-mainTitle list-disc list-inside mb-2 ">
          Product Category:{" "}
          <span className="promptText">{analysis?.product_category}</span>
        </p>
        <p className="font-semibold secondTitle list-disc list-inside mb-2 ">
          Summery:{" "}
          <span className=" promptText">{analysis?.short_summary}</span>
        </p>
        <p className="font-semibold text-mainTitle">Target Users:</p>
        <ul>
          {analysis?.target_users?.map((user: string, index: number) => (
            <li key={index} className="promptText  list-disc list-inside">
              {user}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:flex-row sm:mr-7 ">
          <div className=" flex flex-col  border border-devideBorder rounded-xl p-4 sm:p-6 mb-5 sm:mb-7 ">
            <h3>Similar Products</h3>
            <ul className="text-blue-400 list-disc list-inside">
              {competitors?.competitors?.map(
                (item: Competitor, index: number) => (
                  <li key={index} className="mb-2 text-blue-400">
                    {item.name} —{" "}
                    <span className=" boldText">{item.product_category}
                    </span>
                   <p className=" promptText">{item.key_value_proposition}</p>
                    <p className=" promptText">{item.business_model}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="flex-1 border border-devideBorder rounded-xl p-4 sm:p-6">
          <h3> Overview</h3>
          {/* <p className="text-textResult leading-relaxed ">
            {insight.product_position}
          </p>
          <p>{insight.primery_audience}</p> */}
        </div>
      </div>
    </div>
  );
};
export default Report;
