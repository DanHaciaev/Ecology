import React from 'react'
import './Food.css'

export default function Food() {

  const items = [
    { src: "/black/fish_bone.png", alt: "", description: "Bones from food products" },
    { src: "/black/fruit.png", alt: "", description: "Fruits" },
    { src: "/black/pizza.png", alt: "", description: "Food" },
    { src: "/black/coffee_bean.png", alt: "", description: "Coffee" },
    { src: "/black/condiments.png", alt: "", description: "Seasonings" },
    { src: "/black/spices.png", alt: "", description: "Spices" }
  ];

  return (
    <div className='Food'>
      <p>Black - Food waste</p>
      <div className='black_container'>
        <img src="/black.png" alt="" />
        <div className='black_photo'>
          <p>Examples</p>
          <div className='black_photos'>
            {items.map((item, index) => (
              <div className='photo_food' key={index}>
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
