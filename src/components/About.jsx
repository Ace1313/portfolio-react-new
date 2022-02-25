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
   const [newTest, setNewTest] = useState(naruto);

   function testing() {
      const position = window.scrollY;
      setTest(position);
   }

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
            <div className="icons">
               <h2>What im learning</h2>
               <img className="icons-img" src={reactIcon} alt="" />
               <img className="icons-img" src={javascriptIcon} alt="" />
               <img className="icons-img" src={htmlIcon} alt="" />
               <img className="icons-img" src={cssIcon} alt="" />
            </div>
            <div className={test > 1400 ? 'show-naruto' : 'hide-naruto'}>
               <img className="naruto" src={naruto} alt="" />
            </div>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .about_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 250px 400px 100px 400px 200px;
      justify-items: center;
   }

   .naruto {
      height: 200px;
   }

   .show-naruto {
      opacity: 1;
      transition: 5s;
   }

   .hide-naruto {
      opacity: 0;
      transition: 5s;
   }

   .profile_img {
      padding: 3rem;
      width: 100%;
      display: flex;
      justify-content: end;
   }

   .icons {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      padding: 2rem;
   }

   .icons-img {
      width: 50px;
      height: 50px;
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

      .p_text {
         grid-column-start: 1;
      }
      img {
         height: 180px;
         width: 180px;
      }
      .like_text {
         grid-row-start: 4;
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
      .icons {
         grid-row-start: 5;
         grid-column-start: 1;
         flex-direction: row;
         padding: 2rem;
      }

      .icons-img {
         width: 50px;
         height: 50px;
      }
      .naruto {
         display: none;
      }
   }
`;

export default About;
