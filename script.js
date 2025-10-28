/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  // Botão de Iniciar Jornada
  const startButton = document.getElementById("startButton");
  if (startButton) {
    startButton.addEventListener("click", () => {
      console.log("Jornada iniciada!");
      alert("Começando a jornada!");

      // (Isso é apenas um exemplo local, não salva os dados)
      // updateStats(16, 8, 1300, 4, 5);
    });
  }

  // --- Lógica de Atualização (Exemplo) ---

  // IDs dos elementos que queremos atualizar
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const lessonsCount = document.getElementById("lessons-count");
  const achievementsCount = document.getElementById("achievements-count");
  const xpTotal = document.getElementById("xp-total");

  /**
   * Função de exemplo para atualizar a UI com novos dados.
   * @param {number} lessons - Total de lições completas.
   * @param {number} achievements - Total de conquistas.
   * @param {number} xp - Total de XP.
   * @param {number} dailyCurrent - Lições diárias feitas.
   * @param {number} dailyGoal - Meta de lições diárias.
   */
  function updateStats(lessons, achievements, xp, dailyCurrent, dailyGoal) {
    if (lessonsCount) {
      lessonsCount.textContent = lessons;
    }
    if (achievementsCount) {
      achievementsCount.textContent = achievements;
    }
    if (xpTotal) {
      // Formata o número para ter o ponto (ex: 1.300)
      xpTotal.textContent = xp.toLocaleString("pt-BR");
    }
    if (progressText) {
      progressText.textContent = `${dailyCurrent}/${dailyGoal} lições`;
    }
    if (progressBar) {
      const percentage = (dailyCurrent / dailyGoal) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  }
});
