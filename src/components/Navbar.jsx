import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';

function Navbar() {
   return (
      <NavbarWrapper>
         <h1>LOGO</h1>
         <NavbarLinks />
      </NavbarWrapper>
   );
}

const NavbarWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: paleturquoise;
   padding: 1rem;
`;

export default Navbar;
