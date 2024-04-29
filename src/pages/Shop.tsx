import React from "react"
import { Banner } from "../components/Banner/Banner"
import { Popular } from "../components/Popular/Popular"
import { Offers } from "../components/Offers/Offers"
import { NewCollections } from "../components/NewCollections/NewCollections"
import { Newsletter } from "../components/NewsLetter/Newsletter"
import { useRef } from "react"

export const Shop: React.FC = () => {
  const newCollectionsRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Banner newCollectionsRef={newCollectionsRef} />
      <Popular />
      <Offers />
      <NewCollections newCollectionsRef={newCollectionsRef} />
      <Newsletter />
    </>
  )
}
