//this is the file that will be used to update information on the website.
import {
    chess,
    discover,
    gym,
    philosophy,
    python,
    java,
    ms365,
    jupyter,
    css,
    dart,
    flutter,
    html,
    javascript,
    react,
    ebu,
    luiss,
    collection,
    recognition,
    application,
    git,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "duty",
      title: "Duty",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Avid Chess Player",
      icon: chess,
    },
    {
      title: "Discovering New Places",
      icon: discover,
    },
    {
      title: "Gym Goer",
      icon: gym,
    },
    {
      title: "Phylosophy Enjoyer",
      icon: philosophy,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Microsoft 365",
      icon: ms365,
    },
    {
      name: "Jupyter Notebook",
      icon: jupyter,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "dart",
      icon: dart,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "html",
      icon: html,
    },
    {
      name: "javascript",
      icon: javascript,
    },
    {
      name: "react",
      icon: react,
    },
  ];
  // to add a new bullet point, just add a sentence to a new line.
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "European Business University",
      icon: ebu,
      iconBg: "#f5f5f5",
      date: "Oct 2018 - Feb 2020",
      points: [
        "Used data to establish strategies for obtaining students in Kenya.",
        "Collaborated with cross-functional teams to create high-quality education.",
        "Communicated with established corporations to hire students with certification.",
      ],
    },
    {
      title: "Student in Economics",
      company_name: "Luiss Guido Carli",
      icon: luiss,
      iconBg: "#f5f5f5",
      date: "Sep 2020 - May 2022",
      points: [
        "Relevant Courses include Corporate Law, Econometrics, Games and Strategies.",
      ],
    },
  ];
// may need to remove the name section here and in the Feedback.jsx file.
  const contributions = [
    {
      contribution:
        "To be determined",
      name: "Project contributed to",
      designation: "Contribution title",
      company: "Open source company",
      image: "https://plus.unsplash.com/premium_photo-1668473365978-5f29069b0c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    },
    {
      contribution:
        "To be determined",
      name: "Project contributed to",
      designation: "Contribution title",
      company: "Open source company",
      image: "https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    },
    {
      contribution:
        "To be determined",
      name: "Project contributed to",
      designation: "Contribution title",
      company: "Open source company",
      image: "https://plus.unsplash.com/premium_photo-1668473366796-636e38929ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    },
  ];

  const projects = [
    {
      name: "Garbage Collection Data",
      description:
        "Graphs that collects the data from the website and shows which garbage is prominent.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: collection,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI used to bring meaning to the data",
      description:
        "AI used to recognise the image of garbage and broaden the category of said garbage.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: recognition,
      source_code_link: "https://github.com/",
    },
    {
      name: "Zingira",
      description:
        "Where users can makes posts about reclyclable materials for sale or purchase.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "playstore",
          color: "pink-text-gradient",
        },
      ],
      image: application,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, contributions, projects };