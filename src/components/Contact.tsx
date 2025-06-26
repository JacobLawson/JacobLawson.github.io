import React, { useRef, useState } from 'react';
import '../assets/styles/About.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  return (
    <div className="container" id="contact">
		<div className="contact-box">
			<h1>Contact</h1>
			<p>Email: jacoblawsondeveloper@gmail.com</p>
		</div>
	</div>);
}

export default Contact;