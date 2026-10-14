export const profile = {
  name: 'Esomchukwu Nicole Ewenike',
  phone: '(585) 910-3095',
  phoneHref: 'tel:+15859103095',
  email: 'esomchukwuewenike@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esomchukwuewenike',
  github: 'https://github.com/eewenike',
  resume: '/esomchukwu-nicole-ewenike-resume.pdf',
}

export const education = {
  school: 'University at Buffalo',
  location: 'Buffalo, NY',
  degree: 'Bachelor of Science in Computer Science',
  gpa: '3.8/4.0',
  date: 'December 2025',
}

export type Experience = {
  role: string
  org: string
  location: string
  dates: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Lead Customer Service Representative',
    org: 'Cannon Industries',
    location: 'Rochester, New York',
    dates: 'January 2026 – August 2026',
    points: [
      'Processed daily shipping paperwork and reconciled prior-day logistics documentation.',
      'Generated and reviewed EDI comparison reports to ensure order accuracy across customer accounts.',
      'Submitted Advance Shipping Notices (ASNs) to customers in compliance with shipping requirements.',
      'Prepared NAFTA certificates of origin to support compliant cross-border shipments.',
      'Utilized quoting systems to prepare and process customer price quotes.',
    ],
  },
  {
    role: 'Lead Receptionist',
    org: 'H&R Block',
    location: 'Rochester, New York',
    dates: 'December 2025 – April 2026',
    points: [
      'Served as first point of contact, addressing client inquiries in a fast-paced office environment.',
      'Scheduled, rescheduled, and canceled client appointments to optimize daily tax preparer workflow.',
      'Checked in clients and verified documentation to ensure smooth transition to appointments.',
      'Managed high call volume while maintaining a professional and welcoming front-desk experience.',
      'Coordinated scheduling logistics to minimize wait times and maximize preparer availability during peak tax season.',
    ],
  },
  {
    role: 'NextGen Plastic Sorting Researcher',
    org: 'University at Buffalo',
    location: 'Buffalo, New York',
    dates: 'May 2025 – July 2025',
    points: [
      'Investigated NIR spectroscopy limitations in detecting contaminated, colored, and multilayer plastics to enhance sorting accuracy.',
      'Applied and compared machine learning models and data preprocessing pipelines to improve plastic type classification.',
      'Designed a proposed system integrating multiple spectroscopy techniques to increase recycling efficiency and material recovery rates.',
      'Collaborated with a research team to compile results into technical reports and present findings to faculty advisors.',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'University at Buffalo',
    location: 'Buffalo, New York',
    dates: 'January 2025 – December 2025',
    points: [
      'Supported students in CSE 396 (Introduction to the Theory of Computation) through office hours.',
      'Clarified complex concepts and strengthened problem-solving skills.',
      'Assisted in grading assignments and exams with accuracy and consistency.',
      'Managed multiple groups for CSE 420 (3D Video Game Development) game design project.',
    ],
  },
]

export type Project = {
  title: string
  stack?: string[]
  dates?: string
  points?: string[]
  paragraphs?: string[]
  link?: { href: string; label: string }
}

export const resumeProjects: Project[] = [
  {
    title: 'Nutritional Meal Planning Website',
    stack: ['React', 'PHP', 'SQL'],
    dates: 'January 2025 – December 2025',
    points: [
      'Developed a full-stack nutrition app with modules for Profiles, Recipes, Meal Planner, Shopping List, and Progress Tracking using React, PHP, and MySQL.',
      'Built secure APIs with prepared statements, CSRF tokens, input sanitization, same-site cookies, and CORS; ensured cross-table sync for edits and deletes.',
      'Delivered a responsive, accessible UI using Tailwind and reusable components with modals, toasts, keyboard support, and mobile optimization.',
      'Designed a normalized database schema and optimized queries for fast, consistent reads/writes across recipes, ingredients, and user data.',
      'Created end-to-end tests and validated APIs with Postman and DevTools, covering auth flows, errors, and security edge cases.',
    ],
  },
  {
    title: 'AWS Cloud-Resume Challenge',
    stack: ['AWS', 'Python', 'JavaScript'],
    dates: 'December 2024 – February 2025',
    points: [
      'Designed and deployed a responsive static website using HTML, CSS, and JavaScript, hosted on Amazon S3 with CloudFront for global content distribution.',
      'Configured Route 53 for domain registration and DNS management, ensuring high availability and reliability.',
      'Built a serverless backend using AWS Lambda, utilizing DynamoDB to manage visitor counts for scalability and performance.',
      'Implemented a CI/CD pipeline to automate deployments and improve efficiency.',
      'Automated infrastructure provisioning using Terraform and configured Amazon CloudWatch for real-time monitoring and logging, while securing traffic with HTTPS via AWS Certificate Manager.',
    ],
  },
]

