import { useRef } from "react"
import React from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const emailref = useRef();
    const passref = useRef();
    const firstnameref = useRef();
    const lastnameref = useRef();
    const phoneref = useRef();
    const navigate = useNavigate();

    const isValidName = (name) => /^[A-Za-z]+$/.test(name);

    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    }

    const handleregister = (e) => {
        e.preventDefault();
        const Email = emailref.current.value;
        const pass = passref.current.value;
        const first = firstnameref.current.value;
        const last = lastnameref.current.value;
        const phone = phoneref.current.value;

        if (!isValidName(first) || !isValidName(last)) {
            alert("First and Last names should contain only alphabets.");
            return;
        }

        if (!isValidPassword(pass)) {
            alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[Email]) {
            alert("Email already exists.");
        } else {
            users[Email] = {
                firstname: first,
                lastname: last,
                phoneno: phone,
                password: pass,
            };
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registered successfully!");
            navigate("/login");
        }
    };

    const backtologin = () => {
        navigate("/login");
    }

    return (
        <>
            <button onClick={backtologin} className='backbutton'>&#8592; back to login</button>
            <div className='register-section'>
                <div className='register-container'>
                    <span className='register-heading'>Welcome to our page</span>
                    <div className='register-form-container'>
                        <h1 className='register-text'>Register</h1>
                        <form className='register-form' onSubmit={handleregister}>
                            <input ref={firstnameref} type="text" placeholder='Enter your Firstname' required />
                            <input ref={lastnameref} type="text" placeholder='Enter your Lastname' required />
                            <input ref={emailref} type="email" placeholder='Enter your Email' required />
                            <input ref={phoneref} type="tel" placeholder='Enter your Phone Number' required />
                            <input ref={passref} type="password" placeholder='Enter your Password' required />
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
