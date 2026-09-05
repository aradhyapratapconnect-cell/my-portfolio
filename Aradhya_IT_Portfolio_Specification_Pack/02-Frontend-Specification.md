# Frontend Specification Document
## Aradhya Pratap Singh — Class 10 IT Portfolio

## 1. Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Motion for animation
- Lucide icons
- React Bits and other component libraries selectively
- No backend
- Static typed content/data
- Optional GitHub profile link only; no required API dependency

## 2. Design Tokens

### Colors
Use a bright neutral foundation.

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

Accent colors may be tuned during implementation, but the overall appearance must remain bright and premium.

## 3. Typography

Use a modern sans-serif system:
- Primary: Inter or Geist Sans
- Display: same family with stronger weight, unless a complementary display font materially improves the design
- Body: 15–18px
- Small metadata: 12–14px
- H1: responsive clamp, approximately 48–88px
- H2: approximately 32–52px
- H3: approximately 22–30px

Avoid excessive font families.

## 4. Layout

- Max content width: 1200–1280px.
- Main horizontal padding: 24px mobile, 32px tablet, 48px desktop.
- Section spacing: 80–140px depending on viewport.
- Card gap: 16–24px.
- Border radius: 14–24px depending on component.
- Avoid excessive rounded “bubble” UI.

## 5. Navigation

Desktop:
- compact top navigation;
- active section indicator;
- GitHub CTA.

Mobile:
- menu button;
- animated drawer;
- focus trap while open;
- ESC closes;
- navigation link closes drawer;
- accessible labels.

## 6. Home / Hero

Visual hierarchy:
1. small academic identifier;
2. large name;
3. concise positioning statement;
4. short explanation;
5. primary portfolio CTA;
6. secondary GitHub CTA.

Use subtle motion only.

No profile image.

## 7. About

Use editorial layout:
- short biography;
- “What I work on” or equivalent;
- academic/project emphasis.

## 8. Journey

Use a responsive timeline.
Two labels:
- IT Learning
- Building & Applying

Do not invent dates. Use stage-based milestones if exact dates are unavailable.

## 9. Project Cards

Each card:
- project name;
- status badge;
- one-line purpose;
- technology chips;
- short “learning/application” note;
- optional configured link.

Hover:
- slight elevation;
- border/accent shift;
- restrained transform.

No excessive 3D.

## 10. Skills

Use grouped skill cards:
- Languages
- Frameworks / Technologies
- Tools

Do not use fake percentage proficiency bars.

## 11. GitHub

Create a focused profile card:
- GitHub icon;
- profile URL;
- short explanation;
- CTA.

Do not fabricate statistics.

## 12. IT Portfolio UI

The academic area should feel like an interactive digital notebook.

Desktop:
- left unit/session navigation;
- main reading panel.

Tablet:
- collapsible unit navigation.

Mobile:
- unit selector;
- session selector;
- reading content.

Each session page:
- exact session title;
- overview;
- important concepts;
- key terms;
- learning outcomes;
- application/reflection section.

### Exact unit/session structure

Use the following exact titles from the uploaded book:

**Unit 1 Communication Skills**
1. Methods of Communication
2. Verbal Communication
3. Non-verbal Communication
4. Communication Cycle and Importance of Feedback
5. Barriers to Effective Communication
6. Writing Skills — Parts of Speech
7. Writing Skills — Sentences

**Unit 2 Self-management Skills**
1. Stress Management
2. Self-awareness — Strength and Weakness Analysis
3. Self-motivation
4. Self-regulation — Goal Setting
5. Self-regulation — Time Management

**Unit 3 Information and Communication Technology Skills**
1. Basic Computer Operations
2. Performing Basic File Operations
3. Computer Care and Maintenance
4. Computer Security and Privacy

**Unit 4 Entrepreneurial Skills**
1. Entrepreneurship and Society
2. Qualities and Functions of an Entrepreneur
3. Myths about Entrepreneurship
4. Entrepreneurship as a Career Option

**Unit 5 Green Skills**
1. Sustainable Development
2. Our Role in Sustainable Development

The textbook content should be summarized in original language rather than copied at length.

## 13. Component System

Required reusable components:
- Button
- IconButton
- Badge
- Card
- ProjectCard
- SkillChip
- SectionHeader
- TimelineItem
- UnitNavigation
- SessionNavigation
- LessonCard
- LearningOutcome
- ConceptCard
- ExternalLink
- Drawer
- Tooltip where needed
- Footer
- ScrollProgress only if it does not hurt usability

## 14. Motion

Level 2:
- fade/slide on section entry;
- subtle card hover;
- navigation drawer transition;
- active navigation transition;
- restrained button interaction.

Respect `prefers-reduced-motion`.

Do not animate every element.

## 15. Data Architecture

Create typed data modules:

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

Keep content separate from UI components.

## 16. API / Integration Specification

### GitHub
Primary use: external profile navigation.

Profile:
`https://github.com/aradhyapratapconnect-cell`

Default implementation: normal external link. This avoids an unnecessary runtime dependency.

If live GitHub data is later enabled:
- use GitHub's public REST API;
- do not expose private tokens;
- handle rate limits;
- cache responses;
- show graceful fallback;
- never make portfolio rendering depend on GitHub API availability.

### Email
Use `mailto:` link to:
`aradhyapratapconnect@gmail.com`

### Instagram
External link to the public profile.

No other third-party service is required.

## 17. SEO

Include:
- title;
- description;
- canonical configuration at deployment;
- Open Graph metadata;
- favicon;
- semantic headings.

Suggested title:
“Aradhya Pratap Singh | Class 10 IT Portfolio”

## 18. Security

- no secrets in frontend;
- no private API keys;
- sanitize any future dynamic external content;
- use safe external link attributes;
- no unnecessary tracking.

## 19. Print

`@media print`:
- white background;
- hide navigation and nonessential interactive controls;
- disable animation;
- maintain heading hierarchy;
- preserve project and IT content;
- use page-break controls;
- make links readable.

## 20. Deployment

Target:
- Netlify or Vercel.

Build command and output must follow the chosen Vite configuration.

The final project must run with:
```bash
npm install
npm run dev
npm run build
npm run preview
```
where applicable.
