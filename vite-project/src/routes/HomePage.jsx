import React from 'react'
import './homePage.scss'
import Searchbar from '../components/searchbar/Searchbar'


function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
          Home Sweet Home. 
          Get Your Dream Place
          </h1>
          <p>
          Unlock the door to your dream home with Bora, 
          your trusted real estate companion. 
          Explore, discover, and find your perfect space effortlessly.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Ready Property</h2>
            </div>
          </div>
        </div>
       
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="homepage" />
      </div>
    </div>
  )
}

export default HomePage