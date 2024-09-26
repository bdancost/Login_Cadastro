// (CRUD) Javascript Básico

const miniTwitter = {
  usuarios: [
    {
      username: "omariosouto",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "omariosouto",
      content: "Meu primeiro twitter",
    },
  ],
};

// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content,
  });
}
criaPost({ owner: "omariosouto", content: "Segundo twitter" });
criaPost({ owner: "omariosouto", content: "Terceiro twitter" });
//console.log(miniTwitter.posts)

// READ
function pegaPost() {
  return miniTwitter.posts;
}
console.log(pegaPost());

// UPDATE
function atualizarContentDoPost(id, novoConteudo) {
  const postQueVaiSerAtualizado = pegaPost().find((post) => {
    return post.id === id;
  });
  console.log(postQueVaiSerAtualizado);
  postQueVaiSerAtualizado.content = novoConteudo;
}
atualizarContentDoPost(1, "Novo conteúdo do post");
console.log(pegaPost());

//DELETE
function apagaPost(id) {
  const listaDePostsAtualizada = pegaPost().filter((postAtual) => {
    return postAtual.id !== id;
  });
  miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPost()); // []
