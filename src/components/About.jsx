import React from 'react';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';

function About() {
   return (
      <Wrapper>
         <div className="about_container">
            <h1>About me</h1>
            <div className="p_text">
               <p>
                  My name is Alex and currently studing to become a frontend
                  developer at Jensen yrkeshögskola. Im 30 years old and living in
                  Gothenburg, Sweden. So for i really enjoy coding and learning as
                  much as possible. My <span className="goal">goal</span> is to
                  become a developer with focus on react and javascript.
               </p>
            </div>
            <div className="like_text">
               <div>
                  <BsHeartFill className="heart" />
                  Programming
               </div>
               <div>
                  <BsHeartFill className="heart" />
                  Dogs
               </div>
               <div>
                  <BsHeartFill className="heart" />
                  Udemy
               </div>
               <div>
                  <BsHeartFill className="heart" />
                  Gaming
               </div>
            </div>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .about_container {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 250px 300px 50px 50px 50px;
      height: 100vh;
      justify-items: center;
   }

   h1 {
      text-decoration: underline;
      text-transform: uppercase;
      font-size: 8rem;
      letter-spacing: 4px;
      background: purple;
      height: 8rem;
   }

   .p_text {
      display: flex;
      justify-content: center;
   }

   p {
      width: 25%;
      text-align: start;
      font-size: 23px;
      letter-spacing: 1px;
   }

   .like_text {
      padding: 2rem;
      font-size: 30px;
   }

   .heart {
      color: #ff7f50;
   }

   @media screen and (max-width: 600px) {
      h1 {
         font-size: 4rem;
         background: none;
         letter-spacing: 0;
         text-align: end;
      }
      p {
         text-align: start;
         font-size: 15px;
         width: 70%;
      }
   }
`;

export default About;
