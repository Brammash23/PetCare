import React from 'react'
import { Navbar } from './Navbar'
import { Adopted } from './Adopted'
import { Unadopted } from './Unadopted'


export const Admin = () => {
  return (
   <>
   
   <Navbar />
   <Adopted />
   <Unadopted />
   </>
  )
}
