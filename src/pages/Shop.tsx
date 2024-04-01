import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Popular } from "../components/Popular/Popular";
import { Offers } from "../components/Offers/Offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { Newsletter } from "../components/NewsLetter/Newsletter";

export const Shop: React.FC = () => {
  return (
    <>
      <Banner />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </>
  );
};