/**
 * Add projects that are not on the résumé here — they appear on /projects.
 * Each entry uses the same shape as resumeProjects.
 */
export const additionalProjects: Project[] = [
  {
    title: 'Same Brain',
    stack: ['Multiplayer word game', '2–8 players', 'AI-assisted development'],
    paragraphs: [
      'Same Brain is a cooperative multiplayer word game for 2–8 players. Everyone joins using a room code on their own device, secretly submits a word, and then reveals their answer together. Players use the connections between those words to guide their next choices, working toward the moment when everyone picks the same word.',
      'I shaped the concept, gameplay rules, visual direction, and feature decisions through AI-assisted development. A central challenge was keeping answers, player readiness, and countdowns synchronized while preventing reused words. I also focused on making the experience welcoming through cozy visuals, optional background music, countdown cues, and celebration sounds.',
      'The project helped me explore how small design decisions affect the way people play together. For example, allowing players to edit their answers after tapping Ready makes the experience more forgiving. My next steps would be testing with real groups, improving connection suggestions, and exploring a highlight reel of the group’s best matches.',
    ],
    link: { href: 'https://profound-parfait-124b01.netlify.app/', label: 'Play Same Brain' },
  },
]

export const technicalSkills = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Rust'],
  },
  {
    label: 'Developer Tools',
    items: ['Docker', 'Git', 'AWS Cloud', 'Tesseract', 'MongoDB'],
  },
  {
    label: 'Libraries & Skills',
    items: [
      'pandas',
      'NumPy',
      'Matplotlib',
      'Plotly',
      'MATLAB',
      'scikit-learn',
      'PyTorch',
      'TensorFlow',
      'Power BI',
      'Tableau',
      'Excel',
      'Flask',
      'Agile',
    ],
  },
]

export type Strength = {
  title: string
  example: string
  why: string
}

export const strengths: Strength[] = [
  {
    title: 'Communication',
    example:
      'I explain complex concepts to students in a way that clicks, and I respond to client questions with patience and clarity.',
    why: 'Good work only moves forward when people understand it, whether that is a proof, a policy, or a next step.',
  },
  {
    title: 'Organization',
    example:
      'I coordinate appointments so busy days run on time, and I keep logistics documentation in order from one day to the next.',
    why: 'When the details are organized, the people around me can focus on their own work instead of chasing loose ends.',
  },
  {
    title: 'Analytical thinking',
    example:
      'In research, I compared methods side by side and dug into why classification broke down for certain kinds of materials.',
    why: 'I would rather understand why something fails than guess at a fix, because that is what leads to better decisions.',
  },
  {
    title: 'Creativity',
    example:
      'I shaped the cozy visual style, the sound, and the cooperative gameplay of Same Brain, my personal game project.',
    why: 'Creativity is how I make something feel intentional and welcoming, not just functional.',
  },
  {
    title: 'Attention to detail',
    example:
      'I check documentation carefully, test how an application actually behaves, and think through even the smallest gameplay rules.',
    why: 'Small mistakes add up quickly, and catching them early saves everyone time and builds trust in the final result.',
  },
  {
    title: 'Collaboration',
    example:
      'I have contributed to a research team, supported student project groups, and directed an AI-assisted personal project from idea to playable game.',
    why: 'I enjoy helping a group get somewhere together, and I know when to lead and when to support.',
  },
  {
    title: 'Independent learning',
    example:
      'I take on practical web and cloud projects on my own time and keep exploring new tools as I go.',
    why: 'Teaching myself through hands-on building means I can pick up what a team needs without waiting to be shown.',
  },
  {
    title: 'Thoughtful iteration',
    example:
      'I refined Same Brain through specific decisions about sound, player readiness, and how players interact with each other.',
    why: 'The first version is rarely the best one, and I like making deliberate improvements until something truly works.',
  },
]

export const nextInterests = [
  "I’m interested in opportunities in data analysis, AI prompting and evaluation, software quality assurance, and data quality. My computer science background, machine learning research, and hands-on projects have given me experience comparing approaches, analyzing results, and testing how applications behave. Through AI-assisted development, I’ve also explored how clear instructions and careful review shape the quality of AI-generated work. I’m looking to bring my technical foundation, attention to detail, and communication skills to a team while continuing to learn and solve practical problems.",
  "While the areas listed interest me, I’m open to a wide range of opportunities where I can apply my technical knowledge, analytical thinking, and communication skills. I’m eager to explore different career paths, learn new tools, and grow professionally while contributing meaningful work.",
]
