/* eslint-disable no-unused-vars */
import GitHub from './assets/icons/github.png'
import Instagram from './assets/icons/instagram.png'
import LinkedIn from './assets/icons/linkedin.png'
import Mail from './assets/icons/mail.png'
import Twitter from './assets/icons/twitter.png'
import Affogato from './assets/Affogato.jpg'

export const constants = {
  links: [
    { index: 1, href: "about" },
    { index: 2, href: "projects" },
    { index: 3, href: "experience" },
    { index: 4, href: "blog" },
  ],
  name: {
    firstName: "anjali",
    lastName: "roy",
  },
  contactArray: [
    {
      key: "Email",
      imgPath: Mail,
      imgAlt: "email-icon",
      href: "mailto:abc@mail.com",
    },
    {
      key: "Instagram",
      imgPath: Instagram,
      imgAlt: "instagram-icon",
      href: "https://www.instagram.com",
    },
    {
      key: "GitHub",
      imgPath: GitHub,
      imgAlt: "github-icon",
      href: "https://www.github.com",
    },
    {
      key: "LinkedIn",
      imgPath: LinkedIn,
      imgAlt: "linkedin-icon",
      href: "https://www.linkedin.com",
    },
    {
      key: "X",
      imgPath: Twitter,
      imgAlt: "x-icon",
      href: "https://www.x.com",
    },
  ],
  projects: [
    {
      title: "This is a new World",
      link: "/",
      imgPath: Instagram,
      imgAlt: "Insta icon",
    },
    {
      title: "This is a new Data Analytics",
      link: "/experience",
      imgPath: Affogato,
      imgAlt: "Insta icon",
    },
    {
      title: "Moon Landings",
      link: "/blog",
      imgPath: Affogato,
      imgAlt: "Insta icon",
    },
    {
      title: "My Project",
      link: "/projects",
      imgPath: Mail,
      imgAlt: "Insta icon",
    },
  ]
};
