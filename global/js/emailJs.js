emailjs.init("ZWUTcd1gD1ts5AiLu");

const form = document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Verifique se os elementos do formulário estão sendo capturados corretamente

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
        /* alert("Erro ao enviar email. Tente novamente.") */
      }
    );
  });
