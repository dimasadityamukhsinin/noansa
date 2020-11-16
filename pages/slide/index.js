import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel className="d-flex justify-content-center mt-5" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/bacalah.png"
                    alt="Bacalah"
                    style={{ borderRadius: '50px' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/doordash.png"
                    alt="Doordash"
                    style={{ borderRadius: '50px' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/portfolio.png"
                    alt="Portfolio"
                    style={{ borderRadius: '50px' }}
                />
            </Carousel.Item>
      </Carousel>
    );
}

export default Slide;