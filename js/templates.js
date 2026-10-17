// ===== 节日配置 =====
const FESTIVALS = [
  {
    id: 'flower',
    name: '插花',
    emoji: '💐',
    en: 'Bouquet de Fleurs',
    color: '#c97b8a',
    messages: [
      '送你一束花，\n愿你的心情如花般绽放。',
      '生活需要仪式感，\n而你值得所有美好。',
      '把春天扎成花束送给你，\n愿你眼里有光，心中有爱。',
      '一花一世界，\n愿你被温柔以待，被美好环绕。'
    ]
  },
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
    <path d="M8 50 Q8 8 50 8" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M14 50 Q14 14 50 14" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.7"/>
    <path d="M24 24 L28 28 M36 24 L32 28" stroke="currentColor" stroke-width="0.5"/>
    <path d="M292 50 Q292 8 250 8" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M286 50 Q286 14 250 14" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="270" cy="30" r="2" fill="currentColor" opacity="0.7"/>
    <path d="M8 350 Q8 392 50 392" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M14 350 Q14 386 50 386" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.6"/>
    <circle cx="30" cy="370" r="2" fill="currentColor" opacity="0.7"/>
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
    <path d="M60 18 Q70 10 80 18 Q90 26 100 18 Q110 10 120 18 Q130 26 140 18 Q150 10 160 18 Q170 26 180 18 Q190 10 200 18 Q210 26 220 18 Q230 10 240 18" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <path d="M60 382 Q70 390 80 382 Q90 374 100 382 Q110 390 120 382 Q130 374 140 382 Q150 390 160 382 Q170 374 180 382 Q190 390 200 382 Q210 374 220 382 Q230 390 240 382" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <circle cx="16" cy="200" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="120" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="280" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="284" cy="200" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="284" cy="120" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="284" cy="280" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>`,

  // 花卉边框（插花主题）
  flowerFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="8" y="8" width="284" height="384" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
    <!-- 左上角花束 -->
    <g transform="translate(12,12)">
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="16" cy="6" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="6" cy="16" r="3.5" fill="currentColor" opacity="0.4"/>
      <path d="M10 15 Q14 25 10 35" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
      <ellipse cx="14" cy="28" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(30 14 28)"/>
    </g>
    <!-- 右上角花束 -->
    <g transform="translate(288,12) scale(-1,1)">
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="16" cy="6" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="6" cy="16" r="3.5" fill="currentColor" opacity="0.4"/>
      <path d="M10 15 Q14 25 10 35" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
      <ellipse cx="14" cy="28" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(30 14 28)"/>
    </g>
    <!-- 左下角花束 -->
    <g transform="translate(12,388) scale(1,-1)">
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="16" cy="6" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="6" cy="16" r="3.5" fill="currentColor" opacity="0.4"/>
      <path d="M10 15 Q14 25 10 35" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
    </g>
    <!-- 右下角花束 -->
    <g transform="translate(288,388) scale(-1,-1)">
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="16" cy="6" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="6" cy="16" r="3.5" fill="currentColor" opacity="0.4"/>
      <path d="M10 15 Q14 25 10 35" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
    </g>
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
    <path d="M30 3 Q38 4 42 8 Q48 10 52 16 Q56 22 55 30 Q56 38 52 44 Q48 50 42 52 Q38 56 30 57 Q22 56 18 52 Q12 50 8 44 Q4 38 5 30 Q4 22 8 16 Q12 10 18 8 Q22 4 30 3 Z" 
          fill="url(#sealGrad)" opacity="0.9"/>
    <text x="30" y="36" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#e8c9a8" opacity="0.9">A</text>
    <circle cx="30" cy="30" r="22" fill="none" stroke="#4a1a22" stroke-width="0.5" opacity="0.6" stroke-dasharray="2 2"/>
  </svg>`
};

