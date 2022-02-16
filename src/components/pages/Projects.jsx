import styled from 'styled-components';
import projects from '../../assets/projects.jpg';
import { projectObjects } from '../../projectData';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Projects() {
   console.log(projectObjects);
   return (
      <Wrapper>
         <section className="container">
            <img className="project_background" src={projects} alt="" />
            <a className="arrow" href="#projectsLink">
               <AiOutlineArrowDown className="arrow" />
            </a>
            {projectObjects.map((item) => (
               <main
                  id="projectsLink"
                  className={`main_card card_container${item.id}`}
                  key={item.id}
               >
                  <article className="card">
                     <div className="card_image">
                        <img className="project_img" src={item.img} alt="test" />
                     </div>
                  </article>
                  <article>
                     <h3> {item.techStack} </h3>
                     <p>{item.decsription}</p>
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
      grid-template-rows: 1fr 1fr 1fr 1fr;
      background: #3a4fda;
      background: -webkit-linear-gradient(bottom right, #2034b3, #18051c);
      background: -moz-linear-gradient(bottom right, #2034b3, #18051c);
      background: linear-gradient(to top left, #1c2b8f, #200725);
      background-repeat: no-repeat;
      scroll-behavior: smooth;
   }

   .arrow {
      color: white;
      font-size: 7.5rem;
      position: absolute;
      justify-self: center;
      margin-top: 23.4rem;
      background: orange;
      border-radius: 50%;
      opacity: 0.7;
   }

   .arrow:hover {
      opacity: 1;
   }

   .project_background {
      height: 70%;
      width: 100%;
      object-fit: cover;
      grid-column-start: 1;
      grid-column-end: 3;
      border-radius: 50%;
      padding: 2rem;
      box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);
   }

   .main_card {
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
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
      cursor: pointer;
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
      font-family: sans-serif;
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
      }
      .main_card {
         display: flex;
         flex-direction: column;
      }
      .card_container1 {
         grid-column-start: 1;
         grid-row-start: 1;
      }
      .card_container2 {
         grid-column-start: 1;
         grid-row-start: 2;
      }
      .arrow {
         display: none;
      }
   }
`;

export default Projects;
