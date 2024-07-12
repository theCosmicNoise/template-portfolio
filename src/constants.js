/* eslint-disable no-unused-vars */
import GitHub from './assets/icons/github.png'
import Instagram from './assets/icons/instagram.png'
import LinkedIn from './assets/icons/linkedin.png'
import Mail from './assets/icons/mail.png'
import Twitter from './assets/icons/twitter.png'

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
};
