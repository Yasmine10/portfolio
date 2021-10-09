import ImageFODStageClientLogin from "../assets/images/FOD_stage/FOD_stage_client_login.png";
import ImageFODStageClientDashboard from "../assets/images/FOD_stage/FOD_stage_client_dashboard.png";
import ImageFODStageClientCreateContactInfo from "../assets/images/FOD_stage/FOD_stage_client_new_notification_contact_info.png";
import ImageFODStageClientCreateOptionsTerrain from "../assets/images/FOD_stage/FOD_stage_client_new_notification_options_terrain.png";
import ImageFODStageClientCreateDateLocation from "../assets/images/FOD_stage/FOD_stage_client_new_notification_date_location.png";
import ImageFODStageClientCreateTerrainOwner from "../assets/images/FOD_stage/FOD_stage_client_new_notification_terrain_owner.png";
import ImageFODStageClientCreateOverview from "../assets/images/FOD_stage/FOD_stage_client_new_notification_overview.png";
import ImageFODStageClientDetailsInfo from "../assets/images/FOD_stage/FOD_stage_client_notification_details_info.png";
import ImageFODStageClientDetailsLocation from "../assets/images/FOD_stage/FOD_stage_client_notification_details_location.png";
import ImageFODStageClientDetailsTerrainOwner from "../assets/images/FOD_stage/FOD_stage_client_notification_details_terrain_owner.png";
import ImageFODStageClientDetailsDocuments from "../assets/images/FOD_stage/FOD_stage_client_notification_details_documents.png";

import ImageFODStageBusinessLogin from "../assets/images/FOD_stage/FOD_stage_business_login.png";
import ImageFODStageBusinessLogin2 from "../assets/images/FOD_stage/FOD_stage_business_login_2.png";
import ImageFODStageBusinessMap from "../assets/images/FOD_stage/FOD_stage_business_map.png";
import ImageFODStageBusinessDetailsInfo from "../assets/images/FOD_stage/FOD_stage_business_notification_details_info.png";
import ImageFODStageBusinessDetailsUser from "../assets/images/FOD_stage/FOD_stage_business_notification_details_user.png";
import ImageFODStageBusinessDetailsLogbook from "../assets/images/FOD_stage/FOD_stage_business_notification_details_logbook.png";
import ImageFODStageBusinessList from "../assets/images/FOD_stage/FOD_stage_business_list.png";

import ImagePortfolioDesktop from "../assets/images/portfolio/portfolio_desktop.png";
import ImageSunnysideAgencyLandingPageDesktop from "../assets/images/sunnyside_agency_landing_page/sunnyside_agency_landing_page_desktop.png";
import ImageGithubUserSearchAppDesktop from "../assets/images/github_user_search_app_desktop.png";

import ImageMemoryGameDesktop from "../assets/images/memory-game-solution.png";

const projects = [
  {
    name: "Memory game",
    description: [
      "This is a frontendmentor.io challenge. It's a simple memory game with some options that you can select before starting the game.",
      "When the user finishes the game it shows how long it took to finish the game and how many moves they made.",
      "For this project I worked with vuex to be able to easily access the state variables that I need in each component.",
      "The navigation to go from the menu to the game itself, is done with Vue Router.",
      "The game is fully responsive, made with flexbox, css grid and media queries.",
    ],
    images: [
      {
        imageUrl: `${ImageMemoryGameDesktop}`,
        imageTitle: "Memory game desktop view screenshot"
      }
    ],
    languages: ["HTML", "SCSS", "JavaScript", "VueJS", "Vuex"],
    github: "https://github.com/Yasmine10/memory-game",
    liveLink: "https://memory-game-yasmine.vercel.app/",
    loadingTime: false
  },
  {
    name: "Github user search app",
    description: [
      "This is a frontendmentor.io challenge, the app let's you look up github users and shows some information about the user. It also has a light/dark-mode toggle.",
      "In this project I worked with React Hooks, Axios for the API call, and CSS variables. I also used a mobile first approach.",
      "To search and display user information, I used the Github api (https://docs.github.com/en/rest/reference/users#get-a-user).",
      "The app is fully responsive for mobile, tablet and desktop. This was mainly done with flexbox and media queries."
    ],
    images: [
      {
        imageUrl: `${ImageGithubUserSearchAppDesktop}`,
        imageTitle: "Desktop view application"
      }
    ],
    languages: ["HTML", "SCSS", "JavaScript", "ReactJS"],
    github: "https://github.com/Yasmine10/github-user-search-app",
    liveLink: "https://github-user-search-app-10.herokuapp.com/",
    loadingTime: true
  },
  {
    name: "Sunnyside agency landing page",
    description: [
      "This is a frontendmentor.io challenge. I created this landing page based on a mobile and desktop mockup that was given with the challenge",
      "The site is responsive for mobile and desktop. I mainly used flexbox and some media queries to achieve this.",
    ],
    images: [
      {
        imageUrl: `${ImageSunnysideAgencyLandingPageDesktop}`,
        imageTitle: "Desktop view landing page"
      }
    ],
    languages: ["HTML", "CSS", "JavaScript", "ReactJS", "SCSS"],
    github: "https://github.com/Yasmine10/sunnyside-agency-landing-page",
    liveLink: "https://sunnyside-challenge.herokuapp.com/",
    loadingTime: true
  },
  {
    name: "Paramotor terrain notification applications (Internship projects)",
    description: [
      "Renewing and upgrading of 2 existing web applications: paramotor terrain registration for clients and an internal business app to view registrations and aprove them",
      "I mainly worked on the frontend side of both applications, with Angular 11 and TypeScript, Bootstrap and PrimeNG",
      "Implementation of JWT on the frontend side to make logging in with eID possible",
      "Because this is a federal government project that isn't placed online yet, I am not able to show a live demo or a Github project link. (But you can view the slides that I provided.)"
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
    languages: ["HTML", "SCSS", "Angular CLI", "TypeScript", "Bootstrap", "PrimeNG"],
    github: "",
    liveLink: "",
    loadingTime: false
  },
  {
    name: "Portfolio",
    description: [
      "This project was created to display my projects and show my skills.",
      "The navigation is created with react-scroll, the form validation with react-hook-form and to send a message with the contact form I used EmailJS. All the styling was done with Bootstrap 5 and SCSS."
    ],
    images: [
      { 
        imageUrl: `${ImagePortfolioDesktop}`, 
        imageTitle: "Portfolio Desktop",
      }
    ],
    languages: ["HTML", "SCSS", "JavaScript", "ReactJs", "Bootstrap"],
    github: "https://github.com/Yasmine10/portfolio",
    liveLink: "https://yasminedewolf.be",
    loadingTime: false
  },
];

export default projects;
