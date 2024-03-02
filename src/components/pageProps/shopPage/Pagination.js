import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { useSelector } from "react-redux";

const items = paginationItems;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, sortValue }) => {
  const [products, setProducts] = useState(items);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;


  //This is use for the reducer
  const filterValue = useSelector((state) => state.filter);
  useEffect(() => {
    function filterFunction() {
      switch (filterValue) {
        case "newArival":
          setProducts(() => items.filter((item) => item.badge));
          break;
        case "accessories":
          setProducts(() =>
            items.filter((item) => item.categories === "accesories")
          );
          break;
        case "electronics":
          setProducts(() =>
            items.filter((item) => item.categories === "electronics")
          );
          break;
        case "clothing":
          setProducts(() =>
            items.filter((item) => item.categories === "clothing")
          );
          break;
        default:
          break;
      }
    }
    filterFunction();
  }, [filterValue]);

  useEffect(() => {
    const sortingFunction = () => {
      switch (sortValue) {
        case "LowPrice":
          setProducts(
            items
              .slice()
              .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          );
          break;
        case "HighPrice":
          setProducts(
            items
              .slice()
              .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          );
          break;
          break;
        case "Rating":
          setProducts(() => items.sort((a, b) => a.rating - b.rating));
          break;
        case "NewArival":
          setProducts(() => items.filter((e) => e.badge));
          break;
        case "BestSellers":
          setProducts(() => items.filter((ele) => ele.rating > 3));
          break;
      }
    };
    sortingFunction();
  }, [sortValue]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 gird_item">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
