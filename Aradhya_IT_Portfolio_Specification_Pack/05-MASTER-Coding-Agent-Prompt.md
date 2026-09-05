# MASTER CODING-AGENT PROMPT
## Build Aradhya Pratap Singh's Class 10 IT Portfolio Website

You are a senior frontend engineer, UI/UX engineer and product-minded developer.

Build the complete production-quality frontend application described below.

---

# PRODUCT CONTEXT

This is the Class 10 IT portfolio of:

**Aradhya Pratap Singh**  
**Class 10**  
**The Scholar Valley Sr. Sec. School**

This is NOT a job-seeking portfolio.

The product priority is:

1. Class 10 IT learning and academic presentation.
2. Practical application of those concepts.
3. Student software projects.
4. Skills and interests.
5. GitHub/contact links.

The website should feel like a premium digital academic portfolio created by a student who builds software.

---

# NON-NEGOTIABLE CONSTRAINTS

- Frontend only.
- No backend.
- No authentication.
- No database.
- No CMS.
- No contact form backend.
- No invented achievements.
- No personal photograph.
- No fabricated project facts.
- Do not include the deleted/non-working fourth project.
- Do not make this look like a generic job résumé.
- Do not overuse dark/hacker aesthetics.
- Do not force every UI library into the project.
- Prefer quality and consistency over dependency count.
- Do not reproduce long copyrighted textbook passages verbatim. Summarize the supplied textbook content in original language.

---

# TECH STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide
- React Bits
- Additional component libraries only when a component genuinely improves the design.

Keep dependencies purposeful.

---

# VISUAL DIRECTION

Design language:

**Premium + Minimal + Bright + Academic + Modern**

Foundation:
- white/off-white;
- soft gray;
- near-black typography;
- restrained blue or similarly subtle accent;
- thin borders;
- generous whitespace;
- elegant typography;
- soft shadows;
- restrained gradients;
- Level-2 animation.

Do not create:
- neon cyberpunk;
- excessive glassmorphism;
- excessive glow;
- giant decorative 3D objects;
- visually noisy layouts.

---

# DESIGN TOKENS

Use approximately:

```css
--background: #FAFAF9;
--surface: #FFFFFF;
--surface-subtle: #F5F5F4;
--surface-muted: #EFEFED;
--text-primary: #18181B;
--text-secondary: #52525B;
--text-muted: #71717A;
--border: #E4E4E7;
--border-strong: #D4D4D8;
--accent: #2563EB;
--accent-soft: #EFF6FF;
--success: #16A34A;
--warning: #D97706;
--danger: #DC2626;
```

Tune only where necessary.

---

# SITE STRUCTURE

Implement:

1. Home
2. About
3. My Journey
4. Portfolio
   - My Projects
   - Skills
   - GitHub
5. Class 10 IT Portfolio
6. My Interests
7. Contact

Do NOT add an Achievements section.

---

# HOME

Hero content must include:

**Aradhya Pratap Singh**

Class 10  
The Scholar Valley Sr. Sec. School

Positioning should communicate:

A Class 10 student exploring IT through learning, building and practical software projects.

Buttons:
- Explore Portfolio
- GitHub

Keep the hero elegant and concise.

---

# ABOUT

Write a mature first-person student introduction.

The central message:

“I learn technology by understanding concepts and applying them through practical projects.”

Mention:
- Class 10 IT;
- software development;
- practical project building;
- problem solving;
- learning;
- experimentation.

Do not claim professional expertise.

---

# MY JOURNEY

Create a responsive timeline combining:

## Academic path
Class 10 IT:
- communication;
- self-management;
- ICT;
- entrepreneurship;
- green skills.

## Practical path
- learning web/software development;
- building Clocke;
- completing Habiter;
- developing Kycelius.

Do not invent dates.

---

# PROJECTS

Create three project cards.

## CLOCKE

Status: Developing

Purpose:
A productivity/time-awareness oriented project designed to help make time more productive and work more efficient.

Technology:
HTML, CSS, JavaScript

## HABITER

Status: Completed

Purpose:
A habit-tracking application that helps users track habits.

Technology:
TypeScript, Electron, CSS

## KYCELIUS

Status: Developing

Purpose:
An autonomous AI agent intended to perform tasks for the user, including creating files, projects and other computer-based work.

Technology:
TypeScript, React, Electron, Tailwind CSS

Do not invent features.

---

# SKILLS

## Languages
- C++
- JavaScript
- TypeScript
- Java
- HTML/CSS

## Frameworks / Technologies
- React
- Electron
- Tailwind CSS

## Tools
- Git
- GitHub
- Anti-Gravity

Do not show fake percentage proficiency.

---

# GITHUB

Use only:

https://github.com/aradhyapratapconnect-cell

Create a premium profile CTA.

Do not fabricate statistics.

Do not list repositories automatically.

---

# CLASS 10 IT PORTFOLIO

This is the most important section after the core identity.

Use the supplied Employability Skills Class X PDF as the source.

The exact unit/session structure is:

## UNIT 1 — Communication Skills

1. Methods of Communication
2. Verbal Communication
3. Non-verbal Communication
4. Communication Cycle and Importance of Feedback
5. Barriers to Effective Communication
6. Writing Skills — Parts of Speech
7. Writing Skills — Sentences

## UNIT 2 — Self-management Skills

1. Stress Management
2. Self-awareness — Strength and Weakness Analysis
3. Self-motivation
4. Self-regulation — Goal Setting
5. Self-regulation — Time Management

## UNIT 3 — Information and Communication Technology Skills

1. Basic Computer Operations
2. Performing Basic File Operations
3. Computer Care and Maintenance
4. Computer Security and Privacy

## UNIT 4 — Entrepreneurial Skills

1. Entrepreneurship and Society
2. Qualities and Functions of an Entrepreneur
3. Myths about Entrepreneurship
4. Entrepreneurship as a Career Option

## UNIT 5 — Green Skills

1. Sustainable Development
2. Our Role in Sustainable Development

For each session create:
- exact session title;
- concise original explanation;
- important concepts;
- key terms;
- practical relevance;
- learning outcomes;
- optional “How this connects to my learning/projects” section.

Do not simply paste textbook paragraphs.

The academic navigation should be highly usable:
- desktop: sidebar;
- tablet: collapsible navigation;
- mobile: selector/drawer.

---

# IT-TO-PROJECT CONNECTION

Where natural, show:

**Concept → Application → Example**

Possible examples:
- communication → documenting/explaining project ideas;
- self-management → development planning and time management;
- ICT → file operations, maintenance, security and privacy;
- entrepreneurship → identifying problems and building solutions;
- green skills → responsible use of digital resources.

Do not force connections.

---

# MY INTERESTS

Separate from the academic section.

Include:
- AI/ML
- Software Engineering
- Web Development
- Application UI/UX
- Cybersecurity
- Automation

This section should not dominate the IT portfolio.

---

# CONTACT

Use links:

GitHub:
https://github.com/aradhyapratapconnect-cell

Email:
mailto:aradhyapratapconnect@gmail.com

Instagram:
https://instagram.com/__pratap_yt_

No backend contact form.

---

# COMPONENT ARCHITECTURE

Build reusable components:

- Button
- IconButton
- Badge
- Card
- ProjectCard
- SkillChip
- SectionHeader
- Timeline
- TimelineItem
- UnitNavigation
- SessionNavigation
- LessonCard
- ConceptCard
- LearningOutcome
- ExternalLink
- Drawer
- Footer

Separate content/data from presentation.

---

# DATA ARCHITECTURE

Use typed static data.

Example:

```ts
type Project = {
  id: string;
  name: string;
  status: "completed" | "developing";
  description: string;
  technologies: string[];
  githubUrl?: string;
};

type ITSession = {
  id: string;
  title: string;
  overview: string;
  concepts: string[];
  keyTerms: string[];
  learningOutcomes: string[];
  application?: string;
};

type ITUnit = {
  id: string;
  title: string;
  sessions: ITSession[];
};
```

