export const portfolioData = {
  name: "Anshu Kumar Singh",
  title: "Flutter Developer",
  contact: {
    phone: "+91 99 10 99 6171",
    email: "anshuksawork@gmail.com",
    linkedin: "https://linkedin.com/in/anshu-ks", 
    github: "https://github.com/ThisIsSidam" 
  },
  about: "A young software developer with practical experience building production mobile applications using Flutter and Firebase. Proficient in UI development, state management (Riverpod, Bloc), API integration, notifications and more. Familiar with contributing in development of internal tools and dashboards, with core strength in mobile app development.",
  skills: [
    "Flutter & Dart",
    "Firebase (Firestore, Auth, Cloud Functions, FCM)",
    "State Management (Riverpod, Provider, Bloc)",
    "API Integration (Dio)",
    "Android Development (Kotlin)"
  ],
  projects: [
    {
      title: "Rem",
      description: "Built a reminder application with scheduled and repetitive notifications using Awesome Notifications. Enabled local data storage using ObjectBox.",
      tags: ["Flutter", "ObjectBox", "Awesome Notifications"],
      link: "#"
    }
  ],
  experience: [
    {
      title: "Flutter Developer",
      company: "Stag (Startup) | Kolkata, West Bengal",
      period: "2025 September - January",
      items: [
        "Led mobile development for the Stag platform.",
        "Built admin tools for internal operations."
      ],
      sections: [
        {
            title: "Stag Flutter App",
            description: "Developed a comprehensive event booking application.",
            status: "Not published yet",
            items: [
                "Implemented entire app workflow including event discovery, search, and ticket booking.",
                "Integrated Firebase services including Remote Configs for dynamic updates and Cloud Functions for backend logic.",
                "Built a robust real-time chat system using Firestore.",
                "Created Manager UI for event organizers to upload and manage events."
            ]
        },
        {
            title: "Stag Admin",
            description: "Built a web-based admin dashboard for internal use.",
            status: "Internal Tool",
            items: [
                "Developed using React with a Node.js backend.",
                "Enabled efficient management of users, events, and bookings.",
                "Implemented automated data cleanup routines."
            ]
        }
      ]
    },
    {
      title: "Flutter Developer Intern",
      company: "AEPL | Kolkata, West Bengal",
      period: "2024 October – 2025 July",
      items: [
        "Worked on multiple production applications and internal tools.",
        "Gained hands-on experience with production-grade Flutter development."
      ],
      sections: [
        {
            title: "Vegverse",
            description: "A food delivery application.",
            link: "https://play.google.com/store/apps/details?id=com.vegverse.app",
            items: [
                "Worked on various UI elements ensuring a smooth user experience.",
                "Implemented complex UI interactions like disappearing app bars.",
                "Optimized UI performance for scrolling lists."
            ]
        },
        {
            title: "Urdoer",
            description: "Handled the entire application development independently.",
            link: "https://play.google.com/store/apps/details?id=com.urdoer.app",
            items: [
                "Managed state using Riverpod.",
                "Handled all API integrations using Dio.",
                "Implemented a chat system and cloud-based file manager."
            ]
        },
        {
            title: "Internal Android Automation App",
            description: "Native Android application for internal process automation.",
            status: "Internal Tool",
            items: [
                "Built using Kotlin for Android.",
                "Controlled via a web interface built with React and Node.js.",
                "Automated key internal workflows."
            ]
        }
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (Information Technology)",
      school: "MAKAUT IN-HOUSE",
      period: "2023 - Present (Till 2027)",
      items: []
    },
    {
      degree: "Certifications",
      school: "Various Platforms",
      period: "",
      items: [
        "Coursera - by Google: Introduction to Git and Github",
        "Udemy - by Dr. Frank Mitropoulos: C++ Programming",
        "Udemy - by Scott Barrett: Python Data Structures & Algorithms"
      ]
    }
  ]
};
