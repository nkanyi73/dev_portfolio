import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
    const StyledContainer = styled.div`
    margin: 1vw;
    `
    const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
    letter-spacing: 0.2vw;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        border-radius: 4px;
        background-color: black;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
  
      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    `
    return ( 
        <StyledContainer>
            <StyledLink to="/">Home</StyledLink>
        </StyledContainer>
     );
}
 
export default Navbar;