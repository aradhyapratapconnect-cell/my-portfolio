# Product Requirements Document (PRD)
## Aradhya Pratap Singh — Class 10 IT Portfolio Website

**Document status:** Implementation-ready  
**Product type:** Frontend-only personal academic IT portfolio  
**Primary purpose:** Present Aradhya's Class 10 IT learning, practical application of those skills, and selected software projects in a polished web portfolio.

---

## 1. Product Vision

Create a premium, minimal, bright, responsive portfolio website for **Aradhya Pratap Singh, Class 10, The Scholar Valley Sr. Sec. School**.

The website must primarily communicate **academic IT learning and practical application**, not function as a job-seeking résumé. Personal software projects are evidence of learning and implementation.

The portfolio should feel like a carefully designed digital school portfolio created by a student developer.

## 2. Core Problem

A conventional PDF portfolio is static and difficult to explore. The website should turn the same academic portfolio into an interactive experience where a teacher can quickly understand:
- who the student is;
- what has been learned in Class 10 IT;
- how those concepts relate to practical technology work;
- which projects have been built;
- what technologies and skills have been used;
- where to find the student's GitHub profile.

## 3. Target Users

### Primary
- School teacher evaluating the Class 10 IT portfolio.
- School staff or evaluator reviewing the student's IT learning.

### Secondary
- Student/peer exploring the work.
- Anyone visiting the public portfolio.

## 4. Product Goals

1. Cover the Class 10 Employability Skills textbook structure accurately.
2. Explain important concepts without turning the site into a textbook copy.
3. Connect learning to practical examples from Aradhya's projects.
4. Present three projects clearly: Clocke, Habiter, Kycelius.
5. Provide a clean GitHub profile link.
6. Work on desktop, laptop, tablet and mobile.
7. Provide print/PDF-friendly output so the web portfolio can also be submitted as a PDF if needed.
8. Load quickly and remain accessible.
9. Avoid a generic developer-portfolio aesthetic.

## 5. Non-goals

Do NOT build:
- Backend services.
- User authentication.
- CMS/admin dashboard.
- Database.
- Login/signup.
- Blog platform.
- Contact-form backend.
- Job application/resume workflow.
- Individual repository analytics dashboard unless later requested.
- Achievement section.
- Personal photograph/profile image.
- Invented certificates, awards or accomplishments.
- Repository links for every project unless explicitly requested later.

## 6. Information Architecture

1. Home
2. About
3. My Journey
4. Portfolio
   - My Projects
   - Skills
   - GitHub
5. Class 10 IT Portfolio
   - Communication Skills
   - Self-management Skills
   - Information and Communication Technology Skills
   - Entrepreneurial Skills
   - Green Skills
6. My Interests
7. Contact

## 7. Home

Hero must immediately establish:
- Aradhya Pratap Singh
- Class 10
- The Scholar Valley Sr. Sec. School
- An academic/project-oriented statement
- CTA to explore portfolio
- CTA to GitHub

Suggested positioning:
“Exploring IT through learning, building and practical projects.”

Do not overstate professional status.

## 8. About

Explain Aradhya as a student who learns technology by building practical projects.

The copy should emphasize:
- Class 10 IT learning;
- software/project development;
- experimentation;
- practical application;
- problem solving;
- continuous learning.

Do not make it sound like a job résumé.

## 9. My Journey

Combine two parallel dimensions:
- Class 10 IT learning journey.
- Practical technology/project-building journey.

The timeline should show progression from learning concepts to applying them in projects.

## 10. Portfolio — Projects

### Clocke
Status: Developing  
Purpose: Helps users make their time more productive and their work more efficient.  
Technology: HTML, CSS, JavaScript.

### Habiter
Status: Completed  
Purpose: Habit-tracking application that helps users track habits.  
Technology: TypeScript, Electron, CSS.

### Kycelius
Status: Developing  
Purpose: Autonomous AI agent designed to perform tasks for the user, including creating files, projects and other computer-based work.  
Technology: TypeScript, React, Electron, Tailwind CSS.

Project cards should include:
- name;
- status;
- purpose;
- technologies;
- concise learning/application connection;
- optional GitHub button only where explicitly configured.

Do not invent features that were not supplied.

## 11. Portfolio — Skills

### Languages
- C++
- JavaScript
- TypeScript
- Java
- HTML/CSS

### Frameworks / technologies
- React
- Electron
- Tailwind CSS
- Vite where used by the implementation

### Tools / platforms
- Git
- GitHub
- Anti-Gravity

Present these as current working technologies, not claims of expert mastery.

## 12. Portfolio — GitHub

Use only the profile link:
https://github.com/aradhyapratapconnect-cell

Do not list arbitrary repositories unless configured in the data.

A simple premium GitHub section should explain that the profile contains the student's public development work.

## 13. Class 10 IT Portfolio

The academic section must follow the uploaded Employability Skills Class X PDF exactly at the unit/session-title level.

Source structure:

