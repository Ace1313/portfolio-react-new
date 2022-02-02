import styled from 'styled-components';
import backgroundImage from '../assets/background.png';

function LandingPage() {
   return (
      <LandinPageWrapper>
         <h1 className="name_text">
            [ <span className="a_letter">A</span>LEKSANDER CADJO ]
         </h1>
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
      background: #ff6348;
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   .name_text {
      font-size: 50px;
      letter-spacing: 6px;
      color: whitesmoke;
      animation: flicker 4s linear infinite, glow 4500ms linear infinite 4000ms;
   }

   @keyframes glow {
      40% {
         text-shadow: 0 0 8px #fff;
      }
   }

   // animation name_text
   @keyframes flicker {
      2%,
      64% {
         transform: translate(1px, 0) skew(2deg);
      }
      4%,
      60% {
         transform: translate(-1px, 0) skew(-2deg);
      }
      62% {
         transform: translate(0, 0) skew(2deg);
      }
   }

   .a_letter {
      color: #0d9eb8;
      font-size: 65px;
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
      .name_text {
         font-size: 20px;
         font-weight: bolder;
      }
   }
`;

export default LandingPage;
