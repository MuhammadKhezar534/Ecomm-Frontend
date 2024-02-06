import React, { Fragment } from 'react'
import CNavbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Layout =({children})=>{
    console.log({children})
    return (
        <Fragment>
        <CNavbar/>
        {children}
        <Footer/>
        </Fragment>
    )
}

export default Layout