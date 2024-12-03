import {
  nextbridge,
  techclan,
  luminogics,
  formulatrix,
} from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  solidity,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  three,
  php,
  web3js,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: three,
    name: 'Three.js',
    type: '3D Graphics',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: php,
    name: 'PHP',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: web3js,
    name: 'Web3.js',
    type: 'Frontend',
  },
  {
    imageUrl: solidity,
    name: 'Solidity',
    type: 'Backend',
  },
];

export const experiences = [
  {
    title: 'WordPress Plugin Developer',
    company_name: 'Nextbridge Pvt. Ltd.',
    icon: nextbridge,
    iconBg: '#accbe1',
    date: 'August 2020 - February 2021',
    points: [
      'Developing and maintaining WordPress plugins using Javascript (jQuery), PHP and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Luminogics',
    icon: luminogics,
    iconBg: '#b7e4c7',
    date: 'March 2021 - November 2022',
    points: [
      'Led the development of the Wesley Allen 3D Product Configurator using Three.js and React.js, while mentoring junior team members and collaborating with WordPress developers for seamless integration.',
      'Contributed to the Barq App project by integrating Blixt wallet with Tangem SDK for NFC crypto transactions, slated for presentation at the Entrepreneurship World Cup 2022.',
      'Participated in the "Value for Money" project, utilizing MERN stack as a frontend developer, implementing new features and maintaining code quality standards.',
      'Utilized diverse skills in Three.js and Blockchain development, acquiring certifications from Udemy, and ensuring smooth rendering and configurability of 3D models in the Wesley Allen project, along with integrating Amazon S3 Bucket for efficient storage.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Formulatrix',
    icon: formulatrix,
    iconBg: '#a2d2ff',
    date: 'December 2022 - Present',
    points: [
      "Contributed to Formulatrix's mission of innovating laboratory automation solutions by developing front-end interfaces for FAST (Fluidics Automation System Technology) using React.js, ensuring precision and efficiency in liquid handling workflows.",
      'Played a pivotal role in enhancing life science research and drug discovery processes by crafting front-end solutions for uPulse, a tangential flow filtration device, utilizing React.js to empower researchers with advanced filtration capabilities.',
      "Collaborated with cross-functional teams to maintain Formulatrix's standards for code quality and efficiency, rigorously adhering to best practices while developing front-end interfaces for both FAST and uPulse products.",
      "Leveraged expertise in React.js as a Software Engineer to contribute to the continuous improvement and optimization of Formulatrix's automation solutions, driving innovation in the field of laboratory automation and life science research.",
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/MuneebKhan1996',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'www.linkedin.com/in/muneebk21',
  },
];

export const projects = [
  {
    theme: 'btn-back-red',
    name: 'PULSE - TFF',
    description:
      'The µPULSE® - TFF System is a fully automated, walk away system that uses tangential flow filtration (TFF) for sample concentration and diafiltration (buffer exchange, desalting). My responsibilities include code refactoring, code cleaning, making the architecture according to Formulatrix standards, using a common UI libaray developing pixel perfect new feactures and fixing bugs, memory leaks etc.',
    link: 'https://formulatrix.com/pulse-tff-system-sample-concentration-diafiltration/',
  },
  {
    theme: 'btn-back-green',
    name: 'Engineering Review System',
    description:
      'An internal review system app that uses React as a frontend tech. I was assigned to upgrade UI to a modern design, implementing new features and using Formulatrix common UI.',
  },
  {
    theme: 'btn-back-blue',
    name: 'FAST Liquid Handler',
    description:
      'The F.A.S.T. (Flow Axial Seal Tip) is a reliable and easy-to-use liquid transfer system designed to move any viscosity of liquid quickly with its one of kind positive displacement, 96-channel head. My job is to make sure code is clean, well maintained and according to Formulatrix standards. In addition to that, I also developed new features working closely with backend developers using React and SignalR.',
    link: 'https://formulatrix.com/liquid-handling-systems/fast-liquid-handler/',
  },
  {
    theme: 'btn-back-pink',
    name: 'Frontend File Uploader - WordPress Plugin',
    description:
      'Being my personal product, I have done complete work on this product single handedly from brainstorming to designing and to development. This plugin allows users to attach files in any form and upload them along with form submission.',
    link: 'https://wordpress.org/plugins/frontend-file-upload/',
  },
  {
    theme: 'btn-back-black',
    name: 'Upcover',
    description:
      'As a Frontend Developer for this Fintech app, I developed multiple components and screens from scratch to pixel perfection. This app is mainly built in Next.js and language used is Typescript.',
    link: 'https://app.upcover.com',
  },
  {
    theme: 'btn-back-red',
    name: 'NFT Marketplace',
    description:
      'Developed this NFT marketplace after completing a Udemy course on Blockchain with backend in Solidity and Frontend in Javascript, React and Web3.js',
    link: 'https://github.com/MuneebKhan1996/nft-market',
  },
  {
    theme: 'btn-back-blue',
    name: 'Tesla Workshop',
    description:
      'Developed this Three.js project using React, React-three-fiber/drei, Three.js after completing Udemy course on Three.js',
    link: 'https://tesla-workshop.vercel.app/',
  },
  {
    theme: 'btn-back-yellow',
    name: 'Simple Vote - WordPress Plugin',
    description:
      'Simple Vote by PressTigers is an easy, lightweight plugin that adds a voting section for visitors on all your post types. Technologies used for this plugin include PHP, Javascript (jQuery), HTML, CSS, AJAX and MySQL.',
    link: 'https://wordpress.org/plugins/simple-vote/',
  },
  {
    theme: 'btn-back-parrot',
    name: 'Cloud Storage Connector - WordPress Plugin',
    description:
      'Cloud Storage Connector add-on is an easy and lightweight add-on that lets you upload job attachments to Dropbox and Google Drive at the submission of applications. Once you’ve installed the add-on, please configure your Dropbox and Google Drive connections from the setting and you’ll be all set to upload files to your Dropbox and Google Drive.',
    link: 'https://market.presstigers.com/product/cloud-storage-connector-add-on/',
  },
  {
    theme: 'btn-back-purple',
    name: 'Email Notifications Templates - WordPress Plugin',
    description:
      'The Email Notification Templates add-on is an easy and lightweight add-on that makes the email notifications more personalized by allowing you to write custom email templates instead of the predefined one’s. Once you’ve uploaded the add-on, you’ll be able to change email templates for Applicant, HR and Admin through the settings of the Simple Job Board.',
    link: 'https://market.presstigers.com/product/email-notification-templates-add-on/',
  },
  {
    theme: 'btn-back-orange',
    name: 'RFID Scanner - Final Year Project',
    description:
      'Lead a team of 2 developers. Designed and developed a fully automated RFID scanner for children to mark their attendance and let the parents know the checking in and out times.',
  },
];
