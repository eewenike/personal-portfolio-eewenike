export const profile = {
  name: 'Esomchukwu Nicole Ewenike',
  phone: '(585) 910-3095',
  phoneHref: 'tel:+15859103095',
  email: 'esomchukwuewenike@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esomchukwuewenike',
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
  stack: string[]
  dates: string
  points: string[]
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
export const additionalProjects: Project[] = []

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
    items: ['pandas', 'NumPy', 'Flask', 'Agile'],
  },
]

export const personalSkills = [
  {
    title: 'Client communication',
    detail: 'First point of contact for clients at H&R Block, handling high call volume professionally.',
  },
  {
    title: 'Teaching & mentoring',
    detail: 'Clarified complex theory-of-computation concepts for students as a Teaching Assistant.',
  },
  {
    title: 'Coordination & leadership',
    detail: 'Managed multiple student groups for a 3D game design project and led front-desk scheduling.',
  },
  {
    title: 'Accuracy & compliance',
    detail: 'Reviewed EDI reports, ASNs, and NAFTA certificates of origin to keep shipments accurate and compliant.',
  },
  {
    title: 'Research collaboration',
    detail: 'Compiled technical reports and presented findings to faculty advisors with a research team.',
  },
]
