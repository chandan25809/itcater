import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  const form = useRef();
  const { fullname, email, telephone,subject, message } = useState(" ")
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2cqtp4b', 'template_7zd2cog',
    form.current, 'user_2xfMNOpguT8ZrFMptfO4m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div id="contact" class='contactBlock'>
<div class="contact-form">
        <div class="first-container">
            <div class="info-container">
                {/* <div><img class="icon" />
                    <h3>Address</h3>
                    <p>8144 Pitkin Road, Frisco, Texas 75036, USA</p>
                    <p>210 15th Avenue SE, Calgary AB T2G 0B5, Canada</p>
                </div> */}
                <div> <img class="icon" />
                    <h3>Addresses</h3>
                    <p>8144 Pitkin Road, Frisco, Texas 75036, USA</p>
                    <p>210 15th Avenue SE, Calgary AB T2G 0B5, Canada</p>
                </div>
                <div> <img class="icon" />
                    <h3>Lets Talk</h3>
                    <p>+1 248 247 8457</p>
                    <p>+1 214 469 9589</p>
                </div>
                <div><img class="icon" />
                    <h3>General Support</h3>
                    <p>hr@itcater.com</p>
                </div>
            </div>
        </div>
        <div class="second-container">
            <h2>Send Us A Message</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div class="form-group"><label for="name-input">Tell us your Full name*</label><input id="name-input"name="fullname" type="text" placeholder="Full name" required="required" /></div>
                <div class="form-group"><label for="email-input">Enter your email*</label><input id="email-input" name="email" type="text" placeholder="Eg. example@email.com" required="required" /></div>
                <div class="form-group"><label for="phone-input">Enter phone number*</label><input id="phone-input" name="telephone" type="text" placeholder="Eg. +1 800 000000" required="required" /></div>
                <div class="form-group"><label for="message-textarea">Message</label><textarea id="message-textarea" name="message" placeholder="Write us a message"></textarea></div><button>Send message</button>
            </form>
        </div>
    </div>
    </div>
  );
}

export default AppContact;