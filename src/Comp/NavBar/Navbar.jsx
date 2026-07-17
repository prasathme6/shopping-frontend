import React from 'react'
import Menu from './Menu'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
        <nav className='w-[100vw] h-[70px] bg-black text-white flex justify-between align-middle shadow-2xl'>
            <Logo/>
            <Menu/>
        </nav>
    </>
  )
}
export default Navbar