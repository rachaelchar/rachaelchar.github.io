export const projects = [
  {
    id: 1,
    title: "Home Page Upgrade",
    summary:
      "A responsive home page built to improve user experience and engagement.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    problem:
      "As part of a rebrand effort, this client needed a home page that would allow users to immediately begin engaging with their job search platform.",
    solution:
      "A responsive home page that allows users to jump into keyword and location search, see featured jobs and employers, browse jobs by parish or industry, and click into employer listings.",
    technicalDetails: [
      "Server-side rendering improves page load times",
      "Responsive design ensures the user experience is enjoyable and consistent across device sizes",
      "A Payload-CMS-editable checkbox allows admins to easily mark jobs and employers as featured",
      "Embedded job posting data in job detail pages improves search engine visibility and click-through rates",
      "Reusing and modifying existing components as well as implementing ShadCN components reduced development time",
    ],
    role: "Frontend Developer",
    roleDescription:
      "I was responsible for the frontend development of the home page. My main task was to consult with our product team and bring our UX designer's vision to life using a combination of new and existing components. I also implemented Google Analytics to track user behavior and engagement as well as helping this client's job postings compete with national job platforms by embedding JSON-LD structured data that follows Google's JobPosting schema requirements in all job detail pages.",
    images: [
      {
        src: "/images/homepage.png",
        alt: "Home page",
      },
      {
        src: "/images/homepage-jobs-search.png",
        alt: "Home page",
      },
      {
        src: "/images/homepage-jobs-search-open-select.png",
        alt: "Home page",
      },
    ],
  },
  {
    id: 2,
    title: "Jobs Catalog",
    summary: "A job search catalog for a state-specific job board.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Payload CMS",
    ],
    problem:
      "As part of a rebrand effort, the client needed an efficient job discovery platform for their region-specific job board. The existing experience lacked streamlined search and filtering, making it difficult for users to find relevant opportunities. Job listings needed to display key details clearly while integrating with existing data sources to improve engagement and application rates.",
    solution:
      "A job search catalog that allows job seekers to search jobs by location and keyword, and filter jobs by a variety of key details, including job type, experience level, and salary.",
    technicalDetails: [
      "Updates to the job search form trigger a utility function that translates into Payload where clauses",
      "Search and filter terms are stored in URL parameters to allow for bookmarking and/or sharing",
      "Visual feedback shows the user what search terms and filters are applied",
      "Integration with the Google Maps API allows the user to search for jobs by location",
      "The Payload Job Queue is used to send job expiry reminders to employers before their jobs expire",
    ],
    role: "Full Stack Developer",
    roleDescription:
      "I was responsible for creating the job search catalog, including the search form, filtering capabilities, and job listings. I also used the Payload Job Queue to send job expiry reminders to employers to encourage employer engagement and increase the accuracy of job postings.",
    images: [
      {
        src: "/images/jobs-desktop.png",
        alt: "Job posting catalog",
      },
      {
        src: "/images/job-filters.png",
        alt: "Job posting catalog",
      },
    ],
  },
  {
    id: 3,
    title: "Construction Project Tracker",
    summary: "A system for tracking and managing construction projects.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    problem:
      "Project managers with limited technical expertise were tracking crucial construction project details in Excel spreadsheets, which was time-consuming, error-prone, and difficult to share with stakeholders.",
    solution:
      "A standardized web-based platform that increases accessibility to all construction project details, including financial tracking for purchase orders and invoices, project updates and tasks, and progress visuals for upper-level management.",
    technicalDetails: [
      "The usage of stored procedures improves maintainability and performance",
      "This (and other features of this application) are supported by a custom REST API built with Node.js and Express",
      "The construction projects feature integrates with the applicaiton's notification system, allowing users to select their notification preferences",
    ],
    role: "Full Stack Developer",
    roleDescription:
      "Working within a group of several developers, I helped both with designing and implementing the solution, specifically with the finance, task, and update aspects of the build. The most complicated part of my work was implementing the financial tracking functionality; understanding how the capital projects team handled their invoices, purchase orders, and budgets was crucial to building a solution that gelled with their current workflow.",
    images: [
      {
        src: "/images/project-details.png",
        alt: "Detail view of a construction project",
      },
      {
        src: "/images/project-updates.png",
        alt: "Detail view of a construction project updates",
      },
      {
        src: "/images/project-tasks.png",
        alt: "Detail view of a construction project tasks",
      },
      {
        src: "/images/project-notification-preferences.png",
        alt: "Detail view of a construction project notification preferences",
      },
    ],
  },
  {
    id: 4,
    title: "Environmental Sustainability Dashboard",
    summary:
      "A system for tracking and reporting on environmental sustainability metrics data.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    problem:
      "Stakeholders needed a way of keeping track of data regarding water, energy, waste, and the usage of certain substances in order to maintain compliance with a company-wide initiative to provide quartely sustainability metrics in a new reporting system.",
    solution:
      "A system for tracking and reporting on environmental sustainability metrics data that offers an easy and organized way to capture relevant data from multiple sources, then report on that data.",
    technicalDetails: [
      "Granular services and Express routes improve code organization and maintainability",
      "Similarly structured data is stored together in the database (but distinguished types) and displayed by a shared React component, resulting in fewer database tables to maintain and allowing for additional types to be added easily in the future",
      "Visual design cues and filtering capabilities allow users to quickly see what meters are missing data",
      "Reporting functionality allows CSV exports that comply to the requirements of the company-mandated tracking system",
      "Unit conversions are stored in the database, improving performance and simplicity and providing fast lookups when generating reports.",
      "As the first feature to cater to a new R&D site within the application, this was built in tandem with a multi-tenancy upgrade project; role-based access control restricts this feature to users with the appropriate role and tenant ID",
    ],
    role: "Full Stack Developer",
    roleDescription:
      "I worked with another developer to bring this project from inception to completion. This included identifying the problem by consulting with stakeholders, create the user flow and database schema, and implement the solution.",
    images: [
      {
        src: "/images/energy-meters.png",
        alt: "A list view of energy meters",
      },
      {
        src: "/images/meters-with-categories.png",
        alt: "A list view of energy meters and the select dropdown filter",
      },
    ],
  },
  {
    id: 5,
    title: "Video Snippet Library",
    summary:
      "A video snippet library for a machine maintainance education company.",
    technologies: ["Vue.js", "Laravel", "PHP"],
    problem:
      "A company specializing in machine maintenance education needed a way to store and share video snippets with their clients as a new service offering. While ideal in all other ways, the chosen video hosting platform left much to be desired when it came to granting or revoking access to many videos to users; through this platform, this action needed to be done by a single-user-to-single-video basis.",
    solution:
      "An administrative dashboard for uploading, managing, and sharing video snippets with clients that removes the need for admins to manually assign or revoke permissions.",
    technicalDetails: [
      "The administrative dashboard was built with Laravel Nova and Vue.js",
      "Integration with the Sprout Video API allows for video upload and management",
      "A scheduled job updates video permissions based on the user's access level (dictated by paid subscription start and end dates)",
      "Admins have the option to run the sync tool manually to accommodate urgent permission updates",
      "Detailed sync logs provide insight into the sync process, making debugging easy",
    ],
    role: "Lead Developer",
    roleDescription:
      "I consulted with stakeholders, designed the user flow and database schema, and implemented the solution.",
    images: [
      {
        src: "/images/sync.png",
        alt: "A view of the sync process",
      },
      {
        src: "/images/subscribers.png",
        alt: "A list view of subscribers",
      },
      {
        src: "/images/videos.png",
        alt: "A list view of videos",
      },
    ],
  },
  {
    id: 6,
    title: "Maintenance Request Portal",
    summary:
      "A portal for submitting and managing maintenance requests to the facilities department.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Material UI"],
    problem:
      "The facilities department was fielding maintenance requests through various channels and rarely received enough information to properly address the request without several follow-up conversations. This was causing frustration for all parties involved and delays in repairs and maintenance.",
    solution:
      "A portal for submitting maintenance requests to the facilities department, allowing maintaince workers to gather sufficient information from users to properly address the request without several follow-up conversations. Users are now able to track the status of their requests and receive updates on the progress of their repairs.",
    technicalDetails: [
      "As part of this build, I created a form-builder system that is reusable and can be used to quickly generate forms for other request types as they are added",
      "The portal integrates with the application's existing event system to provide relevant notifications to users according to their notification preferences",
      "Required fields enforced at the client and database level ensure the maintenance team receives sufficient information to properly address the request",
    ],
    role: "Lead Developer",
    roleDescription:
      "I consulted with stakeholders, designed the user flow and database schema, and implemented the solution. The solution included a reusable form-builder system that stores form field information in the database, which is then used to dynamically generate the form for each request.",
    images: [
      {
        src: "/images/requests-portal.png",
        alt: "Request portal",
      },
      {
        src: "/images/request-form-calibrate-new-asset.png",
        alt: "Request form to calibrate a new asset",
      },
      {
        src: "/images/request-email.png",
        alt: "Request form email",
      },
    ],
  },
  {
    id: 7,
    title: "Feedback Forms",
    summary:
      "A feedback form management system to field user feedback and improve the user experience.",
    technologies: ["React", "Node.js", "MySQL", "Material UI"],
    problem:
      "The campus-wide application that my team built for a large pharmaceutical company was not previously able to field customer feedback from users, which was hindering the company's ability to assess and improve the user experience.",
    solution:
      "A feedback form management system to field user feedback and improve the user experience.",
    technicalDetails: [
      "These forms utilize the form-builder system that I built with the maintenance request portal to reduce code duplication",
      "User role permissions dictate visibility and actions available to the user: admins can see and respond to all form submissions, while regular users can only view their own form submissions",
    ],
    role: "Lead Developer",
    roleDescription:
      "I consulted with stakeholders, designed the user flow and database schema, and implemented the solution. This included consulting with employees to create a feedback action plan (with clear and detailed documentation) to ensure the feedback forms were used effectively and channeled to the right people.",
    images: [
      {
        src: "/images/feedback-forms.png",
        alt: "Feedback forms portal",
      },
    ],
  },
];
