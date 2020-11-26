import React from 'react'
import {Navbar} from './Navbar'

export const Header = () => {
  return (
    <>
    <div className="header">
    {/* <Navbar /> */}
    <header>
    <h1 className='text-center h1Header'><em>Kari Conquers the World</em></h1>
    <h3 className='text-center'>By Monroe Permanent Cosmetics</h3>
    </header>
    <Navbar />
    </div>
    </>
  )
}