### Unit 1 — Communication Skills
- Session 1 — Methods of Communication
- Session 2 — Verbal Communication
- Session 3 — Non-verbal Communication
- Session 4 — Communication Cycle and Importance of Feedback
- Session 5 — Barriers to Effective Communication
- Session 6 — Writing Skills — Parts of Speech
- Session 7 — Writing Skills — Sentences

### Unit 2 — Self-management Skills
- Session 1 — Stress Management
- Session 2 — Self-awareness — Strength and Weakness Analysis
- Session 3 — Self-motivation
- Session 4 — Self-regulation — Goal Setting
- Session 5 — Self-regulation — Time Management

### Unit 3 — Information and Communication Technology Skills
- Session 1 — Basic Computer Operations
- Session 2 — Performing Basic File Operations
- Session 3 — Computer Care and Maintenance
- Session 4 — Computer Security and Privacy

### Unit 4 — Entrepreneurial Skills
- Session 1 — Entrepreneurship and Society
- Session 2 — Qualities and Functions of an Entrepreneur
- Session 3 — Myths about Entrepreneurship
- Session 4 — Entrepreneurship as a Career Option

### Unit 5 — Green Skills
- Session 1 — Sustainable Development
- Session 2 — Our Role in Sustainable Development

The academic UI should provide:
- unit overview;
- session navigation;
- concise concept explanations;
- important terms;
- learning outcomes;
- “How I can apply this” section where appropriate;
- project connection where genuinely relevant.

Do not reproduce long textbook passages verbatim. Summarize concepts in original wording.

## 14. Learning-to-Project Mapping

Where appropriate, create a visual connection:

IT concept → practical application → project/example.

Examples:
- Communication → explaining a project and documenting requirements.
- Self-management → planning development time and setting goals.
- ICT skills → file management, computer maintenance, security and privacy.
- Entrepreneurship → identifying a problem and building a solution.
- Green skills → responsible use of digital resources and awareness of sustainability.

Do not force a project connection onto concepts where it would be artificial.

## 15. My Interests

Separate from the academic portfolio.

Interests:
- AI/ML
- Software Engineering
- Web Development
- Application UI/UX
- Cybersecurity
- Automation

This section should remain secondary to the IT portfolio.

## 16. Contact

Public links:
- GitHub: https://github.com/aradhyapratapconnect-cell
- Email: aradhyapratapconnect@gmail.com
- Instagram: https://instagram.com/__pratap_yt_

Use links only; no backend contact form.

## 17. Design Direction

Premium minimal, bright and refined.

Characteristics:
- white/off-white foundation;
- soft gray surfaces;
- near-black readable text;
- restrained accent colors;
- thin borders;
- generous whitespace;
- subtle shadows;
- elegant typography;
- restrained gradients;
- Level-2 motion;
- no excessive neon;
- no dark hacker aesthetic.

## 18. Responsive Requirements

Support:
- large desktop;
- desktop;
- laptop;
- tablet;
- mobile;
- small mobile;
- varied aspect ratios and screen sizes.

Mobile navigation: animated navigation drawer.

## 19. Technology Constraints

Recommended:
- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- React Bits
- Lucide
- additional component libraries only when justified

No backend.

Use static typed data modules for portfolio/curriculum content.

## 20. Performance

Must include:
- lazy loading;
- sensible code splitting;
- optimized assets;
- minimal JavaScript where possible;
- animation throttling/avoidance on constrained devices;
- prefers-reduced-motion;
- semantic HTML;
- SEO metadata;
- Lighthouse-oriented optimization;
- error boundaries;
- no unnecessary dependencies.

## 21. Accessibility

Must include:
- keyboard navigation;
- visible focus states;
- semantic landmarks;
- accessible buttons and links;
- meaningful ARIA labels where needed;
- adequate contrast;
- reduced-motion support;
- logical heading hierarchy.

## 22. Print / PDF

Implement a print stylesheet:
- A4-friendly layout;
- hide interactive navigation;
- hide decorative animation;
- preserve important content;
- avoid awkward page breaks;
- print cleanly in browser “Save as PDF”.

## 23. MVP

Must have:
- Home
- About
- My Journey
- Projects
- Skills
- GitHub
- all five IT units and all sessions
- My Interests
- Contact
- responsive navigation
- accessibility baseline
- print stylesheet
- production build

Nice-to-have:
- advanced scroll transitions;
- richer project interactions;
- subtle visual data representations;
- live GitHub profile metadata if later approved.

## 24. Success Criteria

The product succeeds when:
- a teacher can understand the student's IT learning journey within a few minutes;
- all five Employability Skills units are easy to navigate;
- projects are clearly connected to practical learning;
- the site works smoothly on all target screen classes;
- the site can be saved as a readable PDF;
- there are no invented personal claims;
- Lighthouse/performance and accessibility are strong;
- the interface feels polished without being visually excessive.

## 25. Acceptance Principle

Accuracy and academic clarity have priority over visual effects.

When a design choice conflicts with:
1. textbook accuracy,
2. readability,
3. accessibility,
4. performance,

the first four win over decoration.
