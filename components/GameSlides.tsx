import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Music, Play, Pause, Gift, Smartphone, Trophy, Gamepad2, Brain, Sparkles } from 'lucide-react';
import { GAME1_PROMPTS, QUIZ_DATA } from '../data';
import { QuizQuestion } from '../types';

// --- Shared UI Elements ---
const Title = ({ children, color = "text-black" }: { children?: React.ReactNode, color?: string }) => (
  <h1 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-md mb-6 ${color}`}>
    {children}
  </h1>
);

const SubTitle = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-8 opacity-80 max-w-3xl text-center leading-relaxed">
    {children}
  </h2>
);

const EmojiIcon = ({ emoji }: { emoji: string }) => (
  <div className="text-[120px] md:text-[180px] animate-wiggle drop-shadow-xl my-4 select-none">
    {emoji}
  </div>
);

// --- 1. Cover Page ---
export const CoverSlide = () => {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF00FF', '#00FFFF', '#FFEB3B']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF00FF', '#00FFFF', '#FFEB3B']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-yellow-300 text-center p-12">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-4">
        <span className="text-8xl">🍻</span>
      </motion.div>
      <Title color="text-pink-600">吃好喝好<br/>快乐没跑！</Title>
      <div className="bg-black text-white px-8 py-4 text-2xl font-bold rotate-[-3deg] shadow-neo mb-12">
        2025 年会干饭大作战
      </div>
      <div className="flex gap-8 text-xl font-bold uppercase tracking-widest">
        <span className="flex items-center gap-2"><Gamepad2 /> 游戏</span>
        <span className="flex items-center gap-2"><Gift /> 抽奖</span>
        <span className="flex items-center gap-2"><Sparkles /> 狂欢</span>
      </div>
    </div>
  );
};

// --- 2. Rules ---
export const RulesSlide = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-cyan-200 p-12 relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-4 bg-stripes opacity-20"></div>
     <Title>⚔️ 全员桌面对抗赛 ⚔️</Title>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
        {[
          { icon: "🥣", title: "分组", text: "以「桌」为单位，全员参与" },
          { icon: "💰", title: "机制", text: "玩游戏，攒积分，争第一" },
          { icon: "🎁", title: "大奖", text: "总分最高桌，全员人手一份！" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white border-4 border-black shadow-neo-sm p-8 rounded-xl flex flex-col items-center text-center"
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-black mb-2">{item.title}</h3>
            <p className="font-semibold text-gray-600">{item.text}</p>
          </motion.div>
        ))}
     </div>
  </div>
);

// --- 3. Game 1 Intro & Play ---
export const Game1Intro = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-pink-400 text-white p-12">
    <EmojiIcon emoji="🎮" />
    <Title color="text-yellow-300">GAME 1: 桌桌连连看</Title>
    <SubTitle>拼手速，更拼“含金量”！<br/>主持人喊特征 -> 满足举手 -> 最快的一桌+1分</SubTitle>
  </div>
);

export const Game1Demo = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-12">
    <div className="text-gray-400 font-black text-4xl mb-4">ROUND 0 (试玩)</div>
    <div className="text-8xl font-black text-pink-500 mb-8 animate-pulse">
      寻找身上有<br/>“粉色”元素的人
    </div>
    <EmojiIcon emoji="🐆" />
  </div>
);

export const Game1Play = () => {
  const [index, setIndex] = useState(0);

  const nextPrompt = () => setIndex((prev) => (prev + 1) % GAME1_PROMPTS.length);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white p-12" onClick={nextPrompt}>
      <div className="absolute top-8 right-8 text-2xl font-bold opacity-30">Click for next prompt</div>
      <div className="text-gray-400 font-black text-3xl mb-12 uppercase tracking-widest">
        Listen to the Host
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          className="text-center"
        >
          <div className="text-7xl md:text-9xl font-black text-black leading-tight max-w-4xl">
            {GAME1_PROMPTS[index]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- 4. Game 2 (Music) ---
export const Game2Intro = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-purple-600 text-white p-12">
    <EmojiIcon emoji="💃" />
    <Title color="text-green-400">GAME 2: 音乐停停跳</Title>
    <SubTitle>只要你敢跳，C位就是你！<br/>不比舞技，只比投入 (社牛的胜利)</SubTitle>
  </div>
);

export const Game2Round = ({ round, title, icon }: { round: number, title: string, icon: string }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black text-white p-12">
      <div className="text-2xl font-bold mb-4 text-purple-400">ROUND {round}</div>
      <Title color="text-white">{title}</Title>
      <EmojiIcon emoji={icon} />
      
      <button 
        onClick={() => setPlaying(!playing)}
        className="mt-12 bg-green-500 hover:bg-green-400 text-black px-12 py-6 rounded-full font-black text-2xl flex items-center gap-4 transition-transform active:scale-95 shadow-[0_0_30px_rgba(74,222,128,0.5)]"
      >
        {playing ? <Pause size={32} /> : <Play size={32} />}
        {playing ? "PAUSE MUSIC" : "PLAY MUSIC"}
      </button>
      
      {playing && (
        <div className="flex gap-2 mt-8 h-16 items-end">
          {[...Array(10)].map((_, i) => (
             <motion.div
               key={i}
               className="w-4 bg-pink-500 rounded-t-lg"
               animate={{ height: ["20%", "100%", "20%"] }}
               transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
             />
          ))}
        </div>
      )}
    </div>
  );
};

// --- 5. Game 3 (Quiz) ---
export const Game3Intro = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-orange-400 text-white p-12">
    <EmojiIcon emoji="🧠" />
    <Title color="text-yellow-200">GAME 3: 疯狂猜猜猜</Title>
    <SubTitle>谐音梗扣钱，但猜对得分！<br/>看图联想 • 抢答模式</SubTitle>
  </div>
);

export const Game3Quiz = ({ question }: { question: QuizQuestion }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white p-8" onClick={() => setShowAnswer(true)}>
      <div className="w-full flex justify-between items-start mb-4 opacity-50 font-bold">
        <span>Question #{question.id}</span>
        <span>Click to reveal answer</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="text-[100px] md:text-[150px] leading-tight text-center mb-8">
          {question.emoji}
        </div>
        
        {showAnswer ? (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-400 text-black px-12 py-6 rounded-2xl shadow-neo border-4 border-black"
          >
            <h3 className="text-4xl md:text-6xl font-black">{question.answer}</h3>
            {question.hint && <p className="text-xl mt-2 font-bold opacity-70">({question.hint})</p>}
          </motion.div>
        ) : (
          <div className="text-3xl font-bold bg-gray-200 text-gray-400 px-8 py-4 rounded-xl">
             🤔 Thinking...
          </div>
        )}
      </div>
    </div>
  );
};

// --- 6. Awards ---
export const AwardSlide = () => {
    useEffect(() => {
        const interval = setInterval(() => {
             confetti({
                particleCount: 50,
                spread: 80,
                origin: { y: 0.6 }
             });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-yellow-400 p-12">
            <Trophy size={120} className="text-black mb-8 animate-bounce" />
            <Title>🏆 王者诞生 🏆</Title>
            <SubTitle>恭喜总分最高的一桌！<br/>全员领取小礼品一份！</SubTitle>
            <div className="mt-8 text-8xl">💰🎁👏</div>
        </div>
    )
}

// --- 7. Lottery ---
export const LotteryIntro = () => (
    <div className="flex-1 flex flex-col items-center justify-center bg-red-600 text-white p-12">
        <Title color="text-yellow-300">🧧 幸运大抽奖</Title>
        <SubTitle>搏一搏，单车变摩托！</SubTitle>
    </div>
);

export const LotterySeat = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-blue-500 text-white p-12">
            <Title>🪑 屁股底下有黄金</Title>
            <p className="text-2xl mb-12">请大家摸摸自己的椅子下面...</p>
            
            <button 
                onClick={() => { setRevealed(true); confetti(); }}
                className="bg-yellow-400 text-black text-3xl font-black px-12 py-6 rounded-full shadow-neo border-4 border-black hover:translate-y-1 hover:shadow-none transition-all"
            >
                {revealed ? "中奖啦！🎉" : "开 奖"}
            </button>
            
            {revealed && (
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-8">
                     <img src="https://picsum.photos/300/200?random=1" alt="Prize" className="border-4 border-white rounded-lg shadow-lg rotate-3" />
                </motion.div>
            )}
        </div>
    );
}

export const LotteryPhone = () => {
    const [running, setRunning] = useState(false);
    const [phone, setPhone] = useState("138 **** 8888");

    useEffect(() => {
        let interval: number;
        if (running) {
            interval = window.setInterval(() => {
                const randomPhone = `1${Math.floor(Math.random() * 90 + 30)} **** ${Math.floor(Math.random() * 9000 + 1000)}`;
                setPhone(randomPhone);
            }, 50);
        }
        return () => clearInterval(interval);
    }, [running]);

    const toggle = () => {
        setRunning(!running);
        if (running) confetti({ particleCount: 150, spread: 100 });
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-purple-800 text-white p-12">
             <Smartphone size={80} className="mb-4" />
             <Title>📱 连线锦鲤</Title>
             <div className="bg-black text-green-400 font-mono text-6xl md:text-8xl p-8 rounded-xl border-4 border-gray-600 shadow-2xl mb-12 tracking-wider">
                 {phone}
             </div>
             <button 
                onClick={toggle}
                className={`text-3xl font-black px-16 py-6 rounded-full shadow-neo border-4 border-black transition-all ${running ? 'bg-red-500 text-white' : 'bg-green-400 text-black'}`}
            >
                {running ? "STOP 🛑" : "START 🎲"}
            </button>
        </div>
    )
}

// --- 8. Ending ---
export const EndingSlide = () => (
    <div className="flex-1 flex flex-col items-center justify-center bg-black text-white p-12">
        <Title color="text-pink-500">2025, 我们以此为序</Title>
        <SubTitle>明年继续 乘风破浪！</SubTitle>
        <div className="text-[150px] animate-bounce-slow mt-8">🍻</div>
        <p className="mt-12 opacity-50">Have a wonderful night!</p>
    </div>
);
