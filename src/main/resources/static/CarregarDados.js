const url = "http://localhost:8080/Dados.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("foto").src = data.foto;
    document.getElementById("nome").textContent = data.nome;
    document.getElementById("email").textContent = data.email;
    document.getElementById("telefone").textContent = data.telefone;
    document.getElementById("endereco").textContent = data.endereco;
  })
  .catch(error => console.error(error));
