import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1065!",
        "template_1065!",
        form.current,
        "1B8AGqwVgYh5ogquV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p>If you'd like to reach out, feel free to drop a message below or contact me via social links.</p>

      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send Message</button>
          {success && (
            <div className="success-popup">
              <span className="close-btn" onClick={() => setSuccess(false)}>&times;</span>
              <div className="popup-content">
                <span className="check-icon">✔</span>
                <p>Message sent successfully!</p>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="contact-links">
        <a href="mailto:ahmadtaiwo15@gmail.com" target="_blank">
          <FaEnvelope size={20} />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/ahmad-taiwo" target="_blank">
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Solataiwo-15" target="_blank">
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>
        <a href="https://www.behance.net/ahmadtaiwo15" target="_blank">
          <FaBehance size={20} />
          <span>Behance</span>
        </a>
      </div>

    </div>
  );
};

export default Contact;
