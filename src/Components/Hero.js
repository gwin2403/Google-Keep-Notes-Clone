import React from 'react'
import './Hero.css'
import Menubar from './Menubar'
import Task from './Task'
export default function Hero() {
  return (
    <div className='Hero'>
        <Menubar/>
        <Task/>
    </div>
  )
}
