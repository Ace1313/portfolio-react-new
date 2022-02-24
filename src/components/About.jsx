import React from 'react';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';
import profile from '../assets/profilbild.png';

function About() {
   return (
      <Wrapper>
         <div id="about-me" className="about_container">
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
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 250px 400px 300px;
      justify-items: center;
   }

   .profile_img {
      padding: 3rem;
      width: 100%;
      display: flex;
      justify-content: end;
   }

   img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      filter: grayscale(100%);
   }

   h1 {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-column-end: 3;
      text-decoration: underline;
      text-transform: uppercase;
      font-size: 8rem;
      letter-spacing: 4px;
      height: 8rem;
      color: #f7ca77;
      text-shadow: 0 0 7px #ffffff8f, 0 0 10px #fff, 0 0 21px #ffffff6e,
         0 0 42px #fd974489, 0 0 82px #fd97449d, 0 0 92px #fd9744a6,
         0 0 102px #fd974496, 0 0 151px #fd97447f;
   }

   .p_text {
      display: flex;
      align-items: center;
   }

   p {
      width: 45%;
      text-align: start;
      font-size: 23px;
      letter-spacing: 0.5px;
   }

   .like_text {
      padding: 2rem;
      font-size: 30px;
      display: flex;
      grid-column-start: 1;
      grid-column-end: 3;
   }

   .heart {
      color: #ff7f50;
   }

   .heart:hover {
      transform: translateY(-3px);
      transition: all ease-out 0.3s;
      color: red;
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
         width: 100%;
         padding: 1rem;
      }
      img {
         height: 180px;
         width: 180px;
      }
      .like_text {
         grid-row-start: 3;
         font-size: 20px;
         justify-content: center;
         flex-direction: column;
      }
      .profile_img {
         grid-row-start: 2;
         justify-content: center;
         align-items: center;
         padding: 1rem;
      }
   }
`;

export default About;
