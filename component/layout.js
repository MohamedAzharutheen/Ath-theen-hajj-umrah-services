import React from 'react'
import Navbar from './header-section/navbar'
import TopHeader from './header-section/top-header'
import Footers from './footers'

export default function Layout({children}) {
  return (
   <>
   <TopHeader/>
   <Navbar/>
   {children}
   <Footers/>
   </>
  )
}
