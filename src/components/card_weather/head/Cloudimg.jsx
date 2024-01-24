import React from 'react'
import cloud from '../../../pictures/облако.png'
import rain from '../../../pictures/rain.png'
import snow from '../../../pictures/snow.png'
import rainAndSnowPictures from '../../../pictures/rainANDsnow.png'

export const CloudImg = ({ rainAndSnow }) => {
    return (
        <div>
            {rainAndSnow ? ((rainAndSnow.snow && rainAndSnow.rain) ? <img src={rainAndSnowPictures} alt="" /> : (rainAndSnow.snow ? <img src={snow} alt="" /> : (rainAndSnow.rain ? <img src={rain} alt="" /> : <img src={cloud} alt="" />)) ) : ''}
        </div>
    )
}
