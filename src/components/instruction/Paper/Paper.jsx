import React from 'react'
import './Paper.css'

export default function Paper() {

  const items = [
    { src: "/blue/newspaper.png", alt: "", description: "Newspaper" },
    { src: "/blue/magazine.png", alt: "", description: "Magazine" },
    { src: "/blue/birthday_card.png", alt: "", description: "Greeting cards" },
    { src: "/blue/notepad.png", alt: "", description: "Notebook" },
    { src: "/blue/calendar.png", alt: "", description: "Calendar" },
    { src: "/blue/paper.png", alt: "", description: "Colored paper" }
  ];

  return (
    <div className='Paper'>
      <p>Blue - Paper</p>
      <div className='blue_container'>
        <img src="/blue.png" alt="" />
        <div className='blue_photo'>
          <p>Examples</p>
          <div className='blue_photos'>
            {items.map((item, index) => (
              <div className='photo_paper' key={index}>
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
