import React, { type JSX, type PropsWithChildren } from 'react'
import Navbar from './components/Navbar'

type Props = {
  children: JSX.Element
}

const Layout = ({children}:Props) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout