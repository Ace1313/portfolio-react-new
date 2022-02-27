import { useEffect, useState } from 'react';
import styled from 'styled-components';
import projects from '../../assets/projects.jpg';
import { projectObjects } from '../../projectData';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import Navbar from '../Navbar';

function Projects() {
   const [inView, setInVeiw] = useState(0);
   function testing() {
      const position = window.scrollY;
      setInVeiw(position);
   }

   useEffect(() => {
      window.addEventListener('scroll', testing);
   }, []);
   return (
      <Wrapper>
         <Navbar />
         <section className="container">
            <img className="project_background" src={projects} alt="" />
            <a className="arrow" href="#projectsLink">
               <AiOutlineArrowDown className="arrow" />
            </a>
            {projectObjects.map((item) => (
               <main
                  id="projectsLink"
                  className={
                     inView > 460
                        ? `main_card card_container${item.id} show-main`
                        : ' main_card card_container${item.id} hide-main'
                  }
                  key={item.id}
               >
                  <article className="card">
                     <div className="card_image">
                        <img className="project_img" src={item.img} alt="test" />
                     </div>
                  </article>
                  <article className="tech">
                     <h2> {item.techStack.join(' - ')} </h2>
                     <br />
                     <p>{item.decsription}</p>
                     <div className="links">
                        <a className="git" target="_blank" href={item.url}>
                           {<BsGithub />}
                        </a>
                     </div>
                     <span>Click link to see Github</span>
                  </article>
               </main>
            ))}
         </section>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 480px 480px 480px;

      padding: 0.5rem;
      justify-items: center;
   }

   .show-main {
      opacity: 1;
      transition: 3.5s;
      animation-name: slideIn;
      animation-duration: 3.5s;
      /* border: 2px solid; */
   }

   .hide-main {
      opacity: 0;
      transition: 2s;
      animation-name: slideOut;
      animation-duration: 2s;
   }

   @keyframes slideIn {
      from {
         margin-right: 190%;
         width: 100%;
      }

      to {
         margin-left: 0.2%;
         width: 100%;
      }
   }

   @keyframes slideOut {
      from {
         margin-left: 0.2%;
         width: 100%;
      }

      to {
         margin-right: 190%;
         width: 100%;
      }
   }

   span {
      text-align: center;
   }

   .tech {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      padding: 1rem;
   }

   p {
      word-wrap: break-word;
      width: 80%;
      text-align: center;
      justify-self: center;
   }

   .git {
      color: black;
   }

   .git:hover {
      color: white;
      cursor: pointer;
   }

   .links {
      justify-self: center;
      font-size: 55px;
      transition: all 0.2s ease-in-out;
      height: 0%;
      padding: 2rem;
      transition: transform 1s;
   }

   .links:hover {
      transform: scale(1.2);
      transition: all ease-in-out 0.5s;
   }

   .arrow {
      color: white;
      font-size: 6rem;
      position: absolute;
      justify-self: center;
      margin-top: 22.5rem;
      background: orange;
      border-radius: 50%;
      opacity: 0.7;
      transition: transform 750ms;
   }

   .arrow:hover {
      opacity: 1;
      transform: translateY(10px);
   }

   .project_background {
      height: 70%;
      width: 97%;
      object-fit: cover;
      grid-column-start: 1;
      grid-column-end: 3;
      padding: 2rem;
      box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);
   }

   .main_card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      border-color: #ff6348;
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      justify-items: center;
      align-items: center;
      padding: 1rem;
   }

   .card_container1 {
      grid-row-start: 2;
   }

   .card_container2 {
      grid-row-start: 3;
      grid-column-start: 2;
   }
   .card_container3 {
      grid-row-start: 4;
   }

   .card {
      width: 300px;
      height: 300px;
      border-radius: 40px;
      box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
         -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
      transition: 0.4s;
   }

   .card .card_image {
      width: inherit;
      height: inherit;
      border-radius: 40px;
   }

   .project_img {
      width: inherit;
      height: inherit;
      border-radius: 40px;
      object-fit: cover;
   }

   .card .card_title {
      text-align: center;
      border-radius: 0px 0px 40px 40px;
      font-weight: bold;
      font-size: 30px;
   }

   .card:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
         -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
   }

   .title-white {
      color: white;
   }

   .title-black {
      color: black;
   }

   @media all and (max-width: 400px) {
      .container {
         display: grid;
         grid-template-rows: 1fr 1fr 1fr;
         grid-template-columns: none;
         padding: 0rem;
      }
      .main_card {
         display: flex;
         flex-direction: column;
      }

      .project_background {
         grid-column-start: 1;
         grid-row-start: 1;
         padding: 1rem;
      }
      .card_container1 {
         grid-column-start: 1;
         grid-row-start: 2;
      }
      .card_container2 {
         grid-column-start: 1;
         grid-row-start: 3;
      }
      .arrow {
         display: none;
      }
      .show-main {
         animation: none;
      }
      .hide-main {
         animation: none;
         grid-column-start: 1;
      }
   }
`;

export default Projects;
