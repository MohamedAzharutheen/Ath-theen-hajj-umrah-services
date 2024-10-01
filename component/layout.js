import React from 'react'
import Navbar from './header-section/navbar'

export default function Layout({children}) {
  return (
   <>
   <Navbar/>
   {children}
   </>
  )
}
