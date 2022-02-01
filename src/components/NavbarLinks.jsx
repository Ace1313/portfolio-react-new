import styled from 'styled-components';

function NavbarLinks() {
   return (
      <NavbarLinksWrapper>
         <li>
            <a href="#">About</a>
         </li>
         <li>
            <a href="#">Projects</a>
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
