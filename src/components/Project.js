import styled from "styled-components";
import TagList from "./TagList";
const Project = (props) => {
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
  `;
  const StyledImageDiv = styled.div`
    display: flex;
    padding-top: 0.5rem;
  `;
  const StyledImage = styled.img`
    height: auto;
    object-fit: cover;
    min-width: 200px;
  `;
  const StyledCard = styled.div`
    display: flex;
    padding-left: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const StyledTitle = styled.h3`
    margin-bottom: 0.5rem;
  `;
  const StyledCardBody = styled.p`
    margin-top: 0.5rem;
    justify-content: center;
    align-items: center;
    text-align: justify;
  `;
  
  return (
    <div className="project">
      <StyledContainer>
        <StyledImageDiv>
          <StyledImage
            src= { props.imageUrl }
            alt="pic"
          />
        </StyledImageDiv>
        <StyledCard>
          <StyledTitle>{ props.projectTitle }</StyledTitle>
          <StyledCardBody>{ props.description }</StyledCardBody>
          <TagList tags={ props.tags } />
        </StyledCard>
      </StyledContainer>
    </div>
  );
};

export default Project;
