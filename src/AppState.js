import { reactive } from 'vue'
import keeper from './assets/img/keeper.jpg'
import nyanlogo from './assets/img/nyanlogo.png'



// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  currentYear: new Date().getFullYear(),
  about: {
    name: "SOFTWARE ENGINEER",
    title: 'Skyler Kinney',
    summary: `Technology is at in incredible state right now.`
  },
  applications: [
    {
      title: 'Keeper',
      img: keeper,
      link: 'https://keeper.bobs208.com/#/',
      description: `
In Keeper I utilized the Vue3 framework for the client, and .Net8 C# framework to create an API with dapper as my ORM. This project showcases my understanding of virtual relationships of data objects. The overall concept of this application is very similar to popular app Pintrest.

- Auth 0 is the auth provider, which creates bearer tokens as access keys.
-  Demonstrates my ability to work across a tech stack, with a highlight on my understanding of virtual relationships.
- My first experience using dotnet, and MySQL. 
-   The hard stuff https://github.com/Skylerjkinney/keeper.
    `
    },
    {
      title: 'Pc Build Bois',
      img: nyanlogo,
      description: `
Pc Build Bois was a collaborative effort with https://github.com/maxpete121, the application is a personal computer creation platform, in which users can take a guided tour to have assistance in building their dream PC.

- The client was constructed with Vue3
- This project showcases my understanding of Express, Node.js, and MongoDb with mongoose as an ORM
- This project was a **collaborative** effort, where we practiced standard SCRUM methodologies where I acted as SCRUM master
- The hard stuff https://github.com/maxpete121/CapStone.
    `}
  ],
  experiences: [
    {
      title: 'Software Developer', company: 'Codeworks', dates: 'Nov 2023 - Mar 2024',
      summary: `
      - I have completed 500+ hours of working in both an individual and team settings to complete 15+ full-stack applications
      - I implemented SCRUM methodologies into all of my projects, typically acting as scrum master in order to ensure a comprehensive backlog of weighted items to complete in a week long sprint
      `
    },
    {
      title: 'Server/Mixologist', company: 'Brickyard', dates: 'Sep 2019 - Nov 2023',
      summary: `
      - I curated a personalized, informative, and organized find dining experience to an average of 25-30+ guests a night
      - I achieved this by coordinating and delegating various tasks between myself, FOH team members, And BOH team members to ensure a seamless experience
      `
    },
    {
      title: 'Mixologist', company: 'Chandlers Steakhouse', dates: 'July 2013 - Sep 2019',
      summary: `
      - Conceptualized modern takes on classic cocktails, internalizing guest preferences to fine tune any cocktail to suit their immediate desire
      - Considered every detail associated with a classic fine dining experience, from best practices in fine dining etiquette, to personalized actions based upon guest discretion
      `
    }
  ],
  socialLinks: [
    { icon: 'mdi mdi-linkedin', href: 'https://www.linkedin.com/in/skylerkinney/', name: 'LinkedIn' },
    { icon: 'mdi mdi-github', href: 'https://github.com/Skylerjkinney', name: 'Github' },
    { icon: 'mdi mdi-facebook', href: 'https://www.facebook.com/skyler.kinney.35', name: 'Facebook' }
  ],
})

// get logo in monochromatic tone
