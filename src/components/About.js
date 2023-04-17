import Project from "./Project";
import styled from "styled-components";
import Navbar from "./Navbar";
const About = () => {
    const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    `
    const StyledContentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    `

    const StyledPageTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2vw;
    font-size: 10vw;
    `
    return ( 
        <StyledContainer>
            <Navbar />
            <StyledPageTitle>Portfolio</StyledPageTitle>
            <StyledContentDiv>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            </StyledContentDiv>
            
        </StyledContainer>
     );
}
 
export default About;