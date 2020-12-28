import React from 'react';
import './photos.scss';
import brows1 from "../../../images/brows1.jpg";
import brows2 from "../../../images/brows2.jpg";
import brows3 from "../../../images/brows3.jpg";
import brows4 from "../../../images/brows4.jpg";

export const PhotoGrid = () => {
  return (
    <body id='gallery'>
      <h1 className='galleryHeader'>Gallery</h1>
      <div className="row">

        <div className="column">
          <img className="image" alt="logo" src={brows2} />
          <img alt='img' src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
          <img alt='img' src={brows4} />
          <img alt='img' src={brows1} />
          <img alt='img' src="https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          <img alt='img' src="https://images.unsplash.com/photo-1512207576147-99bc3066b621?ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80" />
        </div>


        <div className="column">
          <img alt='img' src={brows1} />
          <img alt='img' src="https://images.unsplash.com/photo-1512495967160-4e815a64fba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
          <img alt='img' src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
          <img alt='img' src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
          <img alt='img' src={brows2} />
        </div>

        <div className="column">
          <img className="image" alt="logo" src={brows3} />
          <img alt='img' src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" />
          <img alt='img' src={brows2} />
          <img alt='img' src={brows1} />
          <img alt='img' src="https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          <img alt='img' src="https://images.unsplash.com/photo-1512207576147-99bc3066b621?ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80" />
        </div>

        <div className="column">
          <img alt='img' src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          <img alt='img' src="https://images.unsplash.com/photo-1512495967160-4e815a64fba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
          <img className="image" alt="logo" src={brows3} />
          <img alt='img' src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
        </div>
      </div>

    </body>
  )
}
