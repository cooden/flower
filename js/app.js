// ===== 状态管理 =====
const state = {
  festivalId: 'flower',
  templateId: 'bouquet',
  pet: 'none',
  flower: 'none',
  to: '',
  message: '',
  from: ''
};

// ===== DOM 元素 =====
const $ = (id) => document.getElementById(id);
const cardEl = $('card');

// ===== 工具函数 =====
function getFestival() {
  return FESTIVALS.find(f => f.id === state.festivalId);
}

function getTemplate() {
  return TEMPLATES.find(t => t.id === state.templateId);
}

function showToast(msg, duration = 1800) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== 渲染节日标签 =====
function renderFestivalTabs() {
  const container = $('festivalTabs');
  container.innerHTML = FESTIVALS.map(f => `
    <div class="festival-tab ${f.id === state.festivalId ? 'active' : ''}" data-id="${f.id}">
      <span class="emoji">${f.emoji}</span>
      <span>${f.name}</span>
    </div>
  `).join('');

  container.querySelectorAll('.festival-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.festivalId = tab.dataset.id;
      const fest = getFestival();
      state.message = fest.messages[Math.floor(Math.random() * fest.messages.length)];
      $('inputMsg').value = state.message;
      renderFestivalTabs();
      renderCard();
    });
  });
}

// ===== 渲染模板选择 =====
function renderTemplateGrid() {
  const container = $('templateGrid');
  container.innerHTML = TEMPLATES.map(t => `
    <div class="template-item ${t.id === state.templateId ? 'active' : ''}" data-id="${t.id}">
      <div class="tmpl-preview" style="background:${t.previewBg}">
        <span style="font-family:'Playfair Display',serif;font-style:italic;letter-spacing:1px;">${t.name}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.template-item').forEach(item => {
    item.addEventListener('click', () => {
      state.templateId = item.dataset.id;
      renderTemplateGrid();
      renderCard();
    });
  });
}

// ===== 渲染萌宠选择 =====
function renderPetSelector() {
  const container = $('petSelector');
  container.querySelectorAll('.pet-item').forEach(item => {
    item.classList.toggle('active', item.dataset.pet === state.pet);
    item.addEventListener('click', () => {
      state.pet = item.dataset.pet;
      renderPetSelector();
      renderCard();
    });
  });
}

// ===== 渲染花卉选择 =====
function renderFlowerSelector() {
  const container = $('flowerSelector');
  container.querySelectorAll('.pet-item').forEach(item => {
    item.classList.toggle('active', item.dataset.flower === state.flower);
    item.addEventListener('click', () => {
      state.flower = item.dataset.flower;
      renderFlowerSelector();
      renderCard();
    });
  });
}

// ===== 渲染贺卡 =====
function renderCard() {
  const fest = getFestival();
  const tmpl = getTemplate();

  const toText = state.to || '致 最亲爱的你';
  const msgText = state.message || fest.messages[0];
  const fromText = state.from ? `—— ${state.from}` : '—— 爱你的我';

  const isEnglish = /^[a-zA-Z\s\d\W]+$/.test(msgText.trim()) && !/[\u4e00-\u9fa5]/.test(msgText);
  const msgClass = tmpl.fontMsg === 'en' || isEnglish ? 'en' : '';

  // 萌宠
  const petSvg = PETS[state.pet] || '';
  const petHtml = petSvg ? `<div class="card-pet">${petSvg}</div>` : '';

  // 花卉装饰
  const flowerSvg = FLOWERS[state.flower] || '';
  const flowerHtml = flowerSvg ? `<div class="card-flower">${flowerSvg}</div>` : '';

  cardEl.className = `card ${tmpl.className}`;
  cardEl.innerHTML = `
    <div class="card-inner">
      ${tmpl.border ? `<div class="card-border" style="color:${fest.color}">${tmpl.border}</div>` : ''}
      ${flowerHtml}
      <div class="card-top-ornament">${ORNAMENTS.topOrnament}</div>
      <div class="card-festival">${fest.en}</div>
      <div class="card-to" style="font-family:${getFontFamily(tmpl.fontTo)}">${escapeHtml(toText)}</div>
      <div class="card-divider">${ORNAMENTS.divider}</div>
      <div class="card-message ${msgClass}">${escapeHtml(msgText)}</div>
      <div class="card-divider">${ORNAMENTS.divider}</div>
      <div class="card-from" style="font-family:${getFontFamily(tmpl.fontTo)}">${escapeHtml(fromText)}</div>
      <div class="card-bottom-ornament">${ORNAMENTS.topOrnament}</div>
      ${petHtml}
    </div>
    ${tmpl.showSeal ? `<div class="wax-seal">${ORNAMENTS.waxSeal}</div>` : ''}
  `;
}

function getFontFamily(style) {
  if (style === 'hand') return "'Ma Shan Zheng', cursive";
  if (style === 'serif') return "'Playfair Display', 'Noto Serif SC', serif";
  return "'Noto Serif SC', serif";
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 随机灵感 =====
function randomInspiration() {
  const fest = getFestival();
  state.templateId = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)].id;
  state.message = fest.messages[Math.floor(Math.random() * fest.messages.length)];
  // 随机萌宠
  const petKeys = Object.keys(PETS);
  state.pet = petKeys[Math.floor(Math.random() * petKeys.length)];
  // 随机花卉
  const flowerKeys = Object.keys(FLOWERS);
  state.flower = flowerKeys[Math.floor(Math.random() * flowerKeys.length)];

  $('inputMsg').value = state.message;

  renderTemplateGrid();
  renderPetSelector();
  renderFlowerSelector();
  renderCard();

  cardEl.style.transform = 'scale(0.97)';
  setTimeout(() => { cardEl.style.transform = 'scale(1)'; }, 200);

  showToast('✨ 灵感已送达');
}

// ===== 下载贺卡 =====
async function downloadCard() {
  showToast('正在生成高清图片…', 3000);

  try {
    const canvas = await html2canvas(cardEl, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false
    });

    const link = document.createElement('a');
    const fest = getFestival();
    link.download = `${fest.name}_贺卡_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('🎉 贺卡已保存到相册');
  } catch (err) {
    console.error(err);
    showToast('保存失败，请截图保存');
  }
}

// ===== 事件绑定 =====
function bindEvents() {
  $('inputTo').addEventListener('input', (e) => {
    state.to = e.target.value;
    renderCard();
  });

  $('inputMsg').addEventListener('input', (e) => {
    state.message = e.target.value;
    renderCard();
  });

  $('inputFrom').addEventListener('input', (e) => {
    state.from = e.target.value;
    renderCard();
  });

  $('btnRandom').addEventListener('click', randomInspiration);
  $('btnDownload').addEventListener('click', downloadCard);
}

// ===== 初始化 =====
function init() {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      renderCard();
    });
  }

  const fest = getFestival();
  state.message = fest.messages[0];
  $('inputMsg').value = state.message;

  renderFestivalTabs();
  renderTemplateGrid();
  renderPetSelector();
  renderFlowerSelector();
  renderCard();
  bindEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
