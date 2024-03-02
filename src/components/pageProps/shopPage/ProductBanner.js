import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ sortFunction, itemsPerPageFromBanner }) => {

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          <select
            onChange={(e) => sortFunction(e.target.value)}
            id="countries"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >    
            <option value= "LowPrice"> Low Price</option>
            <option value="HighPrice">High Price</option>
            <option value="Rating">Rating</option>
            <option value="NewArival">New Arival</option>
            <option value="BestSellers">Best Sellers</option>
          </select>
          <span className="absolute text-sm right-2 md:right-4 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block">Item per pages:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
