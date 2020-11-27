import React from 'react'
import {PhotoGrid} from './photos/PhotoGrid'

export const Home = () => {
  return (
    <>
    <div className="mainBody">
    <div className="row">
      <div className="col-3 col-s-3 menu">
        <ul>
        <img className='kariImage' src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/69728227_10158453624809179_3486239634361417728_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=7yfG4y-f044AX-1iFhU&_nc_ht=scontent-ort2-1.xx&oh=02ecb3141455bbbbb9a4490644435c47&oe=5FE482BC" alt="logo" />
          {/* <li>Microblading</li>
          <li>Microshading</li>
          <li>Lips</li>
          <li>Eyeliner</li>
          <li>Lash Extensions</li>
          <li>Hair</li> */}
        </ul>
      </div>

      <div className="col-6 col-s-9">
        <h1>Meet Kari</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="col-3 col-s-12">
        <div className="aside">
          <h2>Contact</h2>
          <p>555-555-5555</p>
          <h2>Pure Form Salon</h2>
          <p>777 Main Street,</p>
          <p>Cottleville, MO 63376</p>
          <h2>Big Easy</h2>
          <p>555 Road Street Drive</p>
          <p>Troy, MO 63387</p>
        </div>
      </div>
    </div>
    </div>
<div className='gallery'>
    <PhotoGrid />
    </div>
    </>
  )
}
