export enum SlideType {
  COVER = 'COVER',
  RULES = 'RULES',
  GAME1_INTRO = 'GAME1_INTRO',
  GAME1_DEMO = 'GAME1_DEMO',
  GAME1_PLAY = 'GAME1_PLAY',
  GAME2_INTRO = 'GAME2_INTRO',
  GAME2_ROUND = 'GAME2_ROUND',
  GAME3_INTRO = 'GAME3_INTRO',
  GAME3_QUIZ = 'GAME3_QUIZ',
  AWARD = 'AWARD',
  LOTTERY_INTRO = 'LOTTERY_INTRO',
  LOTTERY_SEAT = 'LOTTERY_SEAT',
  LOTTERY_PHONE = 'LOTTERY_PHONE',
  ENDING = 'ENDING',
}

export interface QuizQuestion {
  id: number;
  emoji: string;
  answer: string;
  hint?: string;
  image?: string;
}

export interface SlideConfig {
  id: number; // Logical page number (P1, P2 etc)
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: any;
  theme?: 'yellow' | 'pink' | 'blue' | 'purple';
}
