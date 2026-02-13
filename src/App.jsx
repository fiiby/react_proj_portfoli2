import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
// import './index.css'
    
import { ArrowCircleUpIcon} from '@phosphor-icons/react'

function App() {


  return (
    <>
 <div className='container'>
  <Header />
  <Hero />
   <div className='divider'/>
  <Main />
   <div className='divider'/>
   <Contact />
   <div className='divider'/>
  <Footer />
  
  <button className='scroll2top'>
    <ArrowCircleUpIcon size={32} />

  </button>
 </div>
    </>
  )
}

export default App
