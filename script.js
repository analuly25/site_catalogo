function showDetails(id) {
  // Esconde todos os detalhes
  document.querySelectorAll(".detail").forEach(det => det.classList.add("hidden"));

  // Mostra apenas o detalhamento escolhido
  const detail = document.getElementById(id);
  detail.classList.remove("hidden");

  // Faz a página rolar até o detalhe
  detail.scrollIntoView({ behavior: "smooth", block: "start" });

}

function openYoutube(url) {
  window.open(url, "_blank"); // abre em nova aba
}
