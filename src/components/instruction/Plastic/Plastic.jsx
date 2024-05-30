import React from 'react'
import './Plastic.css'

export default function Plastic() {

  const items = [
    { src: "/yellow/mineral_water.png", alt: "", description: "Plastic bottles" },
    { src: "/yellow/plastic_bag.png", alt: "", description: "Bags" },
    { src: "/yellow/shampoo.png", alt: "", description: "Shampoos" },
    { src: "/yellow/can.png", alt: "", description: "Tin Cans" },
    { src: "/yellow/bucket.png", alt: "", description: "Plastic buckets" },
    { src: "/yellow/milk.png", alt: "", description: "Milk cartons" }
  ];

  return (
    <div className='Plastic'>
      <p>Yellow - Plastic</p>
      <div className='yellow_container'>
        <img src="/yellow.png" alt="" />
        <div className='yellow_photo'>
          <p>Examples</p>
          <div className='yellow_photos'>
            {items.map((item, index) => (
              <div className='photo_plastic' key={index}>
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
