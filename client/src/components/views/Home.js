import React from 'react'
import {PhotoGrid} from './photos/PhotoGrid'
import kari from "/Users/Melissa/Code/dev/kari_conquers_the_world/client/src/images/kari1.jpg";

export const Home = () => {
  return (
    <>
    <div className="mainBody">
    <div className="row">
      <div className="col-3 col-s-3 menu">
        <ul>
        <img className='kariImage' src={kari} alt="logo" />
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
