import React from 'react'
import './Glass.css'

export default function Glass() {

  const items = [
    { src: "/green/glass_bottle.png", alt: "", description: "Glass bottle" },
    { src: "/green/glass_crack.png", alt: "", description: "Broken glass" },
    { src: "/green/glass_jar.png", alt: "", description: "Glass jar" },
    { src: "/green/light_bulb.png", alt: "", description: "Light bulb" },
    { src: "/green/vial.png", alt: "", description: "Glass flask" },
    { src: "/green/vitamin.png", alt: "", description: "Vitamin bottle" }
  ];

  return (
    <div className='Glass'>
      <p>Green - Glass</p>
      <div className='green_container'>
        <img src="/green.png" alt="" />
        <div className='green_photo'>
          <p>Examples</p>
          <div className='green_photos'>
            {items.map((item, index) => (
              <div className='photo_glass' key={index}>
                <img src={item.src} alt={item.alt} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
