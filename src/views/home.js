import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Usability Architect</title>
        <meta property="og:title" content="Human Usability Architect" />
      </Helmet>
    </div>
  )
}

export default Home
