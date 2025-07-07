function playClick() {
  const clickSound = document.getElementById("click-sound");
  const bgMusic = document.getElementById("bg-music");

  clickSound.currentTime = 0;
  clickSound.play();

  if (bgMusic.paused) {
    bgMusic.play().catch(() => {
      console.log("El navegador bloqueó la reproducción automática.");
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById("start-btn");
  const bgMusic = document.getElementById("bg-music");
  const mainContent = document.getElementById("main-content");
  const startScreen = document.getElementById("start-screen");
  const musicBar = document.getElementById("music-bar");

  startBtn.addEventListener("click", () => {
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {
      alert("Tu navegador bloqueó la reproducción automática.");
    });

    startScreen.style.display = "none";
    mainContent.style.display = "block";
    musicBar.style.display = "flex";
  });
});
