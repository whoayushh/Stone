import React from 'react'
import Navbar from '../components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel
        autoPlay={true}
        transitionTime={50}
        infiniteLoop={true}
        
        >
        <div>
            <img src='client/src/assets/images/img1.jpg' />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="client/src/assets/images/img2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src='client/src/assets/images/img3.jpg' />
            <p className="legend">Legend 3</p>
        </div>
        </Carousel>
    </div>
  )
}

export default Home