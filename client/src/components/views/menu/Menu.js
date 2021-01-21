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
          <div className="card">
          <h3>Microblading Services</h3>
            <ul className='ulMenu'>
              {microblading}
            </ul>

            <h3>Permanent Makeup Services</h3>
            <ul className='ulMenu'>
              {permanent}
            </ul>

            <h3>Lash Services</h3>
            <ul className='ulMenu'>
              {lash}
            </ul>

            <h3>Other Services</h3>
            <ul className='ulMenu'>
              {other}
            </ul>

          </div>
        </div>
      </div>
    </Fragment>
  )
}
