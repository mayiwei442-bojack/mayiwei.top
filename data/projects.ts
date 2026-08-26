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
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Picture Editor Skill",
    description: "一款由 AI 驱动的图片编辑 Skill。",
    tags: ["AI", "Image Editing", "Skill"],
    liveUrl: "https://picture-editor-skill.vercel.app/",
    repoUrl:
      "https://github.com/mayiwei442-bojack/picture-editor-skill",
    visual: "editor",
  },
  {
    number: "02",
    title: "Campus Connect",
    description:
      "一款校园社交连接器，把模糊的社交意愿变成真实的线下活动与连接。",
    tags: ["Next.js", "TypeScript", "Supabase", "Blender"],
    liveUrl: "https://campus-connect-six-rho.vercel.app/",
    repoUrl: "https://github.com/mayiwei442-bojack/campus-connect",
    visual: "campus",
  },
  {
    number: "03",
    title: "Yanhuo Youpu",
    subtitle: "烟火有谱",
    description:
      "一款由 AI 驱动的厨房助手，根据手边食材给出实用的做饭思路。",
    tags: ["JavaScript", "CSS", "AI"],
    liveUrl: "https://yanhuo-youpu.vercel.app/#/home",
    repoUrl: "https://github.com/mayiwei442-bojack/yanhuo-youpu",
    visual: "kitchen",
  },
];
