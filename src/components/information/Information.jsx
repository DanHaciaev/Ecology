import React from 'react'
import './Information.css'

export default function Information() {
  return (
    <div className='Information'>
      <div className='rules'>
        <p>Game Rules:</p>
        <ul style={{ listStyleType: 'disc' }}>
          <li>After pressing the "Start" button, the game begins.</li>
          <li>The player must move the item to the container of the correct color before the item disappears from the screen.</li>
          <li>The game continues until the player makes a mistake or allows the item to disappear from the screen without reaching the target.</li>
        </ul>
      </div>
    </div>
  )
}
