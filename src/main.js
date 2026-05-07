const tablewareSets = [
  {
    name: '经典四件套',
    tag: '单人标准配置',
    items: ['餐刀', '餐叉', '餐勺', '茶匙'],
    scene: '适合日常正餐、便当配餐与小户型餐桌。',
    highlight: '轻巧易收纳，满足一人一餐的基础需求。',
    accent: 'Daily',
  },
  {
    name: '双人轻奢套装',
    tag: '情侣 / 合租优选',
    items: ['餐刀 ×2', '餐叉 ×2', '餐勺 ×2', '甜品勺 ×2'],
    scene: '适合双人晚餐、周末早午餐与咖啡甜品时刻。',
    highlight: '镜面抛光提升餐桌氛围，摆盘更统一。',
    accent: 'Duo',
  },
  {
    name: '家庭十二件套',
    tag: '三至四人家庭',
    items: ['主餐叉 ×4', '主餐勺 ×4', '餐刀 ×4'],
    scene: '适合家庭晚餐、节日聚餐与共享菜品。',
    highlight: '每人三件主餐工具，覆盖中西餐多数场景。',
    accent: 'Family',
  },
  {
    name: '宴客二十四件套',
    tag: '正式聚会配置',
    items: ['餐刀 ×6', '餐叉 ×6', '餐勺 ×6', '茶匙 ×6'],
    scene: '适合朋友聚会、节庆宴请、民宿与小型餐厅。',
    highlight: '统一规格便于摆台，兼顾耐用与高级感。',
    accent: 'Party',
  },
  {
    name: '儿童安全套装',
    tag: '成长练习餐具',
    items: ['短柄叉', '圆头勺', '儿童餐刀'],
    scene: '适合儿童自主进食、学校午餐与亲子餐桌。',
    highlight: '短柄易握，圆润边缘降低误伤风险。',
    accent: 'Kids',
  },
  {
    name: '甜品下午茶套装',
    tag: '精致加购组合',
    items: ['甜品叉 ×4', '咖啡勺 ×4', '黄油刀 ×2'],
    scene: '适合蛋糕、咖啡、果盘与轻食分享。',
    highlight: '小尺寸比例更适合甜品器皿，提升仪式感。',
    accent: 'Tea',
  },
];

const productGrid = document.querySelector('#productGrid');

productGrid.innerHTML = tablewareSets
  .map(
    (set) => `
      <article class="product-card">
        <div class="product-visual" aria-hidden="true">
          <span>${set.accent}</span>
          <div class="utensils">
            <i class="knife"></i>
            <i class="fork"></i>
            <i class="spoon"></i>
          </div>
        </div>
        <div class="product-content">
          <p class="product-tag">${set.tag}</p>
          <h3>${set.name}</h3>
          <p>${set.scene}</p>
          <ul>
            ${set.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <strong>${set.highlight}</strong>
        </div>
      </article>
    `,
  )
  .join('');
