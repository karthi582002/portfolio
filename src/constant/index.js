export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Syed Ali',
        position: 'Director of KGN Academy',
        img: 'assets/syed.JPG',
        review:
            'Working with Karthi was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
];

export const myProjects = [
    {
        title: 'CodeQuest - A Code Challenge Platform (Developing Phase)',
        desc: 'A platform for developers to share their code challenges and receive feedback from other developers. Even it is helpful for student to prepare for interviews and prepare their resume.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, is designed for optimal performance and scalability.',
        href: 'https://youtu.be/ljrhBFfcsfE',
        texture: '/textures/project/CodeQuest.mp4',
        logo: '/assets/img.png',
        logoStyle: {
            backgroundColor: 'rgba(0,111,255,0.83)',
            border: '0.2px solid #161f2a',
            boxShadow: '0px 0px 60px 0px #161f2a',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextJS.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'TrackIT - Smart Attendance System ',
        desc: 'Developed a facialrecognition attendance system using Python and OpenCV\n' +
            'with the face_recognition library, achieving 95% identification accuracy.\n',
        subdesc:
            'Built a dynamic admin dashboard using Next.js, offering attendance tracking,\n' +
            'batch management, and analytics features.\n' +
            'Enhanced system reliability through comprehensive testing and error handling',
        href: 'https://youtu.be/RNziIfHPRH8',
        texture: '/textures/project/TrackIT.mp4',
        logo: '/assets/trackit.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextJS.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 4,
                name: 'OpenCV',
                path: '/assets/opencv.png',
            },
            {
                id: 5,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'Flappy Bird Game ',
        desc: 'Designed and implemented a Java-based game using Swing for an\n' +
            'interactive graphical interface',
        subdesc:'Developed core game mechanics including collision detection, score\n' +
            'tracking, and smooth animations, ensuring seamless gameplay',
        href: 'https://youtu.be/XVp70mLo3Oc',
        texture: '/textures/project/flappy-bird.mp4',
        logo: '/assets/flappy-bird.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.png',
            },
        ],
    },
    {
        title: 'VaultX - Online Banking Platform',
        desc: 'VaultX is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, VaultX ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://banking-seven-beta.vercel.app/sign-in',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/vaultX.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },

    {
        'title': 'PingPong Pro - Multiplayer Game',
        'desc': 'PingPong Pro is an interactive multiplayer table tennis game built with Python. It features smooth gameplay mechanics, customizable settings, and real-time scoring updates for a competitive experience.',
        'subdesc': 'Developed using Python and Pygame, PingPong Pro ensures an engaging and lightweight gaming experience, suitable for all skill levels.',
        'href': 'https://youtu.be/PUZZScLRqzw',
        'texture': '/textures/project/ping-pong.mp4',
        'logo': '/assets/ping-pong.png',
        'logoStyle': {
            'backgroundColor': '#121212',
                'border': '0.2px solid #FFD700',
                'boxShadow': '0px 0px 40px 0px #FFD7004D',
        },
        'spotlight': '/assets/spotlight3.png',
        'tags': [
            {
                'id': 1,
                'name': 'Python',
                'path': '/assets/python.png',
        },

        ],
        }
    


];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];