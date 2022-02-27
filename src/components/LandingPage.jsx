import styled from 'styled-components';
import backgroundImage from '../assets/background.png';
import backgroundPhone from '../assets/background-phone.png';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
   let navigate = useNavigate();

   function projectsHandler() {
      navigate('/projects');
   }

   return (
      <LandinPageWrapper>
         <div className="container">
            <h1 className="name_text">
               [ <span className="a_letter">A</span>LEKSANDER CADJO ]
            </h1>
            <h1 className="developer_text"> {'{FRONT-END WEB DEVELOPER}'} </h1>
            <h2 className="skills_text">
               React . JavaScript . HTML . CSS . NODE.js
            </h2>
            <button className="btn-animation" onClick={projectsHandler}>
               projects
            </button>
         </div>
      </LandinPageWrapper>
   );
}

const LandinPageWrapper = styled.div`
   height: 100vh;

   .btn-animation {
      position: relative;
      background: -webkit-linear-gradient(to left, #5f27cd 10%, #218c74 100%);
      background: -moz-linear-gradient(to left, #5f27cd 10%, #218c74 100%);
      background: linear-gradient(to left, #5f27cd 10%, #218c74 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border: none;
      text-transform: uppercase;
      font-size: 48px;
      transition: 0.5s;
      overflow: hidden;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #00000090);
      cursor: pointer;
      font-weight: bolder;
      width: 32%;
   }

   .btn-animation:hover {
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      box-shadow: 0 0 60px #ff6348;
      transition-delay: 0.3s;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #00000024);
   }

   .btn-animation:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 5px solid #48ff85;
      border-left: 5px solid #48ff85;
      transition: 0.5s;
      transition-delay: 0.5s;
   }
   .btn-animation:hover:before {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
   }
   .btn-animation:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 5px solid #ff6348;
      border-right: 5px solid #ff6348;
      transition: 0.5s;
      transition-delay: 0.5s;
   }
   .btn-animation:hover:after {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
   }

   .container {
      background-image: url(${backgroundImage});
      height: 80vh;
      display: grid;
      grid-template-rows: 180px 100px 100px 150px;
      justify-content: center;
      justify-items: center;
      width: 50%;
      margin: auto;
      margin-top: 2rem;
      padding: 1rem;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.8;
   }

   .skills_text {
      letter-spacing: 6px;
      font-size: 32px;
   }

   h2 {
      color: whitesmoke;
   }

   .skills_icons {
      width: 100%;
      justify-content: space-between;
      display: flex;
      padding: 0.5rem 5rem 0.5rem 5rem;
   }

   img {
      height: 25px;
      width: 25px;
   }

   .developer_text {
      font-size: 63px;
      letter-spacing: 2.6px;
      background: #ff6348;
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   .name_text {
      font-size: 60px;
      letter-spacing: 6px;
      color: whitesmoke;
      animation: flicker 4s linear infinite, glow 6500ms linear infinite 4000ms;
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
      height: 4rem;
      width: 9rem;
      background-color: purple;
      border: 2px solid white;
      cursor: pointer;
      transition: border-color 0.5s, background-color 0.5s, color 0.5s;
   }

   button:hover {
      background-color: aquamarine;
      transition: all 0.5s ease-in-out;
      border-color: transparent;
      transform: translateY(-3px);
   }

   @media screen and (max-width: 600px) {
      .container {
         width: 100%;
         background-image: url(${backgroundPhone});
      }

      .developer_text {
         font-size: 20px;
         font-weight: bolder;
      }
      .name_text {
         font-size: 24px;
         font-weight: bolder;
         text-align: center;
         letter-spacing: 2px;
      }
      .skills_text {
         font-size: 15px;
         letter-spacing: 2px;
      }
      .skills_icons {
         display: none;
      }
      .btn-animation {
         width: 40%;
         font-size: 20px;
      }
   }
`;

export default LandingPage;
