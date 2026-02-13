import './main.css'
import {LinkIcon,GithubLogoIcon,ArrowRightIcon} from '@phosphor-icons/react'


function Main() {
  return (
<main className='flex'>
<section className='flex left-section'>
<button className='active'>all projects</button>
<button>HTML & CSS</button>
<button>Javascript</button>
<button>React</button>
<button>Node &Express</button>
</section>

<section class="flex right-section">
   {["aa", "bb","cc", 1, 7].map((item) => {
    return(
<article key={item} className='card'>
  <img src='./pexels-fauxels.jpg'  style={{width:"266px"}}  alt=' '/> 

  <div  style={{width:"266px"}} className="card box">

    <h1 class="title">Landing page 2 </h1>
      <p class="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia! Itaque non quidem!.</p>


      <div class="flex icons">

          <div style={{gap: "11px"}} className='flex'>

            <a href=''>
              <div className='icon-link1'><LinkIcon size={24} /></div>
              </a>
            <a href=''>
              <div className='icon-link1'><GithubLogoIcon size={24} /></div>
              </a>
          </div>
          
          <a href='' className='flex link '>more 
            <span className='flex'>
            <ArrowRightIcon size={20} />
            </span>
        </a>

      </div>
    
  </div>
   </article>
    )
   })}
</section>

</main>
  )
}

export default Main