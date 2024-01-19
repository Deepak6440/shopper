import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offers/Offer'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop