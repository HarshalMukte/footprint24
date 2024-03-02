import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div className="w-full mx-auto" 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </motion.div>
  );
};

export default Home;
