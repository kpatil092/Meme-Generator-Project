import React from 'react'

function Header() {
  return (
    <header className='header'>
        <img 
            src="../../images/troll_face.png" 
            className='header--image'
            alt="troll" />
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React Project</h4>
    </header>
  )
}

export default Header