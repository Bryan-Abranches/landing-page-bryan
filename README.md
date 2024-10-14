# Portfólio de Bryan Abranches

## Introdução

Este projeto é um portfólio pessoal criado para exibir as habilidades e experiências de Bryan Abranches como desenvolvedor web. O portfólio foi desenvolvido utilizando HTML, CSS e JavaScript, e conta com um formulário de contato funcional integrado ao EmailJS.

## Estrutura do Projeto

### Diretórios e Arquivos

```
/global
  /css
    - btns.css
    - style.css
    - animation.css
  /js
    - emailJs.js
    - modal.js
    - menuMobile.js
/assets
  /img
    - delicia-removebg-preview.png
    - user.jpg
    - (outras imagens do projeto)
global.html
```

### Principais Componentes

- **HTML**: Estrutura básica do portfólio, com seções como Home, Projetos, Sobre e Contato.
- **CSS**: Estilos aplicados para garantir um design responsivo e atraente.
- **JavaScript**: Funcionalidades dinâmicas, como manipulação de modais e controle do menu mobile.
- **EmailJS**: Serviço utilizado para enviar mensagens diretamente do formulário de contato.

## Funcionalidades

- **Navegação**: Links âncoras que permitem acesso rápido às diferentes seções do portfólio.
- **Formulário de Contato**: Permite que os visitantes enviem mensagens, utilizando EmailJS para gerenciamento de envios.
- **Responsividade**: Design adaptável que se ajusta a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **EmailJS**
- **Fontes do Google**: Poppins

## Como Usar

1. **Clone o repositório**: Use `git clone <URL do repositório>` para obter uma cópia local do projeto.
2. **Abra o arquivo `global.html`** em um navegador para visualizar o portfólio.
3. **Teste o formulário de contato** preenchendo os campos e enviando uma mensagem. Verifique o console do navegador para depurar qualquer problema.

## Funcionalidades

### 1. Navegação

A navegação do portfólio é composta por links que direcionam para as seções de **Home**, **Projetos**, **Sobre** e **Contato**. Existe uma versão mobile que se expande ao clicar no botão de menu.

### 2. Modal de Serviços

Os botões de serviço abrem modais que apresentam mais informações sobre as habilidades de Bryan. O código para manipulação desses modais é:

```javascript
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
```

### 3. Menu Mobile

O menu mobile permite que o usuário visualize as opções de navegação em dispositivos menores. O código relacionado à exibição do menu é:

```javascript
const btnMobile = document.getElementById("btn-mobile");
const navMobileOpen = document.querySelector(".nav-mobile-open");

function menuShow() {
  if (navMobileOpen.classList.contains("open")) {
    navMobileOpen.classList.remove("open");
  } else {
    navMobileOpen.classList.add("open");
  }
}
```

### 4. Envio de Email com EmailJS

O formulário de contato utiliza a biblioteca EmailJS para enviar mensagens. O código para o envio de email é:

```javascript
emailjs.init("ZWUTcd1gD1ts5AiLu");

const form = document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = this.user_name.value; // 'user_name' deve estar definido como 'name' no HTML
    const userEmail = this.user_email.value; // 'user_email' deve estar definido como 'name' no HTML
    const message = this.message.value; // 'message' deve estar definido como 'name' no HTML

    console.log(userName, userEmail, message); // Exibe os valores no console

    const serviceID = "service_40ay2he";
    const templateID = "template_xttr3po";

    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log(
          "Email enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Email enviado com sucesso!");
      },
      (error) => {
        console.error("Erro ao enviar email:", error);
      }
    );
  });
```

## Considerações Finais

O portfólio não apenas destaca as habilidades e projetos de Bryan, mas também oferece uma experiência de usuário fluida e interativa. Com as funcionalidades responsivas e a integração do EmailJS, o projeto é um excelente exemplo de um portfólio moderno e funcional.

Sinta-se à vontade para explorar e entrar em contato caso tenha interesse em discutir sobre desenvolvimento web ou colaborações futuras!

## Contato

Para mais informações ou dúvidas, entre em contato:

- Email: bryanabranches@gmail.com
- LinkedIn: [Bryan Abranches](https://www.linkedin.com/in/bryan-abranches/)
- GitHub: [Bryan-Abranches](https://github.com/Bryan-Abranches)
