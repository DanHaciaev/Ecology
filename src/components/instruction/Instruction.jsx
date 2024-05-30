import React from 'react'
import './Instruction.css'
import { Link } from 'react-router-dom'

export default function Instruction() {
  return (
    <div className='Instruction'>
      <p>Container colors and what to dispose of in them</p>
      <p>Click on a container to learn more.</p>
      <div className='containers'>
      <Link to='/instruction/non-recyclable'><img src="/red.png" alt=""/></Link>
      <Link to='/instruction/plastic'><img src="/yellow.png" alt=""/></Link>
      <Link to='/instruction/glass'><img src="/green.png" alt=""/></Link>
      <Link to='/instruction/paper'><img src="/blue.png" alt=""/></Link>
      <Link to='/instruction/food'><img src="/black.png" alt=""/></Link>
      </div>

      
    </div>
  )
}
