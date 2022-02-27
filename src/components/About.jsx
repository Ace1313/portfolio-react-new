import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';
import profile from '../assets/profilbild.png';
import reactIcon from '../assets/react.png';
import javascriptIcon from '../assets/javascript.png';
import htmlIcon from '../assets/html5.png';
import cssIcon from '../assets/css-3.png';
import naruto from '../assets/naruto.jpg';

function About() {
   const [test, setTest] = useState(0);
   const [startAnimation, setStartAnimation] = useState(0);

   function testing() {
      const position = window.scrollY;
      const positionAnimation = window.scrollY;
      setTest(position);
      setStartAnimation(positionAnimation);
   }

   console.log(test);

   useEffect(() => {
      window.addEventListener('scroll', testing);
   }, []);

   return (
      <Wrapper>
         <div className="about_container">
            <h1>About me</h1>
            <div className="profile_img">
               <img className="profile-img" src={profile} alt="" />
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
            <div
               className={
                  startAnimation > 1000
                     ? 'start-animtaion like_text'
                     : 'hide-like-text'
               }
            >
               <span>
                  <BsHeartFill className="heart" />
                  <span className="span_heart">Programming</span>
               </span>
               <span>
                  <BsHeartFill className="heart" />
                  <span className="span_heart">Gaming</span>
               </span>
               <span>
                  <BsHeartFill className="heart" />
                  <span className="span_heart">Udemy</span>
               </span>
               <span>
                  <BsHeartFill className="heart" />
                  <span className="span_heart">Dogs</span>
               </span>
            </div>

            <div className={test > 1140 ? 'show-icons icons ' : 'hide-icons icons '}>
               <h2>What im learning</h2>
               <img className="icons-img react " src={reactIcon} alt="" />
               <img className="icons-img" src={javascriptIcon} alt="" />
               <img className="icons-img" src={htmlIcon} alt="" />
               <img className="icons-img" src={cssIcon} alt="" />
            </div>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .test img {
      height: 450px;
   }
   .about_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 250px 400px 100px 600px 100px;
      justify-items: center;
   }

   .show-icons {
      opacity: 1;
      transition: 3s;
   }

   .hide-icons {
      opacity: 0;
      transition: 1s;
   }

   h2 {
      font-size: 35px;
      border-bottom: 3px solid #ccdbe8;
      border-top: 3px solid #ccdbe8;
      padding: 1rem;
      text-transform: uppercase;
      background: #ff6348;
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      box-shadow: #ccdbe8 3px 3px 6px 0px inset,
         rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      border-radius: 5px;
   }

   .profile_img {
      padding: 3rem;
      width: 100%;
      display: flex;
      justify-content: end;
   }

   .react {
      animation: rotation 10s infinite linear;
   }

   @keyframes rotation {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }

   .icons {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      padding: 1rem;
   }

   .icons-img {
      width: 80px;
      height: 80px;
   }

   .profile-img {
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
      border-radius: 5px;
      border-bottom: solid 2px transparent;
      padding: 2rem;
      font-size: 30px;
      display: flex;
      grid-column-start: 1;
      grid-column-end: 3;
      white-space: nowrap;
      overflow: hidden;
   }

   .hide-like-text {
      opacity: 0;
      border-radius: 5px;
      border-bottom: solid 2px transparent;
      padding: 2rem;
      font-size: 30px;
      display: flex;
      grid-column-start: 1;
      grid-column-end: 3;
      white-space: nowrap;
      overflow: hidden;
   }

   .start-animtaion {
      animation: typewriter 2s steps(44) 1s 1 normal both;
   }

   @keyframes typewriter {
      from {
         width: 1%;
      }
      to {
         width: 36%;
      }
   }

   .heart {
      color: #ff7f50;
   }

   .heart:hover {
      transform: translateY(-3px);
      transition: all ease-out 0.3s;
      color: red;
   }

   .span_heart {
      padding: 1rem;
   }

   @media screen and (max-width: 600px) {
      .about_container {
         display: grid;
         grid-template-columns: none;
         grid-template-rows: 250px 300px 100px 200px 400px;
      }
      h2 {
         padding: 1rem 0rem 1rem 0rem;
      }
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

      .p_text {
         grid-column-start: 1;
      }

      .like_text {
         grid-row-start: 4;
         font-size: 20px;
         justify-content: center;
         flex-direction: column;
         box-shadow: none;
         height: 200px;
      }
      @keyframes typewriter {
         from {
            width: 1%;
         }
         to {
            width: 46%;
         }
      }

      .hide-like-text {
         width: 0%;
      }
      .profile_img {
         grid-row-start: 2;
         justify-content: center;
         align-items: center;
         padding: 1rem;
         height: 150px;
      }
      .icons {
         grid-row-start: 5;
         grid-column-start: 1;
         padding: 1rem;
      }

      .icons-img {
         width: 60px;
         height: 60px;
      }
   }
`;

export default About;
