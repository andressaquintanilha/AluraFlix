const btnAdicionarFilme = document.querySelector("#adicionarFilme");

btnAdicionarFilme.addEventListener("click", () => {
  var filmeFavorito = document.getElementById("filme").value;

  //.endsWith termina com
  //validar a url de uma imagem
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    //igual console.log porem aparece como exibição de erros
    console.error("Endereço de imagem inválido.");
  }

  document.getElementById("filme").value = "";
});

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

//para fazer:
//deletar um filme
//colocar uma legenda para o filme
