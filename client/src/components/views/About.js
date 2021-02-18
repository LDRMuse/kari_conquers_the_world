import React from 'react'
import { PhotoGrid } from './photos/PhotoGrid'
import { Menu } from './menu/Menu'

import kari from "../../images/model3.jpg";
import monroeLogo from "../../images/monroeLogo.jpg";

export const About = () => {


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
            <h1 className='homeH1'>About Kari</h1>
            <section>
            <p className='p'>Kari is a licensed cosmetologist, licensed cosmetic tattoo artist and has been in the beauty industry for over 15+ years. Kari is CPR and BBP Certified. When not slaying brows and making the world beautiful, Kari is spending time with her 5 boys, adding to her YouTube channel or tending to her duties in the National Guard.</p>
            </section>
          </div>

          {/* <div className="col-3 col-s-12">
            <div className="aside">
              <h1 className="asideFont">Licensed Cosmetic Tattoo Artist</h1>
              <img src={monroeLogo} alt="monroeLogo" />
              <h2 className="asideFont">Located inside Pure Form Beauty</h2>
              <p>5370 Main St, Cottleville, MO 63376</p>
            </div>
          </div> */}


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
