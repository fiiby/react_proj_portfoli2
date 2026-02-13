import './header.css'
import { useState, useEffect } from 'react'
import {ListIcon, XCircleIcon,MoonIcon, SunDimIcon } from '@phosphor-icons/react'

const Header= () => {
  const [showModel, setShowModel]= useState(false);
    const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("light", lightMode)
  }, [lightMode])

  return (
  <header  className='flex'>
      <button onClick={(() => {setShowModel(true) })}>
      <ListIcon size={32} /> 
      </button>
    <div />
      <nav>
    <ul className='flex'>
      <li><a href="">About</a></li>
      <li><a href="">Articles</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Contact</a></li>
    </ul>
      </nav>
      <button onClick={() => setLightMode(!lightMode)}>
       {lightMode ? <SunDimIcon size={32} /> : <MoonIcon size={32} />}
      </button>
   
      {showModel && (
     <div className="fixed">
            <ul className="model">
              <li>
                 <button onClick={() => {setShowModel(false)}}>
                 <XCircleIcon size={32} />
                  </button>
              </li>
              <li><a href="">About</a></li>
              <li><a href="">Articles</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Speaking</a></li>
              <li><a href="">Contact</a></li>
            </ul>
      </div>
      )}
   
    </header>
  )
}

export default Header