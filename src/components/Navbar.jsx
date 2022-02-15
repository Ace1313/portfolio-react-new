import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
   let navigate = useNavigate();

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
   justify-content: space-between;
   background-color: #091f1f;
   padding: 1rem;

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
