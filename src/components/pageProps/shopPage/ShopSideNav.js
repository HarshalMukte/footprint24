import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";



const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6" >
      <Category icons={false} />
      <Brand />
    </div>
  );
};

export default ShopSideNav;
