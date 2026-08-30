const projects = [
  {
    title: "Todo App",
    description: "할 일을 추가하고 관리하는 투두 리스트 앱",
    icon: "✅",
    link: "my-todoo-app/index.html",
  },
  {
    title: "환율 변환기",
    description: "실시간 환율로 통화를 변환하는 앱",
    icon: "💱",
    link: "fx-converter/index.html",
  },
  {
    title: "스네이크 게임",
    description: "키보드로 조작하는 클래식 스네이크 게임",
    icon: "🐍",
    link: "snake-game/index.html",
  },
];

const grid = document.getElementById("project-grid");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.link;

  card.innerHTML = `
    <span class="card-icon">${project.icon}</span>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <span class="card-link">바로가기 →</span>
  `;

  grid.appendChild(card);
});
