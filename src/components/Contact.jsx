import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Contact() {
   const [copySuccessMessage, setCopySuccessMessage] = useState('');
   const [instructions, setInstructions] = useState('');
   const email = 'alex.cadjo@hotmail.com';

   useEffect(() => {
      const timer = setTimeout(() => {
         setCopySuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
   }, [copySuccessMessage]);

   function copyEmail() {
      navigator.clipboard.writeText(email);
      setCopySuccessMessage(`email was copied to clipboard`);
      setInstructions('');
   }

   function showInstructions() {
      if (copySuccessMessage) {
         return;
      }
      setInstructions(`Click to copy email`);
   }

   function hideInstructions() {
      setInstructions('');
   }
   return (
      <Wrapper>
         <h1>Contact me</h1>

         <div id="contact" className="icons">
            <span className="linked">
               <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aleksander-cadjo-017790205/"
               >
                  <BsLinkedin />
               </a>
            </span>
            <span className="linked">
               <a target="_blank" href="https://github.com/Ace1313">
                  <BsGithub />
               </a>
            </span>

            <span
               className="email"
               onMouseOut={hideInstructions}
               onMouseOver={showInstructions}
               onClick={copyEmail}
            >
               <FiMail />
            </span>
         </div>
         <p className="message">
            {copySuccessMessage} {instructions}
         </p>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   width: 98%;
   margin: auto;
   display: grid;
   grid-template-rows: 60px 180px 40px;
   padding: 1.5rem;
   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
   border: 18px dotted;
   border-color: #ff6348;
   background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
   background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
   background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;

   h1 {
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      font-size: 55px;
      letter-spacing: 3px;
   }
   .icons {
      font-size: 40px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-content: center;
      align-items: center;
      padding: 1rem;
   }

   .email {
      transition: transform 2.5s;
      color: white;
   }

   .email:hover {
      transition: all ease-in-out 1s;
      transform: scaleY(1.2);
      color: black;
   }

   .linked:hover {
      transition: all ease-in-out 1s;
      transform: scale(1.2);
      color: #e6e4e4;
      cursor: pointer;
   }

   .message {
      display: flex;
      justify-content: center;
      padding: 1rem 0rem 1rem 0rem;
   }
   a {
      color: white;
      transition: transform 2.5s;
   }

   a:hover {
      color: black;
   }

   span {
      cursor: pointer;
   }

   @media screen and (max-width: 600px) {
      h1 {
         font-size: 2rem;
      }
      border: 15px dotted orange;
      height: 0%;
   }
`;

export default Contact;
