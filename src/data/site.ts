export interface ExternalLink {
  label: string;
  href: string;
  kind: "website" | "repository" | "email" | "profile";
  display?: string;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights?: readonly string[];
  tags: readonly string[];
  links: readonly ExternalLink[];
}

export interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface SiteProfile {
  name: string;
  handle: string;
  role: string;
  intro: string;
  background: string;
  principle: string;
  skills: readonly SkillGroup[];
  contacts: readonly ExternalLink[];
}

export const profile: SiteProfile = {
  name: "五水",
  handle: "water5",
  role: "USTC 计算机系本科生 / RoboWalker 视觉算法组成员",
  intro:
    "专注于 C++ 性能优化与机器人视觉自喵系统开发，热爱 Linux 与极客工具构建。",
  background:
    "中国科学技术大学计算机科学与技术系本科在读，RoboMaster 战队视觉算法组成员。我在算法、系统与应用之间寻找问题更清晰、工具更顺手的解法。",
  principle:
    "追求高效干净的代码、极致的系统性能与简洁流畅的开发工作流。",
  skills: [
    { label: "LANGUAGES", items: ["C++", "Python", "GDScript"] },
    { label: "VISION", items: ["OpenCV", "ROS2"] },
    { label: "SYSTEMS", items: ["Linux", "WSL"] },
    { label: "WEB / APP", items: ["Astro", "桌面工具开发"] },
  ],
  contacts: [
    {
      label: "USTC 邮箱",
      href: "mailto:wsw123@mail.ustc.edu.cn",
      kind: "email",
      display: "wsw123@mail.ustc.edu.cn",
    },
    {
      label: "GitHub / wsw12321",
      href: "https://github.com/wsw12321",
      kind: "profile",
      display: "github.com/wsw12321",
    },
    {
      label: "个人站 / water555.com",
      href: "https://water555.com/",
      kind: "website",
      display: "water555.com",
    },
  ],
};

export const projects: readonly Project[] = [
  {
    number: "01",
    title: "RoboMaster 自喵与视觉算法系统",
    category: "ROBOT VISION",
    description:
      "面向比赛场景的视觉算法系统，用于自动瞄准敌方单位并精准打击装甲板，减轻操作手压力。简单地说，是一套认真做出来的“写挂”系统。",
    highlights: [
      "根据新规调整前哨战逻辑",
      "围绕英雄机器人完成专项优化",
      "自动化相机外参标定流程，并修复遗留 Bug",
    ],
    tags: ["C++", "OpenCV", "ROS2", "Calibration"],
    links: [],
  },
  {
    number: "02",
    title: "Prompt 饮水机",
    category: "OPEN SOURCE / AI",
    description:
      "面向 USTC 与理工科学生的开源 AI Prompt 社区，支持提示词发现、复用、标签筛选与版本 Diff，让有效的提问方式更容易沉淀和分享。",
    tags: ["Prompt", "Community", "Open Source"],
    links: [
      {
        label: "访问网站",
        href: "https://ai.wsw.wiki/",
        kind: "website",
      },
      {
        label: "查看仓库",
        href: "https://github.com/prompt-community/prompt-community",
        kind: "repository",
      },
    ],
  },
  {
    number: "03",
    title: "大雾助手",
    category: "DATA TOOL",
    description:
      "由数据处理工具与数据处理自动生成工具组成，帮助整理实验数据，并减少重复计算流程中的手工操作。",
    tags: ["Data Processing", "Formula", "Tooling"],
    links: [
      {
        label: "访问网站",
        href: "https://dwsy.wsw.wiki/",
        kind: "website",
      },
      {
        label: "Calc 仓库",
        href: "https://github.com/ustc-dwsy/calc",
        kind: "repository",
      },
      {
        label: "Formula Calc 仓库",
        href: "https://github.com/ustc-dwsy/formula-calc",
        kind: "repository",
      },
    ],
  },
  {
    number: "04",
    title: "研讨物理社网站",
    category: "COMMUNITY WEBSITE",
    description:
      "为高中物理社团制作的内容站点，用于介绍社团基本信息，并持续记录社团活动与精彩内容。",
    tags: ["Website", "Physics", "Community"],
    links: [
      {
        label: "访问网站",
        href: "https://yantao.water555.com/",
        kind: "website",
      },
      {
        label: "查看仓库",
        href: "https://github.com/wsw12321/yantao-new",
        kind: "repository",
      },
    ],
  },
  {
    number: "05",
    title: "WMI 电池 / 系统状态监测应用",
    category: "SYSTEM APP",
    description:
      "结合 C++ 系统底层接口与 Astro 前端开发的 Windows 硬件数据采集与状态展示应用。",
    tags: ["C++", "WMI", "Astro", "Windows"],
    links: [
      {
        label: "查看仓库",
        href: "https://git.lug.ustc.edu.cn/water5/powermonitor",
        kind: "repository",
      },
    ],
  },
];

export const experiences: readonly Experience[] = [
  {
    period: "2025–至今",
    title: "USTC 本科在读",
    organization: "中国科学技术大学 · 计算机科学与技术系",
    description: "持续学习计算机科学，并探索软件工程、系统性能与视觉算法。",
  },
  {
    period: "2025–至今",
    title: "RoboMaster 视觉算法组成员",
    organization: "校 RoboMaster 战队",
    description: "参与机器人视觉识别、自喵系统调优与工程流程改进。",
  },
];

export const siteMeta = {
  title: "五水 / water5 — 中国科学技术大学本科生",
  description:
    "五水（water5）的个人主页：USTC 计算机系本科生，关注 C++ 性能优化、机器人视觉、Linux 与极客工具。",
  url: "https://water555.com/",
} as const;
