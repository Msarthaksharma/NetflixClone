import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import request from '../Request'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowId='1' title='Upcoming' fetchUrl={request.requestUpcoming} />
        <Row rowId='2' title='Latest' fetchUrl={request.requestPopular} />
        <Row rowId='3' title='Trending' fetchUrl={request.requestTrending} />
        <Row rowId='4' title='Top Rated' fetchUrl={request.requestTopRated} />
        <Row rowId='5' title='Popular' fetchUrl={request.requestPopular} />
    </div>
  )
}

export default Home