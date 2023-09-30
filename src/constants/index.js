import App from "../App";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "UI Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Development Course",
      company_name: "Patel Computers",
      icon: html,
      iconBg: "#383E56",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Learn to Developing and maintaining web applications using Html, Css, JavaScript and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Potenz Technology PVT LTD",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Shopify Developer",
      company_name: "Potenz Technology PVT LTD",
      icon: javascript,
      iconBg: "#383E56",
      date: "Mar 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using Shopify and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Webflow Developer",
      company_name: "Potenz Technology PVT LTD",
      icon: css,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using Webflow and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "It Company Website",
      description:
        "Certainly, I created the official website for the company using a tech stack that included React for the frontend, Node.js for the backend, and MySQL for the database. This project involved various stages, including planning, design, development, testing, and deployment, to ensure the successful creation of the company's website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://potenztech.com/",
    },
    {
      name: "Webflow",
      description:
        "I have hands-on experience with Webflow, a versatile web design and development platform. I've successfully created responsive, visually appealing websites using Webflow's intuitive drag-and-drop interface, customized designs, added interactive elements, and even managed content with the CMS.",
      tags: [
        {
          name: "webflow",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "customcode",
          color: "pink-text-gradient",
        },
      ],
      image: mobile,
      source_code_link: "https://www.klouddata.com/",
    },
    {
      name: "E-commerce Website",
      description:
        "I have extensive experience in designing and developing e-commerce websites. I've successfully built online stores using various platforms and technologies, ensuring a seamless shopping experience for customers.",
      tags: [
        {
          name: "webflow",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "customcode",
          color: "pink-text-gradient",
        },
      ],
      image: shopify,
      source_code_link: "https://www.omphoria.eu/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };