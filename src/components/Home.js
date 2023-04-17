import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const Home = () => {
  // Define a new keyframe animation for the background gradient
  const moveGradient = keyframes`
    0% {
    background-position: 0 50%;
    }
    50% {
    background-position: 100% 50%;
    }
    100% {
    background-position: 0 50%;
    }
`;

  // Define a new styled component for the page container with the animated gradient
  const PageContainer = styled.div`
    background: linear-gradient(to bottom right, #042b12, #04062b);
    background-size: 400% 400%;
    animation: ${moveGradient} 15s ease infinite;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // Define a new styled component for the content container
  const ContentContainer = styled.div`
    text-align: center;
  `;

  // Define a new styled component for the heading
  const Tagline = styled.span`
    font-size: 2rem;
    color: white;
    margin: 0.5rem;
    font-family: "Comforter Brush", cursive;
  `;

  // Define a new styled component for the paragraph
  const Paragraph = styled.p`
    font-size: 3rem;
    color: white;
    margin: 0.5rem;
    font-family: "Julee", cursive;
  `;

  const StyledLink = styled(Link)`
    color: white;
    position: relative;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Comforter Brush", cursive;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1.5px;
      border-radius: 4px;
      background-color: white;
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
  `;
  return (
    <div className="home">
      <PageContainer>
        <ContentContainer>
          <Tagline>Hi, I'm</Tagline>
          <Paragraph>Nicholas Wariua</Paragraph>
          <Tagline>Software Developer</Tagline>
          <br />
          <br />
          <StyledLink to="/about">View Portfolio</StyledLink>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Home;
