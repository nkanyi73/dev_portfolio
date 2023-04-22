import Project from "./Project";
import styled from "styled-components";
import Navbar from "./Navbar";
import DrLive from "../images/drlive.PNG";
import Consenter from "../images/Con-Home.png";
import Malighafi from "../images/malighafi.png";
import Odoo from "../images/odoo.png";
import VirtualOffice from "../images/virtualoffice.PNG";
const About = () => {
  const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const StyledContentDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  const StyledPageTitle = styled.h1`
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1vw;
    font-size: 5vw;
  `;
  const StyledClicker = styled.a`
    text-decoration: none;
    color: black;
  `;
  return (
    <StyledContainer>
      <Navbar />
      <StyledPageTitle>Portfolio</StyledPageTitle>
      <StyledContentDiv>
        <StyledClicker href="https://github.com/nkanyi73/malighafi-store">
          <Project
            imageUrl={Malighafi}
            projectTitle="Malighafi Store"
            description="The aim of this research project was to find a solution to the market model, filled with many
            middlemen, that is present between producers and buyers of raw materials. The outcome of the
            research project was an e-commerce application that allows buyers and sellers (of bulk quantities) to
            transact directly without the influence of middle men.  This was a pair programming project where I mostly worked on the PHP backend."
            tags={[
              { name: "PHP", color: "red" },
              { name: "Laravel", color: "green" },
              { name: "MySQL", color: "blue" },
              { name: "Git", color: "red" },
            ]}
          />
        </StyledClicker>
        <StyledClicker href="https://drive.google.com/drive/folders/1E_wEq_0KgHONGJI5FosLCKBEgSt_nmv5?usp=sharing">
          <Project
            imageUrl={ VirtualOffice }
            projectTitle="PowerCRM"
            description="The application is a CRM that eases the task of managing relationships with customers, by associating each entity
            with an existing customer. The application features a Customers and Contacts module as well as an Invoice Processing 
            Module. The Invoice Processing features a flow that performs knowledge extraction from invoices uploaded on the common 
            Sharepoint site. The app also retrieves site statistics from a WordPress storefront."
            tags={[
              { name: "Microsoft Power Apps", color: "red" },
              { name: "Microsoft Flow", color: "green" },
              { name: "AI Builder", color: "blue" },
              { name: "JavaScript", color: "red" },
              { name: "Sharepoint", color: "blue" },
              { name: "Dataverse", color: "green" },
            ]}
          />
        </StyledClicker>
        <StyledClicker href="https://github.com/nkanyi73/Consenter-Consent-Management-System">
          <Project
            imageUrl={Consenter}
            projectTitle="Consenter: Online Consent Management"
            description="This research project aimed at leveraging blockchain technology’s properties to create a solution
          that would allow data subjects to explicitly manage the third parties that have access to their data.
          The motivation behind this is the battered state of data privacy in the world. There is a lot of
          information in circulation that data subjects either have no idea that they consented to its
          collection or are aware but cannot restrict access."
            tags={[
              { name: "Solidity", color: "red" },
              { name: "VueJS", color: "green" },
              { name: "Express", color: "blue" },
              { name: "MySQL", color: "red" },
              { name: "Ethereum", color: "blue" },
            ]}
          />
        </StyledClicker>
        <StyledClicker href="https://github.com/nkanyi73/odoo-11">
          <Project
            imageUrl={ Odoo }
            projectTitle="Odoo Timesheet Module"
            description="This is a customized Odoo module I worked created for a company that I was interning for. The module  
            separates employees by to department and allows them to track the time spent on their daily work activities. This project
            stiffened my understanding of agile and iterative development methodologies and the importance of accurate requirements 
            collection. "
            tags={[
              { name: "Python", color: "red" },
              { name: "Odoo", color: "green" },
              { name: "XML", color: "blue" },
              { name: "ERP", color: "red" },
            ]}
          />
        </StyledClicker>
        <StyledClicker href="http://104.154.65.53/">
          <Project
            imageUrl={DrLive}
            projectTitle="Doctors Live "
            description="This project was for a mental health care services company that catered to the needs of individuals, 
            organizations, and other healthcare providers. Throughout the project, I had the opportunity to refine my skills 
            in frontend development and collaborate with my team members to achieve the project's objectives."
            tags={[
              { name: "HTML", color: "red" },
              { name: "CSS", color: "green" },
              { name: "JavaScript", color: "blue" },
            ]}
          />
        </StyledClicker>
      </StyledContentDiv>
    </StyledContainer>
  );
};

export default About;
