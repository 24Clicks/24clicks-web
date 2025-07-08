document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const startScreen = document.getElementById("start-screen");
  const mainContent = document.getElementById("main-content");
  const musicBar = document.getElementById("music-bar");
  const bgMusic = document.getElementById("bg-music");
  const clickSound = document.getElementById("click-sound");
  const muteBtn = document.getElementById("mute-btn");

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    mainContent.style.display = "block";
    musicBar.style.display = "flex";
    bgMusic.play();
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  muteBtn.addEventListener("click", () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
  });
});

function playClick() {
  const clickSound = document.getElementById("click-sound");
  clickSound.play();
}
