export const LINKS = {
  github: {
    label: "GitHub",
    href: "https://github.com/aradhyapratapconnect-cell",
    username: "aradhyapratapconnect-cell",
    description: "Public profile",
  },
  email: {
    label: "Email",
    href: "mailto:aradhyapratap@gmail.com",
    username: "aradhyapratap@gmail.com",
    description: "Send a message",
  },
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/__pratap_yt_",
    username: "__pratap_yt_",
    description: "Public profile",
  },
} as const;

export type LinkKey = keyof typeof LINKS;