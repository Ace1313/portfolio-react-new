import styled from 'styled-components';
import ljudio from '../../assets/ljudio.png';
import { projectObjects } from '../../projectData';

function Projects() {
   console.log(projectObjects);
   return (
      <Wrapper>
         <section className="testar">
            {projectObjects.map((item) => (
               <main className={`test test${item.id}`} key={item.id}>
                  <article className="card">
                     <div className="card_image">
                        <img src={item.img} alt="test" />
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
   .testar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      background: #3a4fda;
      background: -webkit-linear-gradient(bottom right, #2034b3, #18051c);
      background: -moz-linear-gradient(bottom right, #2034b3, #18051c);
      background: linear-gradient(to top left, #1c2b8f, #200725);
      background-repeat: no-repeat;
   }

   .test {
      padding: 2rem;
   }

   .test1 {
      grid-row-start: 4;
   }

   .test2 {
      grid-row-start: 2;
      grid-column-start: 2;
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

   img {
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
      .testar {
         display: grid;
         grid-template-rows: 1fr 1fr 1fr;
         grid-template-columns: auto;
      }
      .test2 {
         grid-column-start: 1;
         grid-row-start: 2;
      }
      .test1 {
         grid-column-start: 1;
         grid-row-start: 3;
      }
   }
`;

export default Projects;
