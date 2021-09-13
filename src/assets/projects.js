import ImagePortfolio from "../assets/images/portfolio_project.svg";

const projects = [
  {
    name: "Portfolio",
    description: `This project was created to display my projects and show my skills. The navigation is created with react-scroll, the form validation with react-hook-form and to send the message I used EmailJS. All the styling was done with Bootstrap 5 and SCSS.`,
    imageUrl: `${ImagePortfolio}`,
    imageAlt: "Portfolio project desktop",
    languages: ["HTML", "CSS", "Bootstrap", "ReactJs"],
    github: "https://github.com/Yasmine10/portfolio",
    liveLink: "https://yasminedewolf.be",
  },
];

export default projects;
