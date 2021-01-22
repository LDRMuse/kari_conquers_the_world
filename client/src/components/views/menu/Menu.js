import React, { Fragment, useEffect } from 'react'
import './menu.scss';
import services from '../../../assets/list-of-services.json'

export const Menu = () => {

  const microblading = services[0].map((s) => {
    const title = s.title
    const price = s.price
    const id = s.id

    return <li key={id}>{title}, {price}</li>
  })

  const permanent = services[1].map((s) => {
    const title = s.title
    const price = s.price
    const id = s.id

    return <li key={id}>{title}, {price}</li>
  })

  const lash = services[2].map((s) => {
    const title = s.title
    const price = s.price
    const id = s.id

    return <li key={id}>{title}, {price}</li>
  })

  const other = services[3].map((s) => {
    const title = s.title
    const price = s.price
    const id = s.id

    return <li key={id}>{title}, {price}</li>
  })



  return (
    <Fragment>
      <div className="menu-header">

        <div className='body' id='service-menu'>
          <h1 className='service-menu-header'>Services</h1>
          <div id="menuBoxx" className="menuBox">
            <div className='column1'>
              <ul className='ulMenu'>
                <h3>Microblading Services</h3>
                {microblading}
              </ul>

              <ul className='ulMenu'>
                <h3>Permanent Makeup Services</h3>
                {permanent}
              </ul>
            </div>

            <div className="column2">
              <ul className='ulMenu'>
                <h3>Lash Services</h3>
                {lash}
              </ul>

              <ul className='ulMenu'>
                <h3>Other Services</h3>
                {other}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
