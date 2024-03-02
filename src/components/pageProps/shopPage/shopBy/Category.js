import React, { useState } from "react";
import NavTitle from "./NavTitle";

const Category = () => {
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
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category"/>
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({title}, index) => (
            <li
              key={index}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
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
