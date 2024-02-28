import { reactive } from 'vue'
import keeper from './assets/img/keeper.jpg'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  currentYear: new Date().getFullYear(),
  about: {
    name: "Skyler Kinney",
    title: 'SOFTWARE ENGINEER/TECHNO-BARBARIAN',
    summary: ``
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
      title: 'Crawling the Web 2',
      // img: webCrawler,
      description: `
Showing multiple applications.

- Something most important **is emphasized** 
- This is another bullet it is 110% better 
- I should have more content here
    `
    }
  ],
  experiences: [
    {
      title: 'Software Developer', company: 'C.U.P.S', dates: 'Jan 2020 - Jan 2024',
      summary: `Markdown supports [links](https://catsups.herokuapp.com/#/)
- I found over 480 lost packages in just 2 hours
      `
    }
  ],
  socialLinks: [
    { icon: 'mdi mdi-linkedin', href: 'https://www.linkedin.com/in/skylerkinney/', name: 'LinkedIn' },
    { icon: 'mdi mdi-github', href: 'https://github.com/Skylerjkinney', name: 'Github' }
  ],
})

// get logo in monochromatic tone
