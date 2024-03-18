import { reactive } from 'vue'
import keeper from './assets/img/keeper.jpg'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  currentYear: new Date().getFullYear(),
  about: {
    name: "Skyler Kinney",
    title: 'SOFTWARE ENGINEER',
    summary: `Technology is at in incredible state right now. `
  },
  applications: [
    {
      title: 'Keeper',
      img: keeper,
      description: `
In Keeper I utilized the Vue3 framework for the client, and .Net8 C# framework to create an API with dapper as my ORM. This project showcases my understanding of virtual relationships of data objects. The overall concept of this application is very similar to popular app Pintrest.

- Auth 0 is the auth provider, which creates bearer tokens as access keys.
-  This application is deployed at keeper.bobs208.com.
-   As this is a live version of this project I am continuously maintaining it, and improving it to become a try feature rich application.
    `
    },
    {
      title: 'Pc Build Bois',
      img: keeper,
      description: `
Pc Build Bois was a collabartive effort 

- Something most important **is emphasized** 
- This is another bullet it is 110% better 
- I should have more content here
    `
    }
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
      title: 'Mixologist/CRM', company: 'Brickyard', dates: 'Sep 2019 - Nov 2023',
      summary: `
      - I curated a personalized, informative, and organized find dining experience to an average of 25-30+ guests a night
      - I achieved this by coordinating and delegating various tasks between myself, FOH team members, And BOH team members to ensure a seamless experience
      `
    },
    {
      title: 'Mixologist/CRM', company: 'Chandlers Steakhouse', dates: 'July 2013 - Sep 2019',
      summary: `
      - Conceptualized modern takes on classic cocktails, internalizing guest preferences to fine tune any cocktail to suit their immediate desire
      - Considered every detail associated with a classic fine dining experience, from best practices in fine dining etiquette, to personalized actions based upon guest discretion
      `
    }
  ],
  socialLinks: [
    { icon: 'mdi mdi-linkedin', href: 'https://www.linkedin.com/in/skylerkinney/', name: 'LinkedIn' },
    { icon: 'mdi mdi-github', href: 'https://github.com/Skylerjkinney', name: 'Github' }
  ],
})

// get logo in monochromatic tone
