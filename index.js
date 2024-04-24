function afficherEmail(nom, email, message) {
  let mailto = `mailto:${email}?subject=
  Projet collaboratif pour Harini Kandauda=
  Bonjour je m'appelle ${nom}. 
  Voici mon message : ${message}`;
  location.href = mailto;
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let baliseNom = document.getElementById("nom");
  let baliseEmail = document.getElementById("email");
  let baliseMessage = document.getElementById("message");
  let nom = baliseNom.value;
  let email = baliseEmail.value;
  let message = baliseMessage.value;
  console.log("nom : " + nom, "email : " + email, "message : " + message);
  afficherEmail(nom, email, message);
  baliseNom.value = "";
  baliseEmail.value = "";
  baliseMessage.value = "";
});
