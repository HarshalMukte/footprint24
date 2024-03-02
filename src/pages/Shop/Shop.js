import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import { motion } from "framer-motion";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortValue, setSortValue] = useState("LowPrice");

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  const sortFunction = (value) => {
    setSortValue(value);
  };

  const style = {
    container: {
      top: "6rem",
    },
  };

  return (
    <motion.div
      className="max-w-container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div
          className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full sticky"
          style={style.container}
        >
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner
            itemsPerPageFromBanner={itemsPerPageFromBanner}
            sortFunction={sortFunction}
          />
          <Pagination itemsPerPage={itemsPerPage} sortValue={sortValue} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </motion.div>
  );
};

export default Shop;
