import React from 'react'
import './AboutForm.css'

const AboutForm = () => {
  return (
    <div className="contect-form">
      
      <form className='form-div' action="https://formspree.io/f/xnqeqapk" method='POSt' >
        <h3 className='form-heading-1'>Send your Feedback</h3>
        <input type="text " placeholder='Username' name='Username' required autoComplete='off' />
        <input type="email " placeholder='Email' name='Email' required autoComplete='off' />
        <input type="number " placeholder='Number' name='number' required autoComplete='off' />
        <textarea name=" message" id="" cols="30" rows="4" placeholder='enter your message' required autoComplete='off'></textarea>
        <input className='submit' type="submit" value='send' />
      </form>
    </div>
  )
}

export default AboutForm
