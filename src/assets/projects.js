import ImagePortfolioHome from "../assets/images/portfolio/portfolio_home.svg";
import ImagePortfolioSkills from "../assets/images/portfolio/portfolio_skills.svg";
import ImagePortfolioProjects from "../assets/images/portfolio/portfolio_projects.svg";
import ImagePortfolioContact from "../assets/images/portfolio/portfolio_contact.svg";

import ImageFODStageClientLogin from "../assets/images/FOD_stage/FOD_stage_client_login.svg";
import ImageFODStageClientDashboard from "../assets/images/FOD_stage/FOD_stage_client_dashboard.svg";
import ImageFODStageClientCreateContactInfo from "../assets/images/FOD_stage/FOD_stage_client_new_notification_contact_info.svg";
import ImageFODStageClientCreateOptionsTerrain from "../assets/images/FOD_stage/FOD_stage_client_new_notification_options_terrain.svg";
import ImageFODStageClientCreateDateLocation from "../assets/images/FOD_stage/FOD_stage_client_new_notification_date_location.svg";
import ImageFODStageClientCreateTerrainOwner from "../assets/images/FOD_stage/FOD_stage_client_new_notification_terrain_owner.svg";
import ImageFODStageClientCreateOverview from "../assets/images/FOD_stage/FOD_stage_client_new_notification_overview.svg";
import ImageFODStageClientDetailsInfo from "../assets/images/FOD_stage/FOD_stage_client_notification_details_info.svg";
import ImageFODStageClientDetailsLocation from "../assets/images/FOD_stage/FOD_stage_client_notification_details_location.svg";
import ImageFODStageClientDetailsTerrainOwner from "../assets/images/FOD_stage/FOD_stage_client_notification_details_terrain_owner.svg";
import ImageFODStageClientDetailsDocuments from "../assets/images/FOD_stage/FOD_stage_client_notification_details_documents.svg";

import ImageFODStageBusinessLogin from "../assets/images/FOD_stage/FOD_stage_business_login.svg";
import ImageFODStageBusinessLogin2 from "../assets/images/FOD_stage/FOD_stage_business_login_2.svg";
import ImageFODStageBusinessMap from "../assets/images/FOD_stage/FOD_stage_business_map.svg";
import ImageFODStageBusinessDetailsInfo from "../assets/images/FOD_stage/FOD_stage_business_notification_details_info.svg";
import ImageFODStageBusinessDetailsUser from "../assets/images/FOD_stage/FOD_stage_business_notification_details_user.svg";
import ImageFODStageBusinessDetailsLogbook from "../assets/images/FOD_stage/FOD_stage_business_notification_details_logbook.svg";
import ImageFODStageBusinessList from "../assets/images/FOD_stage/FOD_stage_business_list.svg";

const projects = [
  {
    name: "Portfolio",
    description: [
      "This project was created to display my projects and show my skills.",
      "The navigation is created with react-scroll, the form validation with react-hook-form and to send the message I used EmailJS. All the styling was done with Bootstrap 5 and SCSS."
    ],
    images: [
      { 
        imageUrl: `${ImagePortfolioHome}`, 
        imageTitle: "Portfolio Home page",
      },
      { 
        imageUrl: `${ImagePortfolioSkills}`, 
        imageTitle: "Portfolio Skills page",
      },
      { 
        imageUrl: `${ImagePortfolioProjects}`, 
        imageTitle: "Portfolio projects page",
      },
      { 
        imageUrl: `${ImagePortfolioContact}`, 
        imageTitle: "Portfolio contact page",
      },
    ],
    languages: ["HTML", "CSS", "Bootstrap", "ReactJs"],
    github: "https://github.com/Yasmine10/portfolio",
    liveLink: "https://yasminedewolf.be",
  },
  {
    name: "Paramotor terrain notification applications (Internship projects)",
    description: [
      "Renewing and upgrading of 2 existing web applications: paramotor terrain registration for clients and an internal business app to view registrations and aprove them",
      "I mainly worked on the frontend side of both applications, with Angular 11 and TypeScript, Bootstrap and PrimeNG",
      "Implementation of JWT on the frontend side to make logging in with eID possible",
      "Because this is a federal government project that isn't placed online yet, I am not able to show a live demo or a Github project link"
    ],
    images: [
      { 
        imageUrl: `${ImageFODStageClientLogin}`, 
        imageTitle: "[Client app] Login",
      },
      { 
        imageUrl: `${ImageFODStageClientDashboard}`, 
        imageTitle: "[Client app] Dashboard",
      },
      { 
        imageUrl: `${ImageFODStageClientCreateContactInfo}`, 
        imageTitle: "[Client app] New notification -> Contact info",
      },
      { 
        imageUrl: `${ImageFODStageClientCreateOptionsTerrain}`, 
        imageTitle: "[Client app] New notification -> Terrain options",
      },
      { 
        imageUrl: `${ImageFODStageClientCreateDateLocation}`, 
        imageTitle: "[Client app] New notification -> Date & Location",
      },
      { 
        imageUrl: `${ImageFODStageClientCreateTerrainOwner}`, 
        imageTitle: "[Client app] New notification -> Terrain owner",
      },
      { 
        imageUrl: `${ImageFODStageClientCreateOverview}`, 
        imageTitle: "[Client app] New notification -> Overview",
      },
      { 
        imageUrl: `${ImageFODStageClientDetailsInfo}`, 
        imageTitle: "[Client app] Notification details -> Notification info",
      },
      { 
        imageUrl: `${ImageFODStageClientDetailsLocation}`, 
        imageTitle: "[Client app] Notification details -> Location",
      },
      { 
        imageUrl: `${ImageFODStageClientDetailsTerrainOwner}`, 
        imageTitle: "[Client app] Notification details -> Terrain owner",
      },
      { 
        imageUrl: `${ImageFODStageClientDetailsDocuments}`, 
        imageTitle: "[Client app] Notification details -> Documents",
      },
      {
        imageUrl: `${ImageFODStageBusinessLogin}`,
        imageTitle: "[Business app] Login"
      },
      {
        imageUrl: `${ImageFODStageBusinessLogin2}`,
        imageTitle: "[Business app] Login"
      },
      {
        imageUrl: `${ImageFODStageBusinessMap}`,
        imageTitle: "[Business app] Map"
      },
      {
        imageUrl: `${ImageFODStageBusinessDetailsInfo}`,
        imageTitle: "[Business app] Notification details -> Notification info"
      },
      {
        imageUrl: `${ImageFODStageBusinessDetailsUser}`,
        imageTitle: "[Business app] Notification details -> User info"
      },
      {
        imageUrl: `${ImageFODStageBusinessDetailsLogbook}`,
        imageTitle: "[Business app] Notification details -> Logbook"
      },
      {
        imageUrl: `${ImageFODStageBusinessList}`,
        imageTitle: "[Business app] List"
      },
      
    ],
    languages: ["HTML", "CSS", "Angular CLI", "TypeScript", "Bootstrap", "PrimeNG"],
    github: "",
    liveLink: "",
  },
];

export default projects;
