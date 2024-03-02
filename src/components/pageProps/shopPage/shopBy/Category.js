import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { accessories, clothing, electronics, newArival } from "../../../../redux/filterSlice";
import { paginationItems } from "../../../../constants";

const items = paginationItems;

const Category = () => {
  const dispatch = useDispatch();

  const items = [
    {
      title: "New Arrivals",
    },
    {
      title: "Accessories",
    },
    {
      title: "Electronics",
    },
    {
      title: "Clothing",
    },
  ];

  const filterFunction = (ele) => {
    if (ele === "New Arrivals") {
      dispatch(newArival())
    }else if(ele === "Accessories"){
      dispatch(accessories())
    }else if(ele === "Clothing"){
      dispatch(clothing())
    }else{
      dispatch(electronics())
    }
  };
  
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] categoryUl">
          {items.map(({ title }, index) => (
            <li
              key={index}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between cursor-pointer"
              onClick={() => filterFunction(title)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
