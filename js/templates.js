// ===== 节日配置 =====
const FESTIVALS = [
  {
    id: 'valentine',
    name: '情人节',
    emoji: '💝',
    en: 'Saint Valentin',
    color: '#a85a5a',
    messages: [
      '遇见你，是我此生最美的意外。\n愿与你共度每一个春夏秋冬。',
      '你是我心底最柔软的那部分，\n也是我最想守护的星辰。',
      '山川湖海，不及你眉眼半分。\n此生有你，便是圆满。',
      '我把所有的浪漫都留给你，\n因为你值得世间一切美好。'
    ]
  },
  {
    id: 'birthday',
    name: '生日',
    emoji: '🎂',
    en: 'Joyeux Anniversaire',
    color: '#c9a989',
    messages: [
      '愿你眼里有光，心中有爱，\n所求皆如愿，所行皆坦途。',
      '生日快乐，我最珍贵的你。\n愿岁月温柔以待，不负韶华。',
      '又长大了一岁，\n愿你永远是那个被世界宠爱的小姑娘。',
      '愿你的每一天都洒满阳光，\n每一个梦都能开花结果。'
    ]
  },
  {
    id: 'mother',
    name: '母亲节',
    emoji: '🌷',
    en: 'Fête des Mères',
    color: '#7a8a6a',
    messages: [
      '妈妈，您是我生命中最美的风景。\n愿时光慢些走，让我多陪陪您。',
      '感谢您用半生的温柔，\n换我一生的幸福安稳。',
      '世间所有的美好，\n都不及您唤我名字时的温柔。',
      '妈妈，我爱您，\n比昨天多一点，比明天少一点。'
    ]
  },
  {
    id: 'christmas',
    name: '圣诞节',
    emoji: '🎄',
    en: 'Joyeux Noël',
    color: '#2d4a3e',
    messages: [
      '愿圣诞的钟声，\n为你带来一整年的平安与喜乐。',
      'Merry Christmas!\n愿你被温暖包裹，被幸福环绕。',
      '这个圣诞，\n愿所有美好都如期而至。',
      '铃儿响叮当，祝福送到你身旁。\n圣诞快乐，我亲爱的你。'
    ]
  },
  {
    id: 'newyear',
    name: '新年',
    emoji: '✨',
    en: 'Bonne Année',
    color: '#b8956e',
    messages: [
      '辞旧迎新，万象更新。\n愿新的一年，你我皆得偿所愿。',
      '新年快乐！\n愿你前路有光，心中有暖，未来可期。',
      '愿新的一年，\n所求皆如愿，所行化坦途，多喜乐，长安宁。',
      '岁岁常欢愉，年年皆胜意。\n新年快乐！'
    ]
  },
  {
    id: 'thanks',
    name: '感恩节',
    emoji: '🍂',
    en: 'Jour de Merci',
    color: '#a88560',
    messages: [
      '感谢生命中所有的相遇，\n尤其是遇见你。',
      '心怀感恩，所遇皆温柔。\n谢谢你出现在我的生命里。',
      '因为有你，\n平凡的日子也闪着光。',
      '感恩一路有你，\n愿我们都被岁月温柔以待。'
    ]
  }
];

