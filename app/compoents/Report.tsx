const Report = () => {
  return (
    <div className="mt-10">
      <div className="w-full border border-devideBorder rounded-xl p-6 mb-7 ">
        <h3>Company Overview</h3>
        <ul>
          <li className="font-semibold text-mainTitle list-disc list-inside">
            Product Category:
          </li>
          <li className="font-semibold text-mainTitle list-disc list-inside">
            Target Users:
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="flex flex-col basis-xs mr-7  ">
          <div className=" flex flex-col basis-xs border border-devideBorder rounded-xl p-6 mb-7 ">
            <h3>Similar Products</h3>
            <ul className="text-blue-400 list-disc list-inside">
              <li className="mb-2">Apolo</li>
              <li className="mb-2">Clay</li>
              <li className="mb-2">Close</li>
            </ul>
          </div>
          <button
            className=" bg-gray-200 text-gray-700 border border-gray-300 
               font-semibold px-5 py-2 rounded-lg 
             hover:bg-gray-300 transition"
          >
            Download report
          </button>
        </div>
        <div className=" flex flex-col basis-sm border border-devideBorder rounded-xl p-6 ">
          <h3>Market Overview</h3>
          <p className="text-textResult leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
          <div className="flex mt-auto ">
            <button className="flex justify-center  w-66.25 px-5 py-2 rounded-lg  font-semibold text-textButton bg-button">
              Download report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Report;
