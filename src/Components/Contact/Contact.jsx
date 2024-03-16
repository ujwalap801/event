import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "865e8122-06d1-4848-ac1f-25c9c917c7d1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>Feel free to reach out through contact form or find our contact infomation below.
            Your feedback, questions , and suggestions are important to us as we strike to provide exceptional service to our events
        </p>
        <ul>
            <li><img src={mail_icon} alt=''/>ujwala@gmail.com</li>
            <li> <img src={phone_icon} alt=''/>(+91)8919914471</li>
            <li> <img src={location_icon} alt=''/>Uppal <br/>Hyderabad</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='enter your name' required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>

                <label>Write your message here</label>
                <textarea name='message'  rows="6" placeholder='enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now 
                <img src={white_arrow} alt="" /></button>
            </form>

            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact