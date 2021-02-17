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
            <h1 className='homeH1'>Meet Kari</h1>
            <section>
              <p className='p'>Licensed Cosmetologist <span role="img" aria-label="sheep">💋 </span></p>
              <p className='p'>Licensed Cosmetic Tattoo Artist <span role="img" aria-label="sheep">🖋 </span></p>
              <p className='p'>CPR Certified <span role="img" aria-label="sheep">🚑 </span></p>
              <p className='p'>BBP Certified <span role="img" aria-label="sheep">🩸 </span></p>
              <p className='p'>Experienced <span role="img" aria-label="sheep">💁🏻‍♀️< /span></p>
              <p className='p'>Fully Insured <span role="img" aria-label="sheep">🙌 </span></p>
              <p className='p'>15+ Yrs in the Beauty Industry <span role="img" aria-label="sheep">💅🏼 </span></p>
            </section>
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