Put curriculum content in data files, not giant JSX components.

---

# RESPONSIVENESS

Support:
- large desktop;
- desktop;
- laptop;
- tablet;
- mobile;
- small mobile.

No horizontal overflow.

Mobile uses an animated navigation drawer.

---

# ANIMATION

Use Level 2 motion:
- section reveal;
- subtle card hover;
- drawer transitions;
- active navigation transitions;
- button interaction.

Always support:

```css
@media (prefers-reduced-motion: reduce)
```

Do not animate everything.

---

# ACCESSIBILITY

Implement:
- semantic HTML;
- heading hierarchy;
- keyboard navigation;
- visible focus;
- accessible interactive elements;
- ARIA only where appropriate;
- adequate contrast;
- reduced motion.

---

# PERFORMANCE

Implement:
- lazy loading where useful;
- optimized assets;
- sensible code splitting;
- no unnecessary packages;
- minimal runtime work;
- avoid expensive animation;
- good Lighthouse performance.

---

# SEO

Add:
- title;
- description;
- favicon;
- Open Graph metadata;
- semantic structure.

Title:

“Aradhya Pratap Singh | Class 10 IT Portfolio”

---

# PRINT / PDF

The teacher permits either web or PDF submission.

Make the web version print-friendly.

Implement:
- A4 print styling;
- hide navigation;
- hide decorative UI;
- disable animation;
- sensible page breaks;
- preserve projects and IT portfolio;
- readable printed typography.

Browser:
Print → Save as PDF

must produce a clean result.

---

# EXTERNAL INTEGRATIONS

No backend.

GitHub is primarily an external profile link.

If live public GitHub data is added later:
- use public endpoints only;
- no private tokens in frontend;
- graceful fallback;
- cache results;
- never make page rendering depend on API availability.

---

# SECURITY

- No secrets in source.
- No private API keys.
- Safe external links.
- No unnecessary analytics/tracking.
- Treat future external data as untrusted.

---

# QUALITY BAR

The finished site must feel:
- intentional;
- premium;
- clean;
- academically credible;
- technically polished;
- fast;
- accessible;
- responsive.

It must NOT feel like:
- a copied template;
- a generic résumé;
- a school project made from plain HTML/CSS;
- a flashy animation demo.

---

# DEVELOPMENT PROCESS

Implement in this order:

1. project foundation;
2. design system;
3. routing/layout;
4. navigation;
5. Home;
6. About;
7. Journey;
8. Projects;
9. Skills;
10. GitHub;
11. IT portfolio data architecture;
12. all five IT units;
13. Interests;
14. Contact;
15. responsive refinement;
16. accessibility;
17. print/PDF;
18. performance;
19. SEO;
20. final QA.

After every major stage:
- verify build;
- verify TypeScript;
- verify responsive behavior;
- verify no invented content.

---

# FINAL CHECKLIST

Before considering the project complete, verify:

[ ] All requested sections exist.
[ ] No Achievements section exists.
[ ] Exactly three projects are represented.
[ ] Clocke facts are correct.
[ ] Habiter facts are correct.
[ ] Kycelius facts are correct.
[ ] GitHub profile link is correct.
[ ] Email is correct.
[ ] Instagram link is correct.
[ ] Skills are correct.
[ ] All five IT units exist.
[ ] Every exact session title is present.
[ ] IT content is summarized rather than copied verbatim.
[ ] IT learning is prioritized over personal interests.
[ ] No fake achievements/certificates/statistics exist.
[ ] No personal photo exists.
[ ] Desktop works.
[ ] Laptop works.
[ ] Tablet works.
[ ] Mobile works.
[ ] Mobile drawer works.
[ ] Keyboard navigation works.
[ ] Reduced-motion works.
[ ] Print-to-PDF works.
[ ] Production build succeeds.
[ ] No unnecessary backend exists.
[ ] No secrets are exposed.

Build the application now according to these requirements. Make reasonable implementation decisions where the specification leaves room, but do not change the product's goals, content hierarchy or factual information.
