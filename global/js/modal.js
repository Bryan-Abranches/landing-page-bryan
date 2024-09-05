console.log("start JS");

console.log("start JS");

// Seleciona todos os botões de serviço e modais
const btnModal = document.querySelectorAll(".btn-service");
const modals = document.querySelectorAll(".modal-1");
const btnModalClose = document.querySelectorAll(".modal-close");

// Adiciona o evento de clique para cada botão de serviço
btnModal.forEach((btn, index) => {
  btn.onclick = () => {
    // Abre o modal correspondente ao botão clicado
    modals[index].showModal();
  };
});

// Adiciona o evento de clique para cada botão de fechamento
btnModalClose.forEach((btn) => {
  btn.onclick = () => {
    // Fecha todos os modais abertos
    modals.forEach((modal) => {
      modal.close();
    });
  };
});
