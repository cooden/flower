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
  // 花卉分隔线（加宽，中心花朵）
  divider: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10 H70" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M130 10 H200" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M70 10 Q80 4 100 4 Q120 4 130 10" stroke="currentColor" stroke-width="1" fill="none"/>
    <circle cx="100" cy="10" r="5" fill="currentColor" opacity="0.7"/>
    <circle cx="100" cy="10" r="2.5" fill="currentColor"/>
    <circle cx="80" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="120" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
    <path d="M85 7 Q88 5 91 7" stroke="currentColor" stroke-width="0.6" fill="none"/>
    <path d="M109 7 Q112 5 115 7" stroke="currentColor" stroke-width="0.6" fill="none"/>
  </svg>`,

  // 顶部花卉装饰（加宽，含叶子和花朵）
  topOrnament: `<svg viewBox="0 0 280 50" xmlns="http://www.w3.org/2000/svg">
    <!-- 中央主花 -->
    <g transform="translate(140,25)">
      <circle cx="0" cy="0" r="9" fill="currentColor" opacity="0.5"/>
      <circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.8"/>
      <circle cx="0" cy="0" r="2" fill="currentColor"/>
      <!-- 花瓣 -->
      <ellipse cx="0" cy="-8" rx="3" ry="5" fill="currentColor" opacity="0.4"/>
      <ellipse cx="0" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.4"/>
      <ellipse cx="-8" cy="0" rx="5" ry="3" fill="currentColor" opacity="0.4"/>
      <ellipse cx="8" cy="0" rx="5" ry="3" fill="currentColor" opacity="0.4"/>
    </g>
    <!-- 左侧藤蔓 -->
    <path d="M140 25 Q100 10 50 18 Q20 22 8 14" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M140 25 Q100 38 50 30 Q20 26 8 34" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- 右侧藤蔓 -->
    <path d="M140 25 Q180 10 230 18 Q260 22 272 14" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M140 25 Q180 38 230 30 Q260 26 272 34" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- 左侧花朵 -->
    <circle cx="50" cy="18" r="5" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="18" r="2.5" fill="currentColor"/>
    <circle cx="8" cy="14" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="8" cy="34" r="3" fill="currentColor" opacity="0.5"/>
    <!-- 右侧花朵 -->
    <circle cx="230" cy="18" r="5" fill="currentColor" opacity="0.6"/>
    <circle cx="230" cy="18" r="2.5" fill="currentColor"/>
    <circle cx="272" cy="14" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="272" cy="34" r="3" fill="currentColor" opacity="0.5"/>
    <!-- 叶子 -->
    <ellipse cx="90" cy="14" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(-20 90 14)"/>
    <ellipse cx="190" cy="14" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(20 190 14)"/>
    <ellipse cx="90" cy="36" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(20 90 36)"/>
    <ellipse cx="190" cy="36" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(-20 190 36)"/>
  </svg>`,

  // 豪华花卉边框（四角花簇+点状藤蔓边+中部花饰）
  richFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <!-- 外框双线 -->
    <rect x="8" y="8" width="284" height="384" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/>
    <rect x="14" y="14" width="272" height="372" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
    <!-- 顶部点状藤蔓 -->
    <path d="M30 20 L270 20" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.5"/>
    <!-- 底部点状藤蔓 -->
    <path d="M30 380 L270 380" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.5"/>
    <!-- 左侧点状藤蔓 -->
    <path d="M20 30 L20 370" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.5"/>
    <!-- 右侧点状藤蔓 -->
    <path d="M280 30 L280 370" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.5"/>
    <!-- 左上角花簇 -->
    <g transform="translate(22,22)">
      <circle cx="0" cy="0" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="8" cy="-4" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="-4" cy="8" r="4.5" fill="currentColor" opacity="0.4"/>
      <circle cx="0" cy="0" r="3" fill="currentColor"/>
      <path d="M6 6 Q12 14 8 22" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
      <ellipse cx="12" cy="16" rx="3" ry="6" fill="currentColor" opacity="0.3" transform="rotate(30 12 16)"/>
    </g>
    <!-- 右上角花簇 -->
    <g transform="translate(278,22) scale(-1,1)">
      <circle cx="0" cy="0" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="8" cy="-4" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="-4" cy="8" r="4.5" fill="currentColor" opacity="0.4"/>
      <circle cx="0" cy="0" r="3" fill="currentColor"/>
      <path d="M6 6 Q12 14 8 22" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
      <ellipse cx="12" cy="16" rx="3" ry="6" fill="currentColor" opacity="0.3" transform="rotate(30 12 16)"/>
    </g>
    <!-- 左下角花簇 -->
    <g transform="translate(22,378) scale(1,-1)">
      <circle cx="0" cy="0" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="8" cy="-4" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="-4" cy="8" r="4.5" fill="currentColor" opacity="0.4"/>
      <circle cx="0" cy="0" r="3" fill="currentColor"/>
      <path d="M6 6 Q12 14 8 22" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
    </g>
    <!-- 右下角花簇 -->
    <g transform="translate(278,378) scale(-1,-1)">
      <circle cx="0" cy="0" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="8" cy="-4" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="-4" cy="8" r="4.5" fill="currentColor" opacity="0.4"/>
      <circle cx="0" cy="0" r="3" fill="currentColor"/>
      <path d="M6 6 Q12 14 8 22" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
    </g>
    <!-- 顶边中部花饰 -->
    <g transform="translate(150,20)">
      <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="0" cy="0" r="2" fill="currentColor"/>
      <circle cx="-10" cy="0" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="0" r="2" fill="currentColor" opacity="0.4"/>
    </g>
    <!-- 底边中部花饰 -->
    <g transform="translate(150,380)">
      <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="0" cy="0" r="2" fill="currentColor"/>
      <circle cx="-10" cy="0" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="0" r="2" fill="currentColor" opacity="0.4"/>
    </g>
    <!-- 左边中部花饰 -->
    <g transform="translate(20,200)">
      <circle cx="0" cy="0" r="3.5" fill="currentColor" opacity="0.6"/>
      <circle cx="0" cy="0" r="1.8" fill="currentColor"/>
    </g>
    <!-- 右边中部花饰 -->
    <g transform="translate(280,200)">
      <circle cx="0" cy="0" r="3.5" fill="currentColor" opacity="0.6"/>
      <circle cx="0" cy="0" r="1.8" fill="currentColor"/>
    </g>
  </svg>`,

  // 四角边框装饰（增强版）
  corners: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
    <rect x="16" y="16" width="268" height="368" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
    <!-- 左上角 -->
    <g transform="translate(16,16)">
      <path d="M0 40 Q0 0 40 0" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path d="M0 32 Q0 8 32 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M14 14 L18 18 M26 14 L22 18" stroke="currentColor" stroke-width="0.8"/>
      <path d="M8 40 Q4 44 8 48" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
      <path d="M40 8 Q44 4 48 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
    </g>
    <!-- 右上角 -->
    <g transform="translate(284,16) scale(-1,1)">
      <path d="M0 40 Q0 0 40 0" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path d="M0 32 Q0 8 32 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M14 14 L18 18 M26 14 L22 18" stroke="currentColor" stroke-width="0.8"/>
      <path d="M8 40 Q4 44 8 48" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
      <path d="M40 8 Q44 4 48 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
    </g>
    <!-- 左下角 -->
    <g transform="translate(16,384) scale(1,-1)">
      <path d="M0 40 Q0 0 40 0" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path d="M0 32 Q0 8 32 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M14 14 L18 18 M26 14 L22 18" stroke="currentColor" stroke-width="0.8"/>
    </g>
    <!-- 右下角 -->
    <g transform="translate(284,384) scale(-1,-1)">
      <path d="M0 40 Q0 0 40 0" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path d="M0 32 Q0 8 32 8" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M14 14 L18 18 M26 14 L22 18" stroke="currentColor" stroke-width="0.8"/>
    </g>
    <!-- 四边中点小装饰 -->
    <circle cx="150" cy="16" r="2.5" fill="currentColor" opacity="0.5"/>
    <circle cx="150" cy="384" r="2.5" fill="currentColor" opacity="0.5"/>
    <circle cx="16" cy="200" r="2.5" fill="currentColor" opacity="0.5"/>
    <circle cx="284" cy="200" r="2.5" fill="currentColor" opacity="0.5"/>
  </svg>`,

  // 经典双边框（加点状装饰）
  doubleFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="6" y="6" width="288" height="388" fill="none" stroke="currentColor" stroke-width="1"/>
    <rect x="14" y="14" width="272" height="372" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <!-- 四角小花 -->
    <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="290" cy="10" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="10" cy="390" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="290" cy="390" r="3" fill="currentColor" opacity="0.6"/>
    <!-- 中点花饰 -->
    <circle cx="150" cy="10" r="2.5" fill="currentColor" opacity="0.5"/>
    <circle cx="150" cy="390" r="2.5" fill="currentColor" opacity="0.5"/>
  </svg>`,

  // 花纹边框（带卷草纹，增强版）
  ornateFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
    <rect x="16" y="16" width="268" height="368" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
    <!-- 顶部卷草纹 -->
    <path d="M40 18 Q50 10 60 18 Q70 26 80 18 Q90 10 100 18 Q110 26 120 18 Q130 10 140 18 Q150 26 160 18 Q170 10 180 18 Q190 26 200 18 Q210 10 220 18 Q230 26 240 18 Q250 10 260 18" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8"/>
    <!-- 底部卷草纹 -->
    <path d="M40 382 Q50 390 60 382 Q70 374 80 382 Q90 390 100 382 Q110 374 120 382 Q130 390 140 382 Q150 374 160 382 Q170 390 180 382 Q190 374 200 382 Q210 390 220 382 Q230 374 240 382 Q250 390 260 382" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8"/>
    <!-- 左侧卷草纹 -->
    <path d="M18 60 Q10 70 18 80 Q26 90 18 100 Q10 110 18 120 Q26 130 18 140 Q10 150 18 160 Q26 170 18 180 Q10 190 18 200 Q26 210 18 220 Q10 230 18 240 Q26 250 18 260 Q10 270 18 280 Q26 290 18 300 Q10 310 18 320 Q26 330 18 340" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8"/>
    <!-- 右侧卷草纹 -->
    <path d="M282 60 Q290 70 282 80 Q274 90 282 100 Q290 110 282 120 Q274 130 282 140 Q290 150 282 160 Q274 170 282 180 Q290 190 282 200 Q274 210 282 220 Q290 230 282 240 Q274 250 282 260 Q290 270 282 280 Q274 290 282 300 Q290 310 282 320 Q274 330 282 340" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8"/>
    <!-- 四角花簇 -->
    <g transform="translate(16,16)">
      <circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="6" cy="6" r="2.5" fill="currentColor"/>
    </g>
    <g transform="translate(284,16) scale(-1,1)">
      <circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="6" cy="6" r="2.5" fill="currentColor"/>
    </g>
    <g transform="translate(16,384) scale(1,-1)">
      <circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="6" cy="6" r="2.5" fill="currentColor"/>
    </g>
    <g transform="translate(284,384) scale(-1,-1)">
      <circle cx="6" cy="6" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="6" cy="6" r="2.5" fill="currentColor"/>
    </g>
    <!-- 四边中点花饰 -->
    <circle cx="150" cy="16" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="150" cy="384" r="3" fill="currentColor" opacity="0.5"/>
  </svg>`,

  // 花卉边框（插花主题，增强版）
  flowerFrame: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <rect x="8" y="8" width="284" height="384" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
    <rect x="14" y="14" width="272" height="372" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
    <!-- 点状藤蔓边 -->
    <path d="M30 16 L270 16" stroke="currentColor" stroke-width="0.6" stroke-dasharray="1.5 3" opacity="0.5"/>
    <path d="M30 384 L270 384" stroke="currentColor" stroke-width="0.6" stroke-dasharray="1.5 3" opacity="0.5"/>
    <path d="M16 30 L16 370" stroke="currentColor" stroke-width="0.6" stroke-dasharray="1.5 3" opacity="0.5"/>
    <path d="M284 30 L284 370" stroke="currentColor" stroke-width="0.6" stroke-dasharray="1.5 3" opacity="0.5"/>
    <!-- 左上角花束 -->
    <g transform="translate(14,14)">
      <circle cx="10" cy="10" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="18" cy="5" r="5.5" fill="currentColor" opacity="0.4"/>
      <circle cx="5" cy="18" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="10" r="3.5" fill="currentColor" opacity="0.8"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      <path d="M14 16 Q20 28 14 40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
      <ellipse cx="18" cy="30" rx="4" ry="7" fill="currentColor" opacity="0.3" transform="rotate(30 18 30)"/>
      <path d="M6 20 Q2 26 6 32" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.4"/>
    </g>
    <!-- 右上角花束 -->
    <g transform="translate(286,14) scale(-1,1)">
      <circle cx="10" cy="10" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="18" cy="5" r="5.5" fill="currentColor" opacity="0.4"/>
      <circle cx="5" cy="18" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="10" r="3.5" fill="currentColor" opacity="0.8"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      <path d="M14 16 Q20 28 14 40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
      <ellipse cx="18" cy="30" rx="4" ry="7" fill="currentColor" opacity="0.3" transform="rotate(30 18 30)"/>
    </g>
    <!-- 左下角花束 -->
    <g transform="translate(14,386) scale(1,-1)">
      <circle cx="10" cy="10" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="18" cy="5" r="5.5" fill="currentColor" opacity="0.4"/>
      <circle cx="5" cy="18" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="10" r="3.5" fill="currentColor" opacity="0.8"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      <path d="M14 16 Q20 28 14 40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    </g>
    <!-- 右下角花束 -->
    <g transform="translate(286,386) scale(-1,-1)">
      <circle cx="10" cy="10" r="7" fill="currentColor" opacity="0.5"/>
      <circle cx="18" cy="5" r="5.5" fill="currentColor" opacity="0.4"/>
      <circle cx="5" cy="18" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="10" cy="10" r="3.5" fill="currentColor" opacity="0.8"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      <path d="M14 16 Q20 28 14 40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    </g>
    <!-- 顶边中央花饰 -->
    <g transform="translate(150,16)">
      <circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="0" cy="0" r="2.5" fill="currentColor"/>
      <circle cx="-8" cy="0" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="8" cy="0" r="2" fill="currentColor" opacity="0.4"/>
    </g>
    <!-- 底边中央花饰 -->
    <g transform="translate(150,384)">
      <circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="0" cy="0" r="2.5" fill="currentColor"/>
      <circle cx="-8" cy="0" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="8" cy="0" r="2" fill="currentColor" opacity="0.4"/>
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

// ===== 萌宠（PNG 图片） =====
const PETS = {
  none: null,
  rabbit: `<img src="assets/pet-rabbit.jpg" alt="小兔" />`,
  cat: `<img src="assets/pet-cat.jpg" alt="小猫" />`,
  dog: `<img src="assets/pet-dog.jpg" alt="小狗" />`
};

// ===== 花卉装饰（PNG 图片） =====
const FLOWERS = {
  none: null,
  bouquet: `<img src="assets/flower-bouquet.jpg" alt="花束" />`,
  tulip: `<img src="assets/flower-tulip.jpg" alt="郁金香" />`,
  daisy: `<img src="assets/flower-daisy.jpg" alt="雏菊" />`
};

// ===== 模板配置 =====
const TEMPLATES = [
  {
    id: 'rose',
    name: '法式玫瑰',
    className: 'tpl-rose',
    previewBg: 'linear-gradient(135deg, #faf3e8 0%, #f5e6d3 100%)',
    border: ORNAMENTS.richFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'emerald',
    name: '英伦墨绿',
    className: 'tpl-emerald',
    previewBg: 'linear-gradient(135deg, #2d4a3e 0%, #1e3329 100%)',
    border: ORNAMENTS.richFrame,
    showSeal: true,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'burgundy',
    name: '宫廷酒红',
    className: 'tpl-burgundy',
    previewBg: 'linear-gradient(135deg, #5a1f2a 0%, #722f37 100%)',
    border: ORNAMENTS.richFrame,
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
    border: ORNAMENTS.richFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'gold',
    name: '金箔夜宴',
    className: 'tpl-gold',
    previewBg: 'linear-gradient(135deg, #1a1a1a 0%, #2a2218 100%)',
    border: ORNAMENTS.richFrame,
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
  },
  {
    id: 'lavender',
    name: '薰衣草紫',
    className: 'tpl-lavender',
    previewBg: 'linear-gradient(135deg, #f5f0fa 0%, #e8dff0 100%)',
    border: ORNAMENTS.richFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'ocean',
    name: '海洋蓝调',
    className: 'tpl-ocean',
    previewBg: 'linear-gradient(135deg, #eef5fa 0%, #d4e4f0 100%)',
    border: ORNAMENTS.doubleFrame,
    showSeal: false,
    fontTo: 'serif',
    fontMsg: 'cn'
  },
  {
    id: 'sunset',
    name: '落日橙霞',
    className: 'tpl-sunset',
    previewBg: 'linear-gradient(135deg, #fdf2ec 0%, #f5d8c8 100%)',
    border: ORNAMENTS.richFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  },
  {
    id: 'sakura',
    name: '樱花粉雪',
    className: 'tpl-sakura',
    previewBg: 'linear-gradient(135deg, #fdf5f8 0%, #f8e4ec 100%)',
    border: ORNAMENTS.flowerFrame,
    showSeal: false,
    fontTo: 'hand',
    fontMsg: 'cn'
  }
];
