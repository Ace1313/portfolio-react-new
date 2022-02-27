import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavbarLinks() {
   return (
      <NavbarLinksWrapper>
         <li>
            <Link to="/projects">Projects</Link>
         </li>
         <li>
            <a href="#contact">Contact</a>
         </li>
      </NavbarLinksWrapper>
   );
}

const NavbarLinksWrapper = styled.ul`
   display: flex;
   list-style: none;
   width: 30%;
   justify-content: space-evenly;
   padding: 0rem 2rem 0rem 2rem;

   a {
      color: #6b0b0b;
      text-decoration: none;
      font-size: 20px;
   }

   @media screen and (max-width: 600px) {
      width: 100%;
   }
`;

export default NavbarLinks;
