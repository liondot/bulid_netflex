import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <Main fetchURL={requests.requestPopular}/>
      <Row rowID='1' title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row rowID='2' title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowID='3' title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowID='5' title="Upcoming" fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home
