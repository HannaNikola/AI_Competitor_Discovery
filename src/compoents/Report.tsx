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
    <div className=" w-full mt-7  lg:mt-10">
      <div className="w-full border border-devideBorder rounded-xl p-4 lg:p-6 mb-5 lg:mb-7 ">
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
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row lg:mr-7 ">
          <div className=" flex flex-col  border border-devideBorder rounded-xl p-4 lg:p-6 mb-5 lg:mb-7 ">
            <h3>Similar Products</h3>
            <ul className="text-blue-400 list-disc list-inside">
              {competitors?.competitors?.map(
                (item: Competitor, index: number) => (
                  <li key={index} className="mb-2 text-blue-400">
                    {item.name} —{" "}
                    <span className=" boldText">{item.product_category}</span>
                    <p className=" promptText">{item.key_value_proposition}</p>
                    <p className=" promptText">{item.business_model}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-col border border-devideBorder rounded-xl p-4 lg:p-6">
          <h3 className=" mb-2"> Overview</h3>

          <div className="flex flex-col border border-devideBorder rounded-xl p-4 lg:p-6 mb-5 lg:mb-7">
            <h3 className="flex mb-4">Strategic Overview</h3>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-mainTitle mb-1">
                  Core Mechanics:
                </p>
                <p className="promptText">{insight?.core_mechanics}</p>
              </div>

              <div className="py-3 border-y border-devideBorder">
                <p className="font-semibold text-mainTitle mb-2">
                  Key Highlights & Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {insight?.key_features
                    ?.split(";")
                    .map((feature: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-devideBorder rounded text-sm promptText flex items-center gap-2"
                      >
                        <span className="text-blue-400">✦</span>{" "}
                        {feature.trim()}
                      </span>
                    ))}
                </div>
              </div>
            <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="font-semibold text-mainTitle mb-1">
                    Monetization:
                  </p>
                  <p className="promptText">{insight?.monetization_leverage}</p>
                </div>
                <div>
                  <p className="font-semibold text-mainTitle mb-1">
                    Adoption Barrier:
                  </p>
                  <p className="promptText italic">
                    {insight?.adoption_barrier
                      ?.toLowerCase()
                      .includes("not available")
                      ? "Details pending further analysis"
                      : insight?.adoption_barrier}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Report;
