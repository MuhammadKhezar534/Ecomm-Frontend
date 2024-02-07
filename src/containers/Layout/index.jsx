import React, { Fragment } from 'react'
import CNavbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Layout =({children})=>{
    return (
        <Fragment>
        <CNavbar/>
        {children}
        <Footer/>
        </Fragment>
    )
}

export default Layout