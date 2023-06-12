import React from "react";
import Tabs from "../UI/Tabs";
import { AllProducts } from "../Main UI/AllProducts";

export const SideNav = () => {
  const tabs = [
    { label: "Dashboard", content: "Dashboard" },
    { label: "All Products", content: <AllProducts /> },
    { label: "Orders", content: "Orders" },
    { label: "Favourites", content: "Favourites" },
  ];
  return (
    <div className="sideNav">
      <Tabs tabs={tabs} />
    </div>
  );
};
