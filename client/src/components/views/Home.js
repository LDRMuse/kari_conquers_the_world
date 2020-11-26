import React from 'react'
import {PhotoGrid} from './photos/PhotoGrid'

export const Home = () => {
  return (
    <>
    <div className="row">
      <div className="col-3 col-s-3 menu">
        <ul>
          <li>Microblading</li>
          <li>Microshading</li>
          <li>Lips</li>
          <li>Eyeliner</li>
          <li>Lash Extensions</li>
          <li>Hair</li>
        </ul>
      </div>

      <div className="col-6 col-s-9">
        <h1>Meet Kari</h1>
        <p>This is where we write about Kari. </p>
      </div>

      <div className="col-3 col-s-12">
        <div className="aside">
          <h2>What?</h2>
          <p>Chania is a city on the island of Crete.</p>
          <h2>Where?</h2>
          <p>Crete is a Greek island in the Mediterranean Sea.</p>
          <h2>How?</h2>
          <p>You can reach Chania airport from all over Europe.</p>
        </div>
      </div>
    </div>

    <PhotoGrid />
    </>
  )
}
