import React from 'react'
import { PhotoGrid } from './photos/PhotoGrid'
import { Menu } from './menu/Menu'

import kari from "../../images/kari1.jpg";
import monroeLogo from "../../images/monroeLogo.jpg";

export const Home = () => {
  return (
    <>
      <div className="mainBody">
        <div className="row">
          <div className="col-3 col-s-3 menu">
            <ul>
              <img className='kariImage' src={kari} alt="logo" />
            </ul>
          </div>

          <div className="col-6 col-s-9">
            <h1>Meet Kari</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="col-3 col-s-12">
            <div className="aside">
              <h1 className="asideFont">Licensed Cosmetic Tattoo Artist</h1>
              <img src={monroeLogo} alt="monroeLogo" />
              <h2 className="asideFont">Located inside Pure Form Beauty</h2>
              <p>5370 Main St, Cottleville, MO 63376</p>
            </div>
          </div>
        </div>
      </div>

      <div className='service-menu'>
        <Menu />
      </div>

      <div className='gallery'>
        <PhotoGrid />
      </div>
    </>
  )
}
