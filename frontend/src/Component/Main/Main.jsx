import React from 'react'
import AuthNavbar from './../components/Navbar/AuthNavbar';
import { Outlet } from 'react-router-dom';
 import Footer from './../Footer/Footer';
 import Maps from './../components/Maps/MapExample';
export default function Main({crrUser , remove}) {
  return <>

    <AuthNavbar crrUser={crrUser} remove = {remove} />
    <Outlet/>
    <Footer/>
  </>
}
