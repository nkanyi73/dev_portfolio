import styled from "styled-components";
const Project = () => {
    const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    height: auto;
    transition: transform 0.2s ease-in-out;
    margin: 1vw;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        
    }
    `
    const StyledImageDiv = styled.div`
    display: flex;
    padding-top: 0.5rem;
    `
    const StyledImage = styled.img`
    height: auto;
    object-fit: cover;
    min-width: 200px;
    `
    const StyledCard = styled.div`
    display: flex;
    padding-left: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const StyledTitle = styled.h3`
    margin-bottom: 0.5rem;

    `
    const StyledCardBody = styled.p`
    margin-top: 0.5rem;
    justify-content: center;
    align-items: center;
    `
    return ( 
        <div className="project">
            <StyledContainer>
                <StyledImageDiv>
                    <StyledImage src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic" />
                </StyledImageDiv>
                <StyledCard>
                    <StyledTitle>React Project</StyledTitle>
                    <StyledCardBody>This project was done as a way to learn React. Click to learn more.This project was done as a way to learn React. Click to learn more.This project was done as a way to learn React. Click to learn more.This project was done as a way to learn React. Click to learn more.This project was done as a way to learn React. Click to learn more.This project was done as a way to learn React. Click to learn more.</StyledCardBody>
                </StyledCard>
            </StyledContainer>
        </div>
     );
}
 
export default Project;