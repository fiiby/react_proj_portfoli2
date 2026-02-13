import './Contact.css'
import {EnvelopeSimpleIcon} from '@phosphor-icons/react'

const  Contact = () => {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'> <EnvelopeSimpleIcon size={32} />
          </span>
          Contact Us
          </h1>
          <p className='sub-title'>
            contact us for more information when publishing new stuff and get notified!
          </p>
          <div class="flex">
            <form>
              <div className='flex'>
                <label htmlFor="id">Email Address:</label>
                <input type="email" name='' id="email" required />
              </div>
         
              <div className="flex" style={{marginTop: "24px"}}>
                <label  htmlFor="message">Your  Message:</label>
                <textarea name="" id="message" required></textarea>
              </div>
              
                <button className='submit'>submit</button>
                </form>

            <div className="animation">animation</div>
          </div>
    </section>
  );
}

export default Contact