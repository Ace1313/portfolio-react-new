import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsClipboard } from 'react-icons/bs';
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
         <h1>contact</h1>

         <div className="icons">
            <span className="linked">
               <BsLinkedin />
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
   background: #444343;
   height: 50vh;

   h1 {
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      font-size: 45px;
   }
   .icons {
      font-size: 40px;
      display: flex;
      justify-content: space-evenly;
   }
   .email {
      transition: transform 2.5s;
   }

   .email:hover {
      transition: all ease-in-out 1s;
      transform: scale(1.2);
      color: #e6e4e4;
   }

   .linked {
      transition: transform 2.5s;
   }

   .linked:hover {
      transition: all ease-in-out 1s;
      transform: scale(1.2);
      color: #e6e4e4;
   }

   .message {
      display: flex;
      justify-content: flex-end;
      width: 42%;
      margin: auto;
   }

   span {
      cursor: pointer;
   }
`;

export default Contact;
