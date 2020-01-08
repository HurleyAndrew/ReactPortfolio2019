import React from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'

const NotFoundPage = () => (
  <div className="App">
    <div className="wrapper">
      <Navigation className="navComponent " color={'#A2528A'} />
      <p className="errorPageText">oopsies... the page could not be found!</p>
    </div>
  </div>
)

export default NotFoundPage
