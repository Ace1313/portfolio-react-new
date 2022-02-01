import styled from 'styled-components';
import backgroundImage from '../assets/background.png';

function LandingPage() {
   return (
      <LandinPageWrapper>
         <h1>ALEKSANDER</h1>
         <h1 className="developer_text"> {'{FRONT-END WEB DEVELOPER}'} </h1>
         <h2>React . JavaScript . HTML . CSS . NODE.js</h2>
         <button>PROJECTS</button>
      </LandinPageWrapper>
   );
}

const LandinPageWrapper = styled.div`
   background-image: url(${backgroundImage});
   height: 80vh;
   display: grid;
   grid-template-rows: 150px 100px 110px 150px;
   justify-content: center;
   justify-items: center;
   width: 50%;
   margin: auto;
   margin-top: 2rem;
   padding: 1rem;
   background-repeat: no-repeat;
   background-position: center;
   opacity: 0.8;

   .developer_text {
      font-size: 55px;
      letter-spacing: 2.6px;
   }

   button {
      border-radius: 10px;
      height: 5rem;
      width: 5rem;
      background-color: purple;
   }

   @media screen and (max-width: 600px) {
      width: 100%;

      .developer_text {
         font-size: 18px;
         font-weight: bolder;
      }
   }
`;

export default LandingPage;
