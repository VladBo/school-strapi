<h1 align="center">🎒 School Website Starter</h1>
  <p align="center">
  Accessible and extremely user-friendly website template for schools, built on fun and modern stack.
  Forked from https://github.com/ElektronPlus/school-website.
</p>

## Folder Structure
- **`📁 apps`**
  - **`📁 backend`**: headless CMS (API) that uses [Strapi](https://strapi.com/).
  - **`📁 frontend`**
    - **`📁 queries`**: GraphQL queries. Just create a `.graphql` that you will want to use.
    - **`📁 generated`**: Generated GraphQL queries with [GraphQL Code Generator](https://www.graphql-code-generator.com/). Runs automatically while developing. You import types and queries from there (not from `📁 queries`!)
    - **`📁 stories`**: [Storybook stories.](https://storybook.js.org/docs/react/writing-stories/introduction/)
    - **`📁 pages`**: [Next.js pages](https://nextjs.org/docs/basic-features/pages).
    - **`📁 public`**: [Next.js static file serving](https://nextjs.org/docs/basic-features/static-file-serving).
    - **`📁 styles`**: Global CSS Styles. It's better to use CSS modules (`component.module.css` in `📁 components`
    - **`📁 lib`**: Libraries wrappers (such as for Apollo Client) and configs.
    - **`📁 components`**: React components and their styles. There's also a [Next.js Layout](https://nextjs.org/docs/basic-features/layouts)

## Technology
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-6c5fc7?style=for-the-badge&logo=sentry&logoColor=white)

### Front-end

| Technology | Description |
|------------|-------------|
| [**Next.js**](https://nextjs.org/) | The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. |
| [**React**](https://reactjs.org/) | The most popular JavaScript library for building user interfaces. |
| [**TypeScript**](https://www.typescriptlang.org/) | TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| [**Storybook**](https://storybook.js.org/) | Tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation. |

#### UI Libs
| Library | Description |
|---------|-------------|
| [**Chakra UI**](https://chakra-ui.com/) | Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. We use templates from [**Chakra Templates**](https://chakra-templates.dev/). |
| [**React Masonry CSS**](https://github.com/paulcollett/react-masonry-css) | A Masonry component leveraging CSS and native React rendering, for fast, responsive masonry layouts. |
| [**React Accessible Headings**](https://github.com/springload/react-accessible-headings) | Makes it easier to keep heading levels semantic and accessible (WCAG) |

#### Fetching
| Technology | Description |
|------------|-------------|
| [**GraphQL**](https://graphql.org/) | Main way to fetch data from the Strapi API. Gives us automatic TypeScript support thanks to [**GraphQL Code Generator**](https://www.graphql-code-generator.com/). We use [**Apollo Client**](https://www.apollographql.com/docs/) |
| **REST API** | REST is rarely used, but sometimes it works out better with Strapi plugins, for example Navigation. External developers also might want to prefer use it in their projects. [**See documentation »**](https://github.com/ElektronPlus/school-website#api) |

### Back-end
| Technology | Description |
|------------|-------------|
| [**Strapi**](https://strapi.io) | Design APIs fast, manage content easily. Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first. |
| [**MySQL**](https://www.mysql.com/) | Database with PhpMyAdmin. Might be changed to PostgreSQL. |
| [**Meilisearch**](https://www.meilisearch.com/) | Meilisearch is a RESTful search API. It aims to be a ready-to-go solution for everyone who wants a fast and relevant search experience for their end-users ⚡️🔎 |