// ===== SVG 装饰元素 =====
const ORNAMENTS = {
  // 优雅藤蔓分隔线
  divider: `<svg viewBox="0 0 100 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8 H38" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <path d="M62 8 H100" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <path d="M50 2 Q46 8 50 14 Q54 8 50 2 Z" fill="currentColor" opacity="0.8"/>
    <circle cx="42" cy="8" r="1" fill="currentColor"/>
    <circle cx="58" cy="8" r="1" fill="currentColor"/>
  </svg>`,

  // 顶部花环装饰
  topOrnament: `<svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 8 Q60 20 30 12 Q10 8 8 18" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M100 8 Q140 20 170 12 Q190 8 192 18" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M100 8 Q95 18 100 28 Q105 18 100 8" fill="currentColor" opacity="0.6"/>
    <circle cx="30" cy="12" r="2.5" fill="currentColor"/>
    <circle cx="170" cy="12" r="2.5" fill="currentColor"/>
    <circle cx="55" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="145" cy="14" r="1.5" fill="currentColor"/>
    <path d="M40 10 L42 13 L45 11" stroke="currentColor" stroke-width="0.6" fill="none"/>
    <path d="M160 10 L158 13 L155 11" stroke="currentColor" stroke-width="0.6" fill="none"/>
  </svg>`,

  // 四角边框装饰
  corners: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <!-- 左上角 -->
    <path d="M8 50 Q8 8 50 8" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M14 50 Q14 14 50 14" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.7"/>
    <path d="M24 24 L28 28 M36 24 L32 28" stroke="currentColor" stroke-width="0.5"/>
    <!-- 右上角 -->
    <path d="M292 50 Q292 8 250 8" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M286 50 Q286 14 250 14" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="270" cy="30" r="2" fill="currentColor" opacity="0.7"/>
    <!-- 左下角 -->
    <path d="M8 350 Q8 392 50 392" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M14 350 Q14 386 50 386" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="30" cy="370" r="2" fill="currentColor" opacity="0.7"/>
    <!-- 右下角 -->
    <path d="M292 350 Q292 392 250 392" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M286 350 Q286 386 250 386" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="270" cy="370" r="2" fill="currentColor" opacity="0.7"/>
  </svg>`,

  // 经典双边框
  doubleFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="6" y="6" width="288" height="388" fill="none" stroke="currentColor" stroke-width="0.8"/>
    <rect x="12" y="12" width="276" height="376" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.6"/>
  </svg>`,

  // 花纹边框（带卷草纹）
  ornateFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <!-- 顶部卷草纹 -->
    <path d="M60 18 Q70 10 80 18 Q90 26 100 18 Q110 10 120 18 Q130 26 140 18 Q150 10 160 18 Q170 26 180 18 Q190 10 200 18 Q210 26 220 18 Q230 10 240 18" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <!-- 底部卷草纹 -->
    <path d="M60 382 Q70 390 80 382 Q90 374 100 382 Q110 390 120 382 Q130 374 140 382 Q150 390 160 382 Q170 374 180 382 Q190 390 200 382 Q210 374 220 382 Q230 390 240 382" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <!-- 左侧装饰 -->
    <circle cx="16" cy="200" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="120" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="280" r="1.5" fill="currentColor" opacity="0.5"/>
    <!-- 右侧装饰 -->
    <circle cx="284" cy="200" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="284" cy="120" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="284" cy="280" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>`,

  // 火漆印章
  waxSeal: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sealGrad" cx="35%" cy="35%">
        <stop offset="0%" stop-color="#9e3a3a"/>
        <stop offset="60%" stop-color="#722f37"/>
        <stop offset="100%" stop-color="#5a1f2a"/>
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="27" fill="url(#sealGrad)"/>
    <circle cx="30" cy="30" r="27" fill="none" stroke="#4a1a22" stroke-width="1" opacity="0.5"/>
    <!-- 不规则边缘 -->
    <path d="M30 3 Q38 4 42 8 Q48 10 52 16 Q56 22 55 30 Q56 38 52 44 Q48 50 42 52 Q38 56 30 57 Q22 56 18 52 Q12 50 8 44 Q4 38 5 30 Q4 22 8 16 Q12 10 18 8 Q22 4 30 3 Z" 
          fill="url(#sealGrad)" opacity="0.9"/>
    <!-- 字母装饰 -->
    <text x="30" y="36" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#e8c9a8" opacity="0.9">A</text>
    <circle cx="30" cy="30" r="22" fill="none" stroke="#4a1a22" stroke-width="0.5" opacity="0.6" stroke-dasharray="2 2"/>
  </svg>`
};

// ===== 模板配置 =====
const TEMPLATES = [
  {
    id: 'rose',
    name: '法式玫瑰',
    className: 'tpl-rose',
    previewBg: 'linear-gradient(135deg, #faf3e8 0%, #f5e6d3 100%)',
    border: ORNAMENTS.ornateFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'emerald',
    name: '英伦墨绿',
    className: 'tpl-emerald',
    previewBg: 'linear-gradient(135deg, #2d4a3e 0%, #1e3329 100%)',
    border: ORNAMENTS.doubleFrame,
    showSeal: true,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'burgundy',
    name: '宫廷酒红',
    className: 'tpl-burgundy',
    previewBg: 'linear-gradient(135deg, #5a1f2a 0%, #722f37 100%)',
    border: ORNAMENTS.corners,
    showSeal: true,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'nordic',
    name: '北欧简约',
    className: 'tpl-nordic',
    previewBg: 'linear-gradient(135deg, #f7f2ec 0%, #ede0d4 100%)',
    border: ORNAMENTS.doubleFrame,
    showSeal: false,
    fontTo: 'serif',
    fontMsg: 'cn'
  },
  {
    id: 'spring',
    name: '春日花田',
    className: 'tpl-spring',
    previewBg: 'linear-gradient(160deg, #fdf6f0 0%, #f0e4d8 100%)',
    border: ORNAMENTS.ornateFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'gold',
    name: '金箔夜宴',
    className: 'tpl-gold',
    previewBg: 'linear-gradient(135deg, #1a1a1a 0%, #2a2218 100%)',
    border: ORNAMENTS.corners,
    showSeal: true,
    fontTo: 'serif',
    fontMsg: 'en'
  }
];
