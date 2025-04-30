import React, { useRef } from 'react'
import './Contact.css'

const Contact = () => {

  const queries = JSON.parse(localStorage.getItem("queries")) || {};
  const firstnameref = useRef();
  const lastnameref = useRef();
    const emailref = useRef();
    const questionref = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = firstnameref.current.value;
        const lastname = lastnameref.current.value;
        const email = emailref.current.value;
        const question = questionref.current.value;

        if (firstname && lastname && email && question) {
            queries[`${firstname} ${lastname}`] = { email, question };
            localStorage.setItem("queries", JSON.stringify(queries));
            alert("Your query has been submitted successfully!");
            firstnameref.current.value = "";
            lastnameref.current.value = "";
            emailref.current.value = "";
            questionref.current.value = "";
        } else {
            alert("Please fill in all fields.");
        }
    }
  return (
    <>
    <div id="contact" className='contact-section'>
        <div className='contact-container'>
            <div className='form-container'>
                <form className='contact-form' action="">
                    <div className='form-name-container'>
                        <input ref={firstnameref} className='form-name' name='firstname' type="text" placeholder='firstname' />
                        <input ref={lastnameref} className='form-name' name='lastname' type="text" placeholder='lastname' />
                    </div>
                    <div >
                        <input ref={emailref} className='form-email' name='email' type="text" placeholder='Email'/>
                    </div>
                    <div >
                        <input ref={questionref} className='form-question' name='question' type="text" placeholder='your question' />
                    </div>
                    <span onClick={handleSubmit} className='form1-button'>Contact Us</span>
                </form>
            </div>
            <div className='contact-title'>
                <span className='contact-title-text'>Have you got something in your mind, Feel free to reach us out.</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact