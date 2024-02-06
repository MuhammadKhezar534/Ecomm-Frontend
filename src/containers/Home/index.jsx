import React from 'react'
import Layout from '../Layout'
import ImageSlider from '../../components/CSlider'

const Home =()=>{

    let images=[
        "/assets/img1.jpeg",
        "/assets/img2.jpeg",
        "/assets/img3.jpeg",
        "/assets/img4.jpeg",
        "/assets/img5.jpeg",

    ]
    return (
        <Layout>

        <ImageSlider>{images}</ImageSlider>
        </Layout>
    )
}

export default Home