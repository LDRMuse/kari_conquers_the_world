import React from 'react';
import './photos.scss';
import makeup1 from "../../../images/makeup1.jpg";
import makeup2 from "../../../images/makeup2.jpg";
import makeup3 from "../../../images/makeup3.jpg";
import makeup4 from "../../../images/makeup4.jpg";
import makeupS1 from "../../../images/makeupS1.jpg";
import makeupS2 from "../../../images/makeupS2.jpg";
import makeup6 from "../../../images/makeup6.jpg";

import model1 from "../../../images/model1.jpg";
import model2 from "../../../images/model2.jpg";
import model3 from "../../../images/model3.jpg";
import model5 from "../../../images/model5.jpg";
import kari2 from "../../../images/kari2.jpg";

import army1 from "../../../images/army1.jpg";
import army2 from "../../../images/army2.jpg";
import army3 from "../../../images/army3.jpg";
import army4 from "../../../images/army4.jpg";

import family1 from "../../../images/family1.jpg";
import family2 from "../../../images/family2.jpg";
import family3 from "../../../images/family3.jpg";
import family4 from "../../../images/family4.jpg";
import family5 from "../../../images/family5.jpg";

export const PhotoGrid = () => {
  return (
    <body id='gallery'>
      <h1 className='galleryHeader'>Gallery</h1>
      <div className="row">

        <div className="column makeup">
          <img className="image" alt="logo" src={makeup1} />
          <img alt='img' src={makeupS1} />
          <img alt='img' src={makeup2} />
          <img alt='img' src={makeup3} />
          <img alt='img' src={makeupS2} />
          <img alt='img' src={makeup4} />
          <img alt='img' src={makeup6} />
        </div>


        <div className="column model">
          <img alt='img' src={model1} />
          <img alt='img' src={model2} />
          <img alt='img' src={model3} />
          <img alt='img' src={kari2} />
          <img alt='img' src={model5} />
        </div>

        <div className="column army">
          <img className="image" alt="logo" src={army1} />
          <img alt='img' src={army2} />
          <img alt='img' src={army3} />
          <img alt='img' src={army4} />
        </div>

        <div className="column family">
          <img alt='img' src={family1} />
          <img alt='img' src={family4} />
          <img alt='img' src={family2} />
          <img className="image" alt="logo" src={family3} />
          <img className="image" alt="logo" src={family5} />
        </div>
      </div>

    </body>
  )
}
