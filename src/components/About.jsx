import React from 'react';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';
import profile from '../assets/profilbild.png';

function About() {
   return (
      <Wrapper>
         <div className="about_container">
            <h1>About me</h1>
            <div className="profile_img">
               <img src={profile} alt="" />
            </div>
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
               <li>
                  <span>
                     <BsHeartFill className="heart" />
                     <span className="span_heart">Programming</span>
                  </span>
               </li>
               <li>
                  <span>
                     <BsHeartFill className="heart" />
                     <span className="span_heart">Gaming</span>
                  </span>
               </li>
               <li>
                  <span>
                     <BsHeartFill className="heart" />
                     <span className="span_heart">Udemy</span>
                  </span>
               </li>
               <li>
                  <span>
                     <BsHeartFill className="heart" />
                     <span className="span_heart">Dogs</span>
                  </span>
               </li>
            </div>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .about_container {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 250px 400px 500px;
      justify-items: center;
   }

   .profile_img {
      padding: 2rem;
      width: 100%;
      display: flex;
      justify-content: center;
   }

   img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      filter: grayscale(100%);
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
      letter-spacing: 0.5px;
   }

   .like_text {
      padding: 2rem;
      font-size: 30px;
      display: flex;
      flex-direction: column;
   }

   .heart {
      color: #ff7f50;
   }
   li {
      list-style: none;
      padding: 0.5rem;
   }
   .span_heart {
      padding: 1rem;
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
      img {
         height: 200px;
         width: 200px;
      }
      .like_text {
         grid-row-start: 6;
         font-size: 20px;
         justify-content: center;
      }
      .profile_img {
         grid-row-start: 2;
         justify-content: center;
      }
   }
`;

export default About;
