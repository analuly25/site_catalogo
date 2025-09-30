function showDetails(id) {
  // Esconde todos os detalhes
  document.querySelectorAll(".detail").forEach(det => det.classList.add("hidden"));

  // Mostra apenas o detalhamento escolhido
  document.getElementById(id).classList.remove("hidden");
}
