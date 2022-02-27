import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <NavbarWrapper>
         <h1>
            <Link className="link" to="/">
               {'{<>}'}
            </Link>
         </h1>
         <NavbarLinks />
      </NavbarWrapper>
   );
}

const NavbarWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   background-color: #091f1f;
   padding: 1rem;

   ul li a {
      position: relative;
      display: block;
      border-radius: 30%;
      color: #666;
      transition: 0.5s;
      padding: 1rem;
   }

   ul li a::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10%;
      background: #ffee10;
      transition: 0.5s;
      transform: scale(0.9);
      z-index: -1;
   }

   ul li a:hover::before {
      transform: scale(1.1);
      box-shadow: 0 0 15px #ffee10;
   }

   ul li a:hover {
      color: #ffee10;
      box-shadow: 0 0 10px #ffee10;
      text-shadow: 0 0 10px #ffee10;
   }

   .link {
      text-decoration: none;
      background: #ff6348;
      background: -webkit-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: -moz-linear-gradient(to right, #ff6348 0%, #fff200 100%);
      background: linear-gradient(to right, #ff6348 0%, #fff200 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
`;

export default Navbar;