// ===== 萌宠 SVG =====
const PETS = {
  none: null,
  rabbit: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- 耳朵 -->
    <ellipse cx="38" cy="22" rx="7" ry="18" fill="#f5ede0" stroke="#c9a989" stroke-width="1.2"/>
    <ellipse cx="38" cy="24" rx="3.5" ry="12" fill="#f0c5c0"/>
    <ellipse cx="62" cy="22" rx="7" ry="18" fill="#f5ede0" stroke="#c9a989" stroke-width="1.2"/>
    <ellipse cx="62" cy="24" rx="3.5" ry="12" fill="#f0c5c0"/>
    <!-- 头 -->
    <ellipse cx="50" cy="55" rx="26" ry="24" fill="#f5ede0" stroke="#c9a989" stroke-width="1.2"/>
    <!-- 脸颊红晕 -->
    <ellipse cx="34" cy="60" rx="5" ry="3.5" fill="#f0c5c0" opacity="0.7"/>
    <ellipse cx="66" cy="60" rx="5" ry="3.5" fill="#f0c5c0" opacity="0.7"/>
    <!-- 眼睛 -->
    <ellipse cx="42" cy="52" rx="3" ry="4" fill="#3a2f28"/>
    <ellipse cx="58" cy="52" rx="3" ry="4" fill="#3a2f28"/>
    <circle cx="43" cy="50" r="1" fill="#fff"/>
    <circle cx="59" cy="50" r="1" fill="#fff"/>
    <!-- 鼻子 -->
    <path d="M48 62 Q50 65 52 62 Z" fill="#e8a0a0"/>
    <!-- 嘴 -->
    <path d="M50 65 Q46 70 44 67" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <path d="M50 65 Q54 70 56 67" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <!-- 胡须 -->
    <line x1="30" y1="60" x2="22" y2="58" stroke="#c9a989" stroke-width="0.6"/>
    <line x1="30" y1="63" x2="22" y2="64" stroke="#c9a989" stroke-width="0.6"/>
    <line x1="70" y1="60" x2="78" y2="58" stroke="#c9a989" stroke-width="0.6"/>
    <line x1="70" y1="63" x2="78" y2="64" stroke="#c9a989" stroke-width="0.6"/>
  </svg>`,
  cat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- 耳朵 -->
    <path d="M28 32 L22 12 L40 24 Z" fill="#e8d8c4" stroke="#c9a989" stroke-width="1.2"/>
    <path d="M72 32 L78 12 L60 24 Z" fill="#e8d8c4" stroke="#c9a989" stroke-width="1.2"/>
    <path d="M29 28 L26 18 L35 24 Z" fill="#f0c5c0"/>
    <path d="M71 28 L74 18 L65 24 Z" fill="#f0c5c0"/>
    <!-- 头 -->
    <ellipse cx="50" cy="55" rx="27" ry="25" fill="#e8d8c4" stroke="#c9a989" stroke-width="1.2"/>
    <!-- 脸颊红晕 -->
    <ellipse cx="33" cy="62" rx="5" ry="3.5" fill="#f0c5c0" opacity="0.7"/>
    <ellipse cx="67" cy="62" rx="5" ry="3.5" fill="#f0c5c0" opacity="0.7"/>
    <!-- 眼睛（猫眼） -->
    <ellipse cx="42" cy="52" rx="3.5" ry="5" fill="#3a2f28"/>
    <ellipse cx="58" cy="52" rx="3.5" ry="5" fill="#3a2f28"/>
    <ellipse cx="42" cy="51" rx="1.2" ry="3" fill="#c9a989"/>
    <ellipse cx="58" cy="51" rx="1.2" ry="3" fill="#c9a989"/>
    <circle cx="43" cy="49" r="1" fill="#fff"/>
    <circle cx="59" cy="49" r="1" fill="#fff"/>
    <!-- 鼻子 -->
    <path d="M47 63 Q50 66 53 63 L50 67 Z" fill="#e8a0a0"/>
    <!-- 嘴 -->
    <path d="M50 67 Q47 71 44 68" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <path d="M50 67 Q53 71 56 68" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <!-- 胡须 -->
    <line x1="30" y1="62" x2="18" y2="59" stroke="#a89580" stroke-width="0.6"/>
    <line x1="30" y1="65" x2="18" y2="67" stroke="#a89580" stroke-width="0.6"/>
    <line x1="70" y1="62" x2="82" y2="59" stroke="#a89580" stroke-width="0.6"/>
    <line x1="70" y1="65" x2="82" y2="67" stroke="#a89580" stroke-width="0.6"/>
  </svg>`,
  dog: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- 耳朵（垂耳） -->
    <ellipse cx="26" cy="42" rx="10" ry="16" fill="#c9a07a" stroke="#a88560" stroke-width="1.2" transform="rotate(-15 26 42)"/>
    <ellipse cx="74" cy="42" rx="10" ry="16" fill="#c9a07a" stroke="#a88560" stroke-width="1.2" transform="rotate(15 74 42)"/>
    <!-- 头 -->
    <ellipse cx="50" cy="55" rx="26" ry="24" fill="#e8d0b0" stroke="#a88560" stroke-width="1.2"/>
    <!-- 脸颊 -->
    <ellipse cx="34" cy="62" rx="6" ry="4" fill="#f0c5c0" opacity="0.6"/>
    <ellipse cx="66" cy="62" rx="6" ry="4" fill="#f0c5c0" opacity="0.6"/>
    <!-- 眼睛 -->
    <circle cx="42" cy="52" r="3.5" fill="#3a2f28"/>
    <circle cx="58" cy="52" r="3.5" fill="#3a2f28"/>
    <circle cx="43" cy="50" r="1.2" fill="#fff"/>
    <circle cx="59" cy="50" r="1.2" fill="#fff"/>
    <!-- 鼻子 -->
    <ellipse cx="50" cy="63" rx="5" ry="4" fill="#3a2f28"/>
    <ellipse cx="49" cy="62" rx="1.5" ry="1" fill="#8a7a6b" opacity="0.6"/>
    <!-- 嘴 -->
    <path d="M50 67 L50 72" stroke="#3a2f28" stroke-width="1"/>
    <path d="M50 72 Q45 76 42 73" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <path d="M50 72 Q55 76 58 73" stroke="#3a2f28" stroke-width="1" fill="none"/>
    <!-- 舌头 -->
    <path d="M47 74 Q50 78 53 74 Z" fill="#e8a0a0"/>
  </svg>`
};

// ===== 花束 SVG =====
const FLOWERS = {
  none: null,
  bouquet: `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
    <!-- 包装纸 -->
    <path d="M30 85 L25 130 L95 130 L90 85 Z" fill="#e8d5c0" opacity="0.8"/>
    <path d="M30 85 L25 130 L40 130 L42 90 Z" fill="#d4b896" opacity="0.6"/>
    <path d="M90 85 L95 130 L80 130 L78 90 Z" fill="#d4b896" opacity="0.6"/>
    <!-- 丝带 -->
    <path d="M35 88 Q60 95 85 88 L82 95 Q60 100 38 95 Z" fill="#c97b8a"/>
    <ellipse cx="50" cy="92" rx="6" ry="4" fill="#c97b8a"/>
    <ellipse cx="70" cy="92" rx="6" ry="4" fill="#c97b8a"/>
    <!-- 花朵 -->
    <g>
      <!-- 玫瑰1 -->
      <circle cx="45" cy="50" r="12" fill="#d4738a"/>
      <circle cx="45" cy="50" r="8" fill="#e8909f"/>
      <circle cx="45" cy="50" r="4" fill="#f0a8b5"/>
      <!-- 玫瑰2 -->
      <circle cx="68" cy="42" r="11" fill="#c97b8a"/>
      <circle cx="68" cy="42" r="7" fill="#e0889a"/>
      <circle cx="68" cy="42" r="3.5" fill="#f0a8b5"/>
      <!-- 玫瑰3 -->
      <circle cx="58" cy="62" r="10" fill="#b8657a"/>
      <circle cx="58" cy="62" r="6" fill="#d4738a"/>
      <circle cx="58" cy="62" r="3" fill="#e8909f"/>
      <!-- 小雏菊 -->
      <circle cx="35" cy="65" r="6" fill="#faf3e8"/>
      <circle cx="35" cy="65" r="2.5" fill="#e8c54a"/>
      <circle cx="80" cy="58" r="5" fill="#faf3e8"/>
      <circle cx="80" cy="58" r="2" fill="#e8c54a"/>
      <!-- 叶子 -->
      <ellipse cx="30" cy="75" rx="5" ry="10" fill="#7a9a6a" transform="rotate(-30 30 75)"/>
      <ellipse cx="88" cy="72" rx="5" ry="10" fill="#7a9a6a" transform="rotate(30 88 72)"/>
      <ellipse cx="50" cy="78" rx="4" ry="8" fill="#8aaa7a" transform="rotate(-10 50 78)"/>
      <ellipse cx="72" cy="76" rx="4" ry="8" fill="#8aaa7a" transform="rotate(15 72 76)"/>
    </g>
  </svg>`,
  tulip: `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
    <!-- 茎 -->
    <path d="M40 50 Q38 80 40 115" stroke="#7a9a6a" stroke-width="3" fill="none"/>
    <!-- 叶 -->
    <path d="M40 75 Q20 70 18 90 Q35 90 40 80" fill="#8aaa7a"/>
    <path d="M40 85 Q60 82 62 100 Q45 100 40 90" fill="#7a9a6a"/>
    <!-- 郁金香花朵 -->
    <path d="M40 15 Q20 25 25 50 Q35 55 40 48 Q45 55 55 50 Q60 25 40 15 Z" fill="#e8909f"/>
    <path d="M40 15 Q32 30 35 48 Q40 42 40 15" fill="#d4738a" opacity="0.5"/>
  </svg>`,
  daisy: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,50)">
      <!-- 花瓣 -->
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(45)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(90)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(135)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(180)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(225)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(270)"/>
      <ellipse cx="0" cy="-25" rx="8" ry="16" fill="#faf3e8" stroke="#e0d0b8" stroke-width="0.5" transform="rotate(315)"/>
      <!-- 花心 -->
      <circle cx="0" cy="0" r="10" fill="#e8c54a"/>
      <circle cx="0" cy="0" r="6" fill="#d4a83a"/>
    </g>
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
  },
  {
    id: 'bouquet',
    name: '花束粉调',
    className: 'tpl-bouquet',
    previewBg: 'linear-gradient(135deg, #fdf2f0 0%, #f5e0dc 100%)',
    border: ORNAMENTS.flowerFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'garden',
    name: '花园绿意',
    className: 'tpl-garden',
    previewBg: 'linear-gradient(135deg, #f0f5e8 0%, #dce8d0 100%)',
    border: ORNAMENTS.flowerFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  }
];
