import type { ITUnit } from "../types";

/**
 * Class 10 Employability Skills curricula (Information Technology).
 * Unit and session titles are preserved exactly as supplied; the content is
 * an original, concise summary rather than a copy of the textbook.
 */
export const IT_UNITS: ITUnit[] = [
  {
    id: "unit-1",
    number: 1,
    title: "Communication Skills-II",
    shortTitle: "Communication Skills",
    overview:
      "Communication is how people share information, ideas and feelings. This unit covers the methods and skills that make communication clear, respectful and effective — in school, at work and while creating software.",
    practicalConnection:
      "Communication skills show up everywhere in software: writing project documentation, explaining an idea, and reading feedback as a normal part of improving a product.",
    sessions: [
      {
        id: "u1s1",
        title: "Methods of Communication",
        overview:
          "Communication is the sharing of information, ideas and feelings between a sender and a receiver. Different methods suit different situations, audiences and messages.",
        concepts: [
          "Communication involves a sender, a message, a channel and a receiver.",
          "Verbal methods use words — spoken or written.",
          "Non-verbal methods use body language, gestures and facial expressions.",
          "Visual methods use charts, diagrams, signs and symbols.",
          "The right method depends on the message, the audience and the context.",
        ],
        keyTerms: ["Communication", "Sender", "Receiver", "Message", "Channel"],
        learningOutcomes: [
          "Identify the main methods of communication",
          "Explain how sender, message and receiver work together",
          "Choose an appropriate method for a given situation",
        ],
        application:
          "When explaining a project I match the method to the audience — a diagram for structure, written notes for details, and speech for a quick discussion.",
      },
      {
        id: "u1s2",
        title: "Verbal Communication",
        overview:
          "Verbal communication uses words: spoken communication (face-to-face talk, phone and video calls) or written communication (messages, emails and documents).",
        concepts: [
          "Spoken communication gains clarity from tone, pace and emphasis.",
          "Written communication depends on grammar, structure and punctuation.",
          "Spoken exchanges give immediate feedback; written ones leave a durable record.",
          "Speaking clearly and listening carefully make verbal communication effective.",
        ],
        keyTerms: ["Spoken communication", "Written communication", "Tone", "Clarity", "Feedback"],
        learningOutcomes: [
          "Distinguish spoken and written communication",
          "Speak with clear structure and appropriate tone",
          "Write short messages that are easy to understand",
        ],
        application:
          "Describing a project to someone — choosing clear words and preparing what to say — is verbal communication in practice.",
      },
      {
        id: "u1s3",
        title: "Non-verbal Communication",
        overview:
          "Non-verbal communication sends messages without words — through facial expressions, eye contact, gestures, posture and overall body language.",
        concepts: [
          "Facial expressions and eye contact signal attention and emotion.",
          "Gestures and posture add meaning to what is being said.",
          "Body language can support or contradict spoken words.",
          "Keeping words and body language consistent builds trust.",
        ],
        keyTerms: ["Gestures", "Posture", "Eye contact", "Body language", "Expression"],
        learningOutcomes: [
          "Identify common non-verbal signals",
          "Explain how body language affects a message",
          "Use appropriate body language while presenting",
        ],
        application:
          "Presenting or explaining a screen recording feels clearer when I keep good posture and face the listener instead of the screen.",
      },
      {
        id: "u1s4",
        title: "Communication Cycle and Importance of Feedback",
        overview:
          "Communication works as a cycle: the sender creates (encodes) a message, sends it through a channel, the receiver interprets (decodes) it and responds with feedback.",
        concepts: [
          "The cycle has seven parts — sender, encoding, message, channel, receiver, decoding and feedback.",
          "Encoding turns thoughts into words or signals; decoding is how the receiver interprets them.",
          "Feedback confirms whether the message was actually understood.",
          "Clear, specific and timely feedback improves all future communication.",
        ],
        keyTerms: ["Communication cycle", "Encoding", "Decoding", "Channel", "Feedback"],
        learningOutcomes: [
          "Describe the stages of the communication cycle",
          "Explain why feedback is essential to communication",
          "Give constructive feedback on a task or project",
        ],
        application:
          "Sharing a project to get feedback completes the cycle — the suggestions feed directly into the next version.",
      },
      {
        id: "u1s5",
        title: "Barriers to Effective Communication",
        overview:
          "Barriers are anything that stops a message from being understood — physical noise, unclear language, personal emotions or cultural differences.",
        concepts: [
          "Physical barriers include noise, distance and faulty technology.",
          "Language barriers come from jargon, difficult words or poor structure.",
          "Emotional barriers such as stress and assumptions distort meaning.",
          "Active listening and confirming understanding help overcome barriers.",
        ],
        keyTerms: ["Barrier", "Noise", "Jargon", "Active listening", "Misunderstanding"],
        learningOutcomes: [
          "Identify common barriers to communication",
          "Suggest ways to reduce or remove barriers",
          "Apply simple techniques for clearer communication",
        ],
        application:
          "Avoiding technical jargon while explaining my projects to teachers and non-technical users removes a language barrier.",
      },
      {
        id: "u1s6",
        title: "Writing Skills — Parts of Speech",
        overview:
          "Parts of speech are the building blocks of sentences. English has eight of them: noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection.",
        concepts: [
          "Nouns name people, places, things or ideas; verbs show actions or states.",
          "Pronouns replace nouns to avoid repetition.",
          "Adjectives and adverbs add description to nouns and verbs.",
          "Prepositions show relationships, conjunctions join, interjections express emotion.",
          "Using parts of speech correctly makes writing clearer.",
        ],
        keyTerms: ["Noun", "Verb", "Adjective", "Pronoun", "Adverb"],
        learningOutcomes: [
          "Identify the eight parts of speech",
          "Recognise the role of each part in a sentence",
          "Use parts of speech correctly in short writing",
        ],
        application:
          "Error messages, app labels and documentation are clearer when the grammar behind them is correct.",
      },
      {
        id: "u1s7",
        title: "Writing Skills — Sentences",
        overview:
          "A sentence expresses a complete thought built from a subject and a predicate. Good writing means forming complete sentence types and organising them into readable paragraphs.",
        concepts: [
          "Every sentence has a subject (what it is about) and a predicate (what is said about it).",
          "Sentences can be assertive, interrogative, imperative or exclamatory.",
          "Fragments and run-on sentences reduce clarity.",
          "A paragraph needs a topic sentence, supporting sentences and a closing thought.",
        ],
        keyTerms: ["Subject", "Predicate", "Sentence", "Paragraph", "Punctuation"],
        learningOutcomes: [
          "Form complete sentences",
          "Identify the main sentence types",
          "Organise sentences into a readable paragraph",
        ],
        application:
          "Every project description on this portfolio is written one careful, complete sentence at a time.",
      },
    ],
  },
  {
    id: "unit-2",
    number: 2,
    title: "Self-Management Skills-II",
    shortTitle: "Self-Management Skills",
    overview:
      "Self-management is about understanding and controlling your own behaviour, emotions and time. This unit builds the practical habits of stress management, self-awareness, motivation and self-regulation.",
    practicalConnection:
      "Self-management is the engine behind consistent development — planning the build, staying motivated on personal projects, and managing time before a deadline.",
    sessions: [
      {
        id: "u2s1",
        title: "Stress Management",
        overview:
          "Stress is the body's response to pressure or demanding situations. Recognising its signs and using small techniques helps manage it before it harms health or work.",
        concepts: [
          "Stressors can be external (exams, deadlines) or internal (high expectations).",
          "Stress shows as physical signs (headache, tiredness) and emotional signs (irritability, worry).",
          "Some challenge can motivate; prolonged stress is harmful.",
          "Deep breathing, movement, breaks and talking to someone help manage stress.",
          "Planning and realistic targets reduce avoidable stress.",
        ],
        keyTerms: ["Stress", "Stressors", "Relaxation", "Coping", "Routine"],
        learningOutcomes: [
          "Recognise early signs of stress in oneself",
          "Use simple techniques to calm down and refocus",
          "Plan workload to avoid unnecessary stress",
        ],
        application:
          "Keeping project deadlines realistic and taking short breaks mirrors the same planning lesson in practice.",
      },
      {
        id: "u2s2",
        title: "Self-awareness — Strength and Weakness Analysis",
        overview:
          "Self-awareness means knowing yourself — your interests, abilities and limits. Analysing strengths and weaknesses honestly helps in choosing what to learn and where to improve.",
        concepts: [
          "Recognising interests and strengths helps you choose work you can do well.",
          "Acknowledging a weakness is not failure — it is the first step to improvement.",
          "Reflection and honest feedback from others reveal blind spots.",
          "Good improvement plans build on strengths and practise weaknesses.",
        ],
        keyTerms: ["Self-awareness", "Strength", "Weakness", "Reflection", "Improvement"],
        learningOutcomes: [
          "Describe personal interests, strengths and weaknesses honestly",
          "Use feedback to understand oneself better",
          "Plan small improvements based on the analysis",
        ],
        application:
          "Reflecting on strengths helps decide which project ideas to pursue and which skills to practise next.",
      },
      {
        id: "u2s3",
        title: "Self-motivation",
        overview:
          "Self-motivation is the ability to keep working toward something you have chosen, without relying on someone else to push you. The key is finding personal reasons to continue.",
        concepts: [
          "Intrinsic motivation comes from interest and enjoyment; extrinsic motivation comes from outside rewards.",
          "Personal interest is the strongest fuel for self-study.",
          "Small, visible progress keeps motivation alive.",
          "Routines make it easier to start even on low-energy days.",
        ],
        keyTerms: ["Motivation", "Intrinsic motivation", "Extrinsic motivation", "Habit", "Progress"],
        learningOutcomes: [
          "Explain what self-motivation means",
          "Identify personal reasons to learn and build",
          "Use small goals and routines to stay motivated",
        ],
        application:
          "No one assigns my personal projects — finishing them depends on genuine interest and the habit of showing up to build.",
      },
      {
        id: "u2s4",
        title: "Self-regulation — Goal Setting",
        overview:
          "Goal setting turns an intention into a plan. Goals are most useful when they are specific, measurable, achievable, relevant and time-bound (SMART).",
        concepts: [
          "Short-term goals support longer-term aspirations.",
          "SMART stands for Specific, Measurable, Achievable, Relevant and Time-bound.",
          "Big goals become doable when broken into small steps.",
          "Reviewing progress keeps goals on track.",
        ],
        keyTerms: ["Goal", "SMART", "Short-term", "Long-term", "Plan"],
        learningOutcomes: [
          "Explain the SMART framework",
          "Set a goal and break it into steps",
          "Review progress against a planned goal",
        ],
        application:
          "A project starts as a goal — build a habit tracker — then becomes small steps: learn the tools, build the interface, test, improve.",
      },
      {
        id: "u2s5",
        title: "Self-regulation — Time Management",
        overview:
          "Time management is about using the hours you have well — by planning, prioritising and protecting your focus from distraction.",
        concepts: [
          "Prioritise by importance and urgency instead of doing the easiest task first.",
          "To-do lists and schedules give structure to a day.",
          "Procrastination grows when tasks feel big or unclear.",
          "Short focus sessions with controlled breaks improve concentration.",
        ],
        keyTerms: ["Prioritisation", "Schedule", "Procrastination", "Focus", "Deadline"],
        learningOutcomes: [
          "Plan a day using a simple task list",
          "Prioritise important work over urgent noise",
          "Identify personal distractions and their solutions",
        ],
        application:
          "Clocke was imagined while thinking about exactly this — helping people spend their time with intention.",
      },
    ],
  },
  {
    id: "unit-3",
    number: 3,
    title: "Information and Communication Technology Skills-II",
    shortTitle: "ICT Skills",
    overview:
      "This unit covers the practical skills of using computers — operating a system, managing files, maintaining the machine, and staying secure and private online.",
    practicalConnection:
      "The computer skills in this unit are the everyday mechanics of development — running tools, organising project files, keeping machines healthy and protecting accounts.",
    sessions: [
      {
        id: "u3s1",
        title: "Basic Computer Operations",
        overview:
          "A computer takes input, processes it and gives output. Knowing the parts of a computer and the basics of the operating system makes every other IT skill possible.",
        concepts: [
          "The IPO model describes input, processing and output, with storage along the way.",
          "Hardware is physical (CPU, monitor, keyboard); software is the programs that run on it.",
          "The operating system manages hardware, files and the user interface.",
          "Everyday operations include safe startup and shutdown, logging in and navigating the desktop.",
        ],
        keyTerms: ["Hardware", "Software", "Operating system", "CPU", "Input and output"],
        learningOutcomes: [
          "Describe the basic parts and functions of a computer",
          "Distinguish hardware and software",
          "Operate a computer safely",
        ],
        application:
          "Running a development environment depends on the same basics — using the operating system, peripherals and understanding how input becomes output.",
      },
      {
        id: "u3s2",
        title: "Performing Basic File Operations",
        overview:
          "Data on a computer is stored as files inside folders. Organising and managing these files is a daily IT task that keeps work findable and safe.",
        concepts: [
          "Files hold data; folders group and organise related files.",
          "File extensions (like .html, .ts or .cpp) indicate the type of data in a file.",
          "Common operations are create, copy, move, rename, delete and search.",
          "A tidy folder structure makes work faster to understand and find.",
        ],
        keyTerms: ["File", "Folder", "Extension", "Organisation", "Storage"],
        learningOutcomes: [
          "Create and organise files and folders",
          "Perform copy, move, rename and delete operations",
          "Follow good naming and structure habits",
        ],
        application:
          "Every project is really a folder of carefully named files — a clear structure is what keeps a codebase readable.",
      },
      {
        id: "u3s3",
        title: "Computer Care and Maintenance",
        overview:
          "Computers need regular care to stay fast, safe and reliable — cleaning, software updates, backups and simple troubleshooting all count as maintenance.",
        concepts: [
          "Physical care includes safe handling, cleaning and proper ventilation.",
          "Software updates fix bugs, improve speed and close security gaps.",
          "Backing up important data protects against loss or failure.",
          "Simple troubleshooting — restart, check connections, free up storage — solves many common problems.",
        ],
        keyTerms: ["Maintenance", "Backup", "Updates", "Troubleshooting", "Data"],
        learningOutcomes: [
          "Explain why regular computer care matters",
          "Perform simple maintenance like updates and cleanup",
          "Back up important work",
        ],
        application:
          "Git and GitHub are a developer's backup habit — every commit protects weeks of project work.",
      },
      {
        id: "u3s4",
        title: "Computer Security and Privacy",
        overview:
          "Security and privacy protect your data, accounts and machine from misuse. Awareness of common threats and safe habits is the first line of defence.",
        concepts: [
          "Common threats include viruses, malware and phishing links.",
          "Strong, unique passwords and two-step verification protect accounts.",
          "Updates often close the security gaps that attackers use.",
          "Safe online behaviour means thinking before sharing personal information or opening unknown links.",
        ],
        keyTerms: ["Malware", "Phishing", "Password", "Privacy", "Security"],
        learningOutcomes: [
          "Identify common online threats",
          "Create strong passwords and keep them private",
          "Use safe browsing and sharing habits",
        ],
        application:
          "Publishing code on GitHub is a live lesson in this unit — accounts need strong passwords, and secrets must never go into a repository.",
      },
    ],
  },
  {
    id: "unit-4",
    number: 4,
    title: "Entrepreneurial Skills-II",
    shortTitle: "Entrepreneurial Skills",
    overview:
      "Entrepreneurship is about recognising a need and building something to meet it. This unit explores what entrepreneurs contribute to society and what it takes to think like one.",
    practicalConnection:
      "Designing software means thinking like a founder — finding a real problem, picturing the user, and shaping a product around their needs.",
    sessions: [
      {
        id: "u4s1",
        title: "Entrepreneurship and Society",
        overview:
          "An entrepreneur sees a need or problem in society and builds a product or service to solve it. In this way, entrepreneurship creates value and progress.",
        concepts: [
          "Entrepreneurs identify problems and turn them into opportunities.",
          "They create products and services that benefit users and communities.",
          "Successful enterprises can create jobs and support local economies.",
          "Entrepreneurship depends on observation, creativity and effort.",
        ],
        keyTerms: ["Entrepreneur", "Enterprise", "Innovation", "Opportunity", "Value"],
        learningOutcomes: [
          "Define entrepreneurship and an entrepreneur",
          "Explain how enterprises benefit society",
          "Give an example of a need turned into a product",
        ],
        application:
          "Entrepreneurial thinking starts with a user's problem — wanting time awareness, better habits or task automation is what shaped my project ideas.",
      },
      {
        id: "u4s2",
        title: "Qualities and Functions of an Entrepreneur",
        overview:
          "Certain qualities make an entrepreneur effective. Beyond ideas, entrepreneurs plan, organise, decide and keep going when things get difficult.",
        concepts: [
          "Key qualities include hard work, honesty, confidence, discipline, creativity and a willingness to take reasonable risks.",
          "Main functions are generating ideas, planning, organising resources and making decisions.",
          "Perseverance matters — problems are part of building, not the end of it.",
          "Learning from mistakes makes the next attempt stronger.",
        ],
        keyTerms: ["Quality", "Function", "Risk", "Planning", "Perseverance"],
        learningOutcomes: [
          "List important entrepreneurial qualities",
          "Describe the main functions of an entrepreneur",
          "Relate the functions to real project work",
        ],
        application:
          "Running a personal project practises all of this — planning what to build, organising time and tools, and deciding what goes into the next version.",
      },
      {
        id: "u4s3",
        title: "Myths about Entrepreneurship",
        overview:
          "Several myths surround entrepreneurship — for example, that it is only for the rich, that entrepreneurs are born rather than made, or that failure is final. Understanding the reality gives a fair picture.",
        concepts: [
          "Myth: entrepreneurs are born, not made — reality: skills are learned through practice.",
          "Myth: you need vast money to start — reality: many begin small, with skills and ideas.",
          "Myth: success is mostly luck — reality: preparation and hard work matter.",
          "Myth: failure means the end — reality: failure is a stepping stone for learning.",
        ],
        keyTerms: ["Myth", "Reality", "Perseverance", "Learning", "Risk"],
        learningOutcomes: [
          "Identify common myths about entrepreneurship",
          "Explain the reality behind each myth",
          "Form a balanced view of what entrepreneurs need",
        ],
        application:
          "The 'born, not made' myth falls apart in coding — programming skills grow through consistent practice, exactly like entrepreneurial skills.",
      },
      {
        id: "u4s4",
        title: "Entrepreneurship as a Career Option",
        overview:
          "Entrepreneurship can be a deliberate career choice, different from a job. It offers freedom and responsibility, and it benefits from preparation and planning.",
        concepts: [
          "A job means working for an employer; an entrepreneur builds their own enterprise.",
          "Ownership brings independence, but also responsibility for results.",
          "Preparation includes developing skills, shaping an idea and writing a plan.",
          "An entrepreneurial career involves managed risk and continuous learning.",
        ],
        keyTerms: ["Career", "Job", "Self-employment", "Plan", "Opportunity"],
        learningOutcomes: [
          "Compare employment and entrepreneurship",
          "Explain what preparation for entrepreneurship looks like",
          "Judge entrepreneurial readiness realistically",
        ],
        application:
          "Thinking of software as a product — who needs it and how it reaches them — is a small practice run of this unit's way of thinking.",
      },
    ],
  },
  {
    id: "unit-5",
    number: 5,
    title: "Green Skills-II",
    shortTitle: "Green Skills",
    overview:
      "Green skills are the knowledge and habits that support sustainable development — meeting today's needs without harming the chances of future generations.",
    practicalConnection:
      "Responsible technology use — caring for devices, avoiding waste and building efficient software — is where green thinking meets everyday computing.",
    sessions: [
      {
        id: "u5s1",
        title: "Sustainable Development",
        overview:
          "Sustainable development means living and growing today in a way that protects resources and opportunities for future generations.",
        concepts: [
          "Sustainable development balances economic, social and environmental considerations.",
          "Earth's resources — energy, water and materials — are limited.",
          "The 3Rs — Reduce, Reuse, Recycle — guide responsible consumption.",
          "Sustainability decisions consider long-term effects, not just short-term convenience.",
        ],
        keyTerms: ["Sustainable development", "Resources", "Reduce", "Reuse", "Recycle"],
        learningOutcomes: [
          "Define sustainable development",
          "Explain why resources must be conserved",
          "Practise the 3Rs in daily life",
        ],
        application:
          "Software also consumes resources — device energy and internet infrastructure — which is why lean, efficient applications are the greener choice.",
      },
      {
        id: "u5s2",
        title: "Our Role in Sustainable Development",
        overview:
          "Individuals shape sustainability through everyday choices. Small, consistent habits — at home, school and online — add up to a real difference.",
        concepts: [
          "Conserving energy, water and materials at home and school.",
          "Reducing waste and repairing or reusing instead of replacing.",
          "Disposing of e-waste responsibly instead of discarding devices carelessly.",
          "Spreading awareness makes sustainable behaviour contagious.",
        ],
        keyTerms: ["Conservation", "E-waste", "Responsibility", "Awareness", "Habit"],
        learningOutcomes: [
          "Describe personal actions that support sustainability",
          "Explain responsible disposal of electronic waste",
          "Encourage sustainable habits in the community",
        ],
        application:
          "Simple computing habits — turning off unused devices and caring for hardware longer — are everyday green skills in action.",
      },
    ],
  },
];