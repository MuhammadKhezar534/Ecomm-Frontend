import React from 'react';
import './styles.css';

const SliderDots = (props) => {
    const { active, onClick } = props;

    const className = `sliderDot ${active ? "activeSliderDot" : ''}`;

    return (
        <button className={className} onClick={(e) => {
            e.preventDefault();
            onClick();
        }} />
    );
}

export default SliderDots;