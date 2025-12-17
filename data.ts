import { QuizQuestion, SlideConfig, SlideType } from './types';

// Game 1 Prompts
export const GAME1_PROMPTS = [
  "穿绿色毛衣的人 👕",
  "穿黄色袜子的人 🧦",
  "戴帽子的人 🧢",
  "今天喂/拍过小猫的人 🐱",
  "今天喝过奶茶的人 🧋",
  "今天洗了头的人 🚿",
  "今天骑车来的人 🚲",
  "现在手机电量小于30%的人 📱"
];

// Game 3 Quiz Data
export const QUIZ_DATA: QuizQuestion[] = [
  { id: 1, emoji: "❤️🤔🦁🍊", answer: "心想事成" },
  { id: 2, emoji: "🧧🌟🍰📷", answer: "福星高照" },
  { id: 3, emoji: "👣👣🍰🥜", answer: "步步高升" },
  { id: 4, emoji: "🪢🥬👕👕", answer: "神采奕奕" },
  { id: 5, emoji: "🌿🌃💐🌅", answer: "柳暗花明" },
  { id: 6, emoji: "🌂🦴🐱🦌", answer: "三顾茅庐" },
  { id: 7, emoji: "⬅🤔➡🤔", answer: "左思右想" },
  { id: 8, emoji: "😄👆🌹🔥", answer: "喜上眉梢" },
];

// Construct the flat list of slides
export const SLIDES: SlideConfig[] = [
  { id: 1, type: SlideType.COVER, theme: 'yellow' },
  { id: 2, type: SlideType.RULES, theme: 'blue' },
  // Game 1
  { id: 3, type: SlideType.GAME1_INTRO, theme: 'pink' },
  { id: 4, type: SlideType.GAME1_DEMO, theme: 'pink' },
  { id: 5, type: SlideType.GAME1_PLAY, content: { promptIndex: 0 }, theme: 'pink' }, // Just one dynamic slide for play in this implementation to save space, user can cycle through
  // Game 2
  { id: 10, type: SlideType.GAME2_INTRO, theme: 'purple' },
  { id: 11, type: SlideType.GAME2_ROUND, content: { round: 1, title: "Zoo", icon: "🦍" }, theme: 'purple' },
  { id: 12, type: SlideType.GAME2_ROUND, content: { round: 2, title: "斗地主 Remix", icon: "🃏" }, theme: 'purple' },
  { id: 13, type: SlideType.GAME2_ROUND, content: { round: 3, title: "可爱摆", icon: "🐱" }, theme: 'purple' },
  // Game 3
  { id: 14, type: SlideType.GAME3_INTRO, theme: 'yellow' },
  ...QUIZ_DATA.map((q, i) => ({
    id: 15 + i,
    type: SlideType.GAME3_QUIZ,
    content: q,
    theme: i % 2 === 0 ? 'blue' : 'yellow' as any
  })),
  // Awards
  { id: 36, type: SlideType.AWARD, theme: 'yellow' },
  // Lottery
  { id: 37, type: SlideType.LOTTERY_INTRO, theme: 'pink' },
  { id: 38, type: SlideType.LOTTERY_SEAT, theme: 'blue' },
  { id: 39, type: SlideType.LOTTERY_PHONE, theme: 'purple' },
  // End
  { id: 40, type: SlideType.ENDING, theme: 'yellow' },
];