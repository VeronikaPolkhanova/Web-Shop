import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import React from 'react';
import './styles.css'

function Banner(props) {
    const {banner1, banner2, banner3} = props;

    return (
        <div className='banner-container'>
            <Carousel
                plugins={[
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 1000,
                        }
                    },
                ]}
                animationSpeed={1000}
            >
                <img className="banner" src={banner1} alt='banner'/>
                <img className="banner" src={banner2} alt='banner'/>
                <img className="banner" src={banner3} alt='banner'/>
            </Carousel>
        </div >
    )
}

export default Banner;
