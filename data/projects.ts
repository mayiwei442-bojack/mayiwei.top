export type ProjectVisual = "editor" | "campus" | "kitchen" | "meal" | "monitor";

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
    subtitle: "图片编辑器",
    description:
      "上传一张图片，选择喜欢的 Skill，用 AI 生成拼贴、抽象画或艺术海报，下载为无水印 PNG。",
    tags: ["Next.js", "MiniMax", "Image Editing", "Skill"],
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
  {
    number: "04",
    title: "McD Meal",
    subtitle: "麦麦点餐台",
    description:
      "连接麦当劳 MCP，查看真实菜单、优惠券与积分，按口味和预算推荐餐品，确认后再下单。",
    tags: ["Codex", "MCP", "Python", "Skill"],
    repoUrl:
      "https://github.com/mayiwei442-bojack/i-really-use-this-skill-every-time-i-order",
    visual: "meal",
  },
  {
    number: "05",
    title: "Tibo Monitor",
    subtitle: "Codex 重置监控",
    description:
      "跟踪 Tibo 的 X 动态，用 DeepSeek 识别 Codex 与重置相关信息，在看板中查看中文摘要和更新。",
    tags: ["Next.js", "DeepSeek", "Python", "Supabase"],
    liveUrl: "https://tibo-dusky.vercel.app/",
    repoUrl: "https://github.com/mayiwei442-bojack/tibo",
    visual: "monitor",
  },
];
