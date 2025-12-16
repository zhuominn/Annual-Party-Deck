import React from 'react';
import { SlideConfig, SlideType } from '../types';
import { SlideLayout } from './SlideLayout';
import * as Slides from './GameSlides';

interface SlideManagerProps {
  slide: SlideConfig;
}

export const SlideManager: React.FC<SlideManagerProps> = ({ slide }) => {
  const renderContent = () => {
    switch (slide.type) {
      case SlideType.COVER:
        return <Slides.CoverSlide />;
      case SlideType.RULES:
        return <Slides.RulesSlide />;
      case SlideType.GAME1_INTRO:
        return <Slides.Game1Intro />;
      case SlideType.GAME1_DEMO:
        return <Slides.Game1Demo />;
      case SlideType.GAME1_PLAY:
        return <Slides.Game1Play />;
      case SlideType.GAME2_INTRO:
        return <Slides.Game2Intro />;
      case SlideType.GAME2_ROUND:
        return <Slides.Game2Round {...slide.content} />;
      case SlideType.GAME3_INTRO:
        return <Slides.Game3Intro />;
      case SlideType.GAME3_QUIZ:
        return <Slides.Game3Quiz question={slide.content} />;
      case SlideType.AWARD:
        return <Slides.AwardSlide />;
      case SlideType.LOTTERY_INTRO:
        return <Slides.LotteryIntro />;
      case SlideType.LOTTERY_SEAT:
        return <Slides.LotterySeat />;
      case SlideType.LOTTERY_PHONE:
        return <Slides.LotteryPhone />;
      case SlideType.ENDING:
        return <Slides.EndingSlide />;
      default:
        return <div>Unknown Slide</div>;
    }
  };

  return (
    <SlideLayout theme={slide.theme || 'yellow'}>
      {renderContent()}
    </SlideLayout>
  );
};
