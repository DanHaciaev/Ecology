import React from 'react'
import './Recyclable.css'

export default function Recyclable() {

  const items = [
    { src: "/red/tape.png", alt: "", description: "Scotch tape" },
    { src: "/red/cutlery.png", alt: "", description: "Plastic cutlery" },
    { src: "/red/diaper.png", alt: "", description: "Diapers" },
    { src: "/red/medicine.png", alt: "", description: "Blister packs" },
    { src: "/red/toothbrush.png", alt: "", description: "Toothbrush" },
    { src: "/red/wipes.png", alt: "", description: "Wet wipes" }
  ];

  return (
    <div className='Recyclable'>
      <p>Red - Non-recyclable waste</p>
      <div className='red_container'>
        <img src="/red.png" alt="" />
        <div className='group_of_photo'>
          <p>Examples</p>
          <div className='photos'>
            {items.map((item, index) => (
              <div className='photo_nonrecyclable' key={index}>
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
