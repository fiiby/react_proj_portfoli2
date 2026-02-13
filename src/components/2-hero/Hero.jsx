import './hero.css'
import {SealCheckIcon, TwitterLogoIcon, InstagramLogoIcon, GithubLogoIcon, LinkedinLogoIcon} from '@phosphor-icons/react'

function Hero() {
  return (
  <>
    <section className='hero flex'>
      <div className='left-section flex'>

          <div className='parent-avatar flex'>
            <img  src='./coolava-modified.png' className='avatar' alt='my image'/>

            <div className='icon-verified'>
              <SealCheckIcon size={32} />
            </div>

            <h1 className='title'>
              software designer, founder, and amateur astronaut
            </h1>

            <p className='sub-title '>
              "to modify when apply",I’m a front-end developer who turns ideas into clean, responsive, and user-friendly digital experiences. I focus on building interfaces that look good, feel intuitive, and work smoothly across devices.
            </p>

            <div class="all-icons flex ">
              <div class="icon"><TwitterLogoIcon size={32} /></div>
              <div class="icon"><InstagramLogoIcon size={32} /></div>
              <div class="icon"><GithubLogoIcon size={32} /></div>
              <div class="icon"><LinkedinLogoIcon size={32} /></div>
            </div>
          </div>

      </div>

      <div className='right-section animation border' >
        animation
      </div>
   
    
    </section>

</>
  );
}

export default Hero