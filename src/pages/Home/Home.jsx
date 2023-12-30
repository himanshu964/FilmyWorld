import React from 'react'
import Herobanner from './heroBanner/Herobanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'

export default function Home() {
  return (
    <div className='homePage'>
      <Herobanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}
