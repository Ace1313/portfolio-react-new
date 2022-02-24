import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavbarLinks() {
   return (
      <NavbarLinksWrapper>
         <li>
            <Link to="/">About</Link>
         </li>
         <li>
            <Link to="/projects">Projects</Link>
         </li>
         <li>
            <a href="#">Contact</a>
         </li>
      </NavbarLinksWrapper>
   );
}

const NavbarLinksWrapper = styled.ul`
   display: flex;
   list-style: none;
   width: 30%;
   justify-content: space-around;

   @media screen and (max-width: 600px) {
      width: 100%;
   }
`;

export default NavbarLinks;
