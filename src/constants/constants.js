import {
  mobile,
  backend,
  creator,
  web,
  calculator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  csharp,
  springboot,
  dotnet,
  mysql,
  bootstrap,
  anshul,
  paytmui,
  shopifyui,
  rode,
  discord,
  productdesigner,
  developerlanding,
  executioncontextjs,
  musicplayer,
  customvideoplayer,
  todojs,
  themechanger,
  wordcounter,
  formvalidation,
  todofullstack,
  counterapp,
  expensetracker,
  oldportfolio,
  uicollage,
  bankingreact,
  tictactoe,
  bankingapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Blogging",
    icon: creator,
  },
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
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Dot Net Core",
    icon: dotnet,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
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
    name: "Online Banking System",
    description:
      "The online banking system, for bank customers and administrators, to manage customers bank accounts. It enables bank customers to conduct virtual bank transactions, view transactions, manage beneﬁciaries, etc.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
    ],
    image: bankingreact,
    source_code_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
    live_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
  },
  {
    name: "MERN Auth+Todo List",
    description:
      "Made full stack Todo List for multiple users uniquely, as it will require user authentication, and after authentication, the user will be able to make a todo title and then tasks, for e.g. On Sunday you have several tasks to do and then submit it will be populated to accordion style.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: todofullstack,
    source_code_link: "https://github.com/anshulghogre4/Auth-Todo-List-MERN",
    live_link: "https://auth-todo-list-mern.vercel.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "I created an expense tracker or budget tracker with Reactjs to create this app, used TailwindCSS for UI and I used, hooks, custom hooks eg. use local storage () to store budgets and expenses in the browser, also I used Context API to transfer data to the component tree.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "ContextAPI",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://github.com/anshulghogre4/expense-tracker-react",
    live_link: "https://expense-tracker-react-one.vercel.app/",
  },
  {
    name: "UI Projects",
    description:
      "Made about more than 19 UI websites ( with classic HTML+CSS, Bootstrap+SCSS & Tailwind CSS framework), before starting these projects basic designs were available to me, and from these resources, the challenge was to make clones of all of them and I was able to accomplish all of it. All are available on GitHub with live links.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: uicollage,
    source_code_link:
      "https://github.com/anshulghogre4/TailwindCSS-Bootstrap-Project-Links",
    live_link:
      "https://github.com/anshulghogre4/TailwindCSS-Bootstrap-Project-Links",
  },
];

const fullStackProjects = [
  {
    id: 1,
    title: "Online Banking System",
    img: bankingapp,
    source_code_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
    live_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
  },
  {
    id: 2,
    title: "MERN Auth+Todo List",
    img: todofullstack,
    source_code_link: "https://github.com/anshulghogre4/Auth-Todo-List-MERN",
    live_link: "https://auth-todo-list-mern.vercel.app/",
  },
];

const reactProjects = [
  {
    id: 1,
    title: "Banking APP",
    img: bankingreact,
    source_code_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
    live_link:
      "https://github.com/anshulghogre4/online-banking-springboot-react",
  },
  {
    id: 2,
    title: "Expense Tracker",
    img: expensetracker,
    source_code_link: "https://github.com/anshulghogre4/expense-tracker-react",
    live_link: "https://expense-tracker-react-one.vercel.app/",
  },
  {
    id: 3,
    title: "Old Portfolio",
    img: oldportfolio,
    source_code_link: "https://github.com/anshulghogre4/Portfolio_Website",
    live_link: "https://portfolio-website-mrghogre2.vercel.app/",
  },

  {
    id: 4,
    title: "Tic Tac Toe",
    img: tictactoe,
    source_code_link: "https://github.com/anshulghogre4/React-tic-tac-toe",
    live_link: "https://react-tic-tac-toe-practice.vercel.app/",
  },
  {
    id: 5,
    title: "Counter App",
    img: counterapp,
    source_code_link: "https://github.com/anshulghogre4/react-counter-practice",
    live_link: "https://react-counter-practice.vercel.app/",
  },
];

const javaScriptProjects = [
  {
    id: 1,
    title: "Custom Video Player",
    img: customvideoplayer,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-video-player",
    live_link: "https://js-assig-2-project-video-player.netlify.app/",
  },
  {
    id: 2,
    title: "Music Player",
    img: musicplayer,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-music-player",
    live_link: "https://js-assig-project-music-player.netlify.app/",
  },
  {
    id: 3,
    title: "Theme Changer",
    img: themechanger,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-theme-changer",
    live_link: "https://js-assig-2-theme-changer.netlify.app/",
  },
  {
    id: 4,
    title: "Form Validation",
    img: formvalidation,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-form-validation",
    live_link: "https://js-assig-2-project-form-validation.netlify.app/",
  },
  {
    id: 5,
    title: "Todo App JS",
    img: todojs,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-todo-list-app",
    live_link: "https://js-assig-2-todo-app.netlify.app/",
  },
  {
    id: 6,
    title: "Word Counter",
    img: wordcounter,
    source_code_link:
      "https://github.com/anshulghogre4/JS-Assignment-2-word-counter",
    live_link: "https://js-assig-2-word-counter-app.netlify.app/",
  },
  {
    id: 7,
    title: "Calculator",
    img: calculator,
    source_code_link:
      "https://github.com/anshulghogre4/js-assignment-2-calculator-app",
    live_link: "https://js-assig-2-calculator-app.netlify.app/",
  },
];

const uIProjects = [
  {
    id: 1,
    title: "Paytm UI",
    img: paytmui,
    source_code_link:
      "https://github.com/anshulghogre4/Project-16-Paytm-Home-Page-UI",
    live_link: "https://project-16-payment-app-home-page-ui.netlify.app/",
  },
  {
    id: 2,
    title: "Shopify UI",
    img: shopifyui,
    source_code_link:
      "https://github.com/anshulghogre4/Project-17-Shopify-Home-page-UI",
    live_link: "https://project-17-shopify-home-page-ui.netlify.app/",
  },
  {
    id: 3,
    title: "RODE UI",
    img: rode,
    source_code_link:
      "https://github.com/anshulghogre4/Project-18-R-DE-Home-page-UI",
    live_link: "https://project-18-rode-home-page-ui.netlify.app/",
  },
  {
    id: 4,
    title: "Discord UI",
    img: discord,
    source_code_link: "https://github.com/anshulghogre4/Discord-UI-Home-Page",
    live_link: "https://discordui-task.netlify.app/",
  },
  {
    id: 5,
    title: "Product Designer UI",
    img: productdesigner,
    source_code_link:
      "https://github.com/anshulghogre4/Project-15-Product-Design-Landing-Page",
    live_link: "https://project-15-product-design-landing-pag.netlify.app/",
  },
  {
    id: 6,
    title: "Developer Landing UI",
    img: developerlanding,
    source_code_link:
      "https://github.com/anshulghogre4/Project-9-Developer-Landing-Page",
    live_link: "https://project-9-developer-landing-page1.netlify.app/",
  },
];
const myWords = [
  {
    text: "Here you can download my resume by clicking on Download button. I will be glad to our cooperation.",
    name: "Anshul",
    designation: "The owner",
    image: anshul,
  },
];

const myBlogs = [
  {
    image: executioncontextjs,
    title: "Execution Context in JavaScript and its working.",
    source_code_link:
      "https://anshulghogre.hashnode.dev/execution-context-in-javascript-and-its-working",
  },
];
export {
  myBlogs,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  fullStackProjects,
  reactProjects,
  javaScriptProjects,
  uIProjects,
  myWords,
};
