import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  GraduationCap,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";

export const DATA = {
  name: "Yohannes Dejene",
  initials: "YD",
  url: "https://yohannesdejene.vercel.app/",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://maps.app.goo.gl/1fPpck7hXMaCrn147",
  description:
    "Software Developer, specializing in fullstack developer with javascript and typescript. Passionate about building impactful solutions. Always exploring new technologies.",
  summary:
    "I'm a Software Developer passionate about creating user-centric solutions. With a background in [Computer science](/#education), I've honed my skills through internships , works experinces and  open-source contributions.I am ready to take on new challenges and continue to grow as a developer.",
  avatarUrl: "/logoYohannes.jpg",
  skills: [
    "Javascript",
    "Typescript",
    "Python",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "React Native",
    "Elasticsearch",
    "MongoDB",
    "GraphQL",
    "Docker",
    "NGINX",
    "Github Actions",
    "Azure",
    "Digital Ocean",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    // {
    //   href: "https://yohannesdejene.vercel.app/",
    //   icon: NotebookIcon,
    //   label: "Blog",
    // },
  ],
  contact: {
    email: "sahibsingh.work@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yohannesdejene",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johnabi",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/YohannesDejene5",
        icon: Icons.x,
        contact: true,
        navbar: false,
      },

      Telegram: {
        name: "Telegram",
        url: "https://t.me/johnabi",
        icon: Icons.telegram,
        contact: true,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:yohannesdejene23@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
      Upwork: {
        name: "Hire me on Upwork",
        url: "https://www.upwork.com/freelancers/~01a20310f713aefd72i",
        icon: Icons.Upwork,
        contact: true,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "HudHud Express",
      href: "",
      badges: ["Ethiopia"],
      location: "Addis Ababa",
      title: "Full Stack Developer",
      icon: false,
      logoUrl: "/experience/hudhud.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "* Developed multi-vendor e-commerce platform (commercepal.com/browse) with integrated local payments (Telebirr, CBE Birr, hala pay,hejira bank ), optimizing UI/UX for seamless user interactions. \n* Created warehouse management system, reducing order processing time by 25% through efficient React components, Tailwind CSS layouts, and optimized database queries using PostgreSQL, with back-end enhancements via Express.js. \n* Maintained a large-scale delivery management system for a logistics company, implementing real-time tracking, automated route optimization, and analytics, enhancing delivery efficiency and operational control. \n*  Participated in code reviews, requirement elicitation, and system design discussions, mentoring juniors on best practices for performance optimization and scalable architecture, contributing to a 25% improvement in project efficiency.",
    },
    {
      company: "Mazoom Invitation",
      href: "",
      badges: ["Remote", "Saudi Arabia"],
      location: "Remote",
      title: "Remote Frontend Developer",
      icon: false,
      logoUrl: "/experience/mazoom.png",
      start: "July 2024",
      end: "March 2025",
      description:
        "* Redesigned responsive digital invitation platform (beta.mazoom.sa) using React and Tailwind CSS, resulting in significant user engagement increase and 40% faster load times. \n* Integrated PostHog for event-based user behavior tracking, enabling data-driven UI improvements that boosted engagement by 25%. \n* Overhauled legacy website architecture, translating design mockups into functional, device-optimized pages.",
    },
    {
      company: "Right Businesses Solutions",
      href: "",
      badges: ["Ethiopia"],
      location: "Addis Ababa",
      title: "Fullstack Developer",
      icon: false,
      logoUrl: "/experience/rightbusinesses.png",
      start: "July 2023",
      end: "Nov 2023",
      description:
        "* Worked as a fullstack developer for development Real Estate sales and rent website.",
    },
  ],
  education: [
    {
      school: "Addis Ababa University",
      href: "https://www.aau.edu.et/",
      degree: "Bachelor of Science in Computer Science",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Multi-Vendor E-Commerce Platform",
      href: "https://commercepal.com/browse",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Developed a multi-vendor e-commerce platform with integrated local payments (Telebirr, CBE Birr, hala pay, hejira bank) and international API providers (Alibaba, Shein, Amazon, AliExpress), optimizing UI/UX for seamless user interactions across global markets. Enhanced platform scalability with React.js, Next.js, and Tailwind CSS, ensuring a responsive and visually appealing interface. Implemented a robust back-end with Express.js and PostgreSQL to manage vendor operations, payment processing, and inventory, resulting in a 30% increase in transaction efficiency and a 20% growth in user base within six months",
      technologies: ["React.js", "Bootstrap", "Express.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://commercepal.com/browse",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/commercepalHomePage.png",
      video: "",
      detail: [
        {
          title: "E-commercepal product detail page, with variantion selection",
          image: "/projects/commercepalProductDetailPage.png",
        },
        {
          title: "Cart and checkout summary page",
          image: "/projects/commercepalCart DetailPage.png",
        },

        {
          title: "Product search page",
          image: "/projects/commercepalProductSearch.png",
        },
      ],
    },
    {
      title: "Warehouse Management System",
      href: "",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Developed a comprehensive warehouse management system for a multi-vendor e-commerce platform integrated with major suppliers like Alibaba, AliExpress, and Shein. This system streamlined inventory tracking, order fulfillment, and logistics, resulting in a 25% reduction in order processing time. Leveraged efficient React.js components and Tailwind CSS for intuitive front-end interfaces, optimized PostgreSQL database queries for high-performance data handling, and enhanced back-end functionality with Express.js to ensure seamless API integrations and real-time updates.",
      technologies: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL"],

      links: [
        {
          type: "Website",
          href: "http://196.188.172.179:5053/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/warehouseLoginPage.png",
      video: "",
      detail: [
        {
          title: "E-commercepal order detail page ",
          image: "/projects/orderDetailPage.png",
        },
        {
          title: "Orders list page ",
          image: "/projects/orderPage.png",
        },
      ],
    },
    {
      title: "Maintained Large-Scale Delivery Management System",
      href: "https://admin.hudhudexpress.com/Courier/",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Maintained and optimized a sophisticated delivery management system tailored for a logistics company, featuring real-time tracking, and comprehensive analytics. Developed a mobile-responsive dashboard using React.js and CodeUi, to enable seamless monitoring of delivery operations, driver performance, and shipment statuses. Implemented advanced features such as live GPS tracking, automated delivery scheduling, and real-time notifications, enhancing operational efficiency and providing actionable insights for logistics managers and clients.",
      technologies: ["React.js", "Bootstrap", "CoreUi"],
      links: [
        {
          type: "Website",
          href: "https://admin.hudhudexpress.com/Courier/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hudhudAddShipmentPage.png",
      video: "",
    },
    {
      title: "Digital Invitation Platform",
      href: "https://beta.mazoom.sa",
      dates: "July 2024 - March 2025",
      active: false,
      description:
        "Redesigned responsive digital invitation platform using React and Tailwind CSS, resulting in significant user engagement increase and 40% faster load times.",
      technologies: ["React.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://beta.mazoom.sa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mazoonHomePage.png",
      video: "",
      detail: [
        {
          title: "Event creation page",
          image: "/projects/mazzomCreateEventPage.png",
        },
        {
          title: "Profile and subscription page",
          image: "/projects/mazoomProfileAndSubscription.png",
        },
        {
          title: "Arabic translation page",
          image: "/projects/mazoonArabTranslation.png",
        },
        {
          title: "Real time message between the event creater and invitee page",
          image: "/projects/mazoomRealTimeMessage.png",
        },
      ],
    },
    {
      title: "Real Estate Sales and Rent Website",
      href: "",
      dates: "July 2023 - Nov 2023",
      active: false,
      description:
        " Worked as a fullstack developer for development of a Real Estate sales and rent website, creating a user-friendly platform with responsive design using React.js and Tailwind CSS. Integrated a back-end system with Express.js and MySQL to manage property data and user accounts, improving client engagement and streamlining rental processes. ",
      technologies: [
        "React.js",
        "Next.js",
        "Express.js",
        "Mysql",
        "Material ui ",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Yohannesdejene/Realtor_eth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://github.com/Yohannesdejene/Realtor_eth/blob/main/public/homeImage.png?raw=true",
      video: "",
      detail: [],
    },
  ],
  personalProjects: [
    {
      title: "Developed school managment system , ",
      href: "https://sms-dashboard-three.vercel.app/",
      dates: "Dec 2024 -May 2025 ",
      active: true,
      description:
        "Developed a modern school management system with intention to update the outdated infrastructure of my former high school, streamlining the entire school operation process. Designed a responsive, intuitive interface using Next.js, Tailwind CSS, and Material UI to provide a seamless experience for administrators, teachers, students, and parents across devices. Implemented key features including student enrollment, attendance tracking, grade management, timetable scheduling, homework and exam management, and real-time notifications for announcements and updates. Built a robust back-end with Express.js, integrated with PostgreSQL and Neon DB for efficient and secure data management, enabling real-time data access and analytics. Improved administrative efficiency by 35% and enhanced user engagement through optimized workflows and a user-friendly interface.",
      technologies: ["React.js", "Bootstrap", "Express.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://sms-dashboard-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/smsHomePage.jpg",
      video: "",
      detail: [
        {
          title: "School admi9ns registration page",
          image: "/projects/smsAdminRegistration.jpg",
        },
        {
          title: "Login page for all users",
          image: "/projects/smsLoginPage.jpg",
        },
        {
          title: "Student records list and search page",
          image: "/projects/smsStudentListAndSearch.jpg",
        },
        {
          title: "Student registration page",
          image: "/projects/smsStudentRegistration.jpg",
        },
        {
          title: "Semisters add and edit page",
          image: "/projects/smsSemisterEdit.jpg",
        },
      ],
    },
    {
      title: "Simple AI Personal assitant",
      href: "https://aiassit.vercel.app/",
      dates: "Aug 2025 -set 2025",
      active: true,
      description:
        "Developed a lightweight AI personal assistant focused on scheduling, appointment management, and task organization, seamlessly integrated with Google Calendar for real-time synchronization. Designed a responsive and intuitive interface using React.js, Tailwind CSS, and Shadcn UI to ensure a smooth user experience across devices ",
      technologies: ["React.js", "Bootstrap", "Express.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://aiassit.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Yohannesdejene/Personal-Assistant-AI-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/AIAssistHomePage.png",
      video: "",
      detail: [
        {
          title: "Ai assit home page ",
          image: "/projects/AIAssistHomePage.png",
        },
        {
          title: "Request api key",
          image: "/projects/AIASSIstApiKeyPage.png",
        },
        {
          title: "Google calendar access request",
          image: "/projects/AIASSITgoogleCalander.png",
        },
      ],
    },
  ],

  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
