export type ProjectStatus = "live" | "development";

export type ProjectVisual = "editor" | "campus" | "kitchen";

export type Project = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl: string;
  status?: ProjectStatus;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Picture Editor Skill",
    description:
      "An AI-powered image editing skill currently in development.",
    tags: ["AI", "Image Editing", "Skill"],
    repoUrl:
      "https://github.com/mayiwei442-bojack/picture-editor-skill",
    status: "development",
    visual: "editor",
  },
  {
    number: "02",
    title: "Campus Connect",
    description:
      "A campus social connector designed to turn vague social intentions into real-world activities and connections.",
    tags: ["Next.js", "TypeScript", "Supabase", "Blender"],
    repoUrl: "https://github.com/mayiwei442-bojack/campus-connect",
    visual: "campus",
  },
  {
    number: "03",
    title: "Yanhuo Youpu",
    subtitle: "烟火有谱",
    description:
      "An AI-powered kitchen assistant that helps users turn available ingredients into practical cooking ideas.",
    tags: ["JavaScript", "CSS", "AI"],
    repoUrl: "https://github.com/mayiwei442-bojack/yanhuo-youpu",
    visual: "kitchen",
  },
];
