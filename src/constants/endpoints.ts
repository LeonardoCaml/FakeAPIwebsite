export const ENDPOINTS_DATA: Record<string, any> = {
  users: {
    title: "Listar Usuários",
    description:
      "Retorna todos os usuários cadastrados com suporte a paginação e busca. Use o parâmetro search para filtrar por username ou displayName.",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/users",
    exampleResponse: `[
  {
    "id": "6979259b8df745b62e1af58c",
    "username": "briana.cummerata78",
    "email": "briana@yahoo.com",
    "displayName": "Briana Cummerata",
    "bio": "Voro patrocinor condico.",
    "avatarUrl": "https://avatars.githubusercontent.com/u/91331020",
    "createdAt": "2025-08-29T11:51:20.862Z"
  }
  // ... outros usuários
]`,
    params: [
      { name: "page", type: "integer", required: false, desc: "Número da página (padrão: 1)" },
      { name: "limit", type: "integer", required: false, desc: "Itens por página (padrão: 10)" },
      { name: "search", type: "string", required: false, desc: "Filtra por username ou displayName" },
    ],
  },
  "user-profile": {
    title: "Perfil do Usuário",
    description:
      "Retorna o perfil completo de um usuário pelo username, incluindo bio, avatar, contagem de seguidores/seguindo e os posts mais recentes.",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/users/:username",
    exampleResponse: `{
  "id": "6979259b8df745b62e1af58c",
  "username": "leonardo_dev",
  "displayName": "Leo Camelo",
  "bio": "Desenvolvedor full stack.",
  "avatarUrl": "https://example.com/avatar.jpg",
  "createdAt": "2026-03-30T...",
  "_count": { "followers": 42, "following": 17 },
  "posts": [
    { "id": "...", "content": "...", "createdAt": "..." }
  ]
}`,
    params: [
      { name: "username", type: "string", required: true, desc: "Username do usuário (parâmetro de rota)" },
    ],
  },
  "create-user": {
    title: "Criar Usuário",
    description:
      "Cadastra um novo usuário. O username deve ter entre 3 e 20 caracteres. O e-mail deve ser válido e único. O displayName é opcional (mínimo 2 caracteres).",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/users",
    exampleResponse: `// Corpo da requisição:
{
  "username": "leonardo_dev",
  "email": "leo@email.com",
  "displayName": "Leo Camelo"
}

// Resposta (201):
{
  "message": "Usuário criado com sucesso!",
  "user": {
    "id": "65b2f...",
    "username": "leonardo_dev",
    "email": "leo@email.com",
    "displayName": "Leo Camelo",
    "createdAt": "2026-03-30T..."
  }
}`,
    params: [
      { name: "username", type: "string", required: true, desc: "Mínimo 3 e máximo 20 caracteres. Deve ser único." },
      { name: "email", type: "string", required: true, desc: "E-mail válido. Deve ser único." },
      { name: "displayName", type: "string", required: false, desc: "Nome de exibição. Mínimo 2 caracteres." },
    ],
  },
  "update-user": {
    title: "Atualizar Usuário",
    description:
      "Atualiza dados de perfil. Apenas displayName, bio e avatarUrl são aceitos. Campos como email, username e password são ignorados pela validação.",
    method: "PUT",
    path: "https://fake-social-media-api.onrender.com/users/:id",
    exampleResponse: `// Corpo da requisição:
{
  "displayName": "Leo Camelo",
  "bio": "Desenvolvedor full stack.",
  "avatarUrl": "https://example.com/avatar.jpg"
}

// Resposta (200):
{
  "id": "65b2f...",
  "displayName": "Leo Camelo",
  "bio": "Desenvolvedor full stack.",
  "avatarUrl": "https://example.com/avatar.jpg"
}`,
    params: [
      { name: "id", type: "string", required: true, desc: "ID do usuário (parâmetro de rota)" },
      { name: "displayName", type: "string", required: false, desc: "Mínimo 2 caracteres." },
      { name: "bio", type: "string", required: false, desc: "Máximo 160 caracteres." },
      { name: "avatarUrl", type: "string (URL)", required: false, desc: "URL válida da imagem de avatar." },
    ],
  },
  "delete-user": {
    title: "Deletar Usuário",
    description:
      "Remove a conta do usuário e todos os dados vinculados (posts e follows). Retorna 204 sem corpo.",
    method: "DELETE",
    path: "https://fake-social-media-api.onrender.com/users/:id",
    exampleResponse: `// Nenhum corpo necessário.
// Resposta: 204 No Content`,
    params: [
      { name: "id", type: "string", required: true, desc: "ID do usuário (parâmetro de rota)" },
    ],
  },
  feed: {
    title: "Feed Global",
    description:
      "Retorna todos os posts de todos os usuários, ordenados pelo mais recente primeiro.",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/posts",
    exampleResponse: `[
  {
    "id": "6979259b8df745b62e1af59f",
    "content": "Meu primeiro post na rede!",
    "createdAt": "2026-05-01T20:46:59.742Z",
    "authorId": "6979259b8df745b62e1af532",
    "author": {
      "username": "leonardo_dev",
      "displayName": "Leo Camelo"
    }
  }
  // ... outros posts
]`,
    params: [],
  },
  "create-post": {
    title: "Criar Post",
    description:
      "Cria um novo post vinculado a um usuário existente. O conteúdo pode ter no máximo 280 caracteres.",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/posts",
    exampleResponse: `// Corpo da requisição:
{
  "content": "Meu primeiro post na rede!",
  "authorId": "65b2f..."
}

// Resposta (201):
{
  "id": "...",
  "content": "Meu primeiro post na rede!",
  "createdAt": "2026-05-01T...",
  "authorId": "65b2f...",
  "author": {
    "username": "leonardo_dev",
    "displayName": "Leo Camelo"
  }
}`,
    params: [
      { name: "content", type: "string", required: true, desc: "Texto do post. Mínimo 1 e máximo 280 caracteres." },
      { name: "authorId", type: "string", required: true, desc: "ID do usuário autor do post." },
    ],
  },
  follow: {
    title: "Seguir Usuário",
    description:
      "Cria um vínculo de seguidor entre dois usuários. Não é possível seguir o mesmo usuário duas vezes.",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/follow",
    exampleResponse: `// Corpo da requisição:
{
  "followerId": "SEU_ID",
  "followingId": "ID_DE_QUEM_SEGUIR"
}

// Resposta (201):
{
  "followerId": "...",
  "followingId": "..."
}`,
    params: [
      { name: "followerId", type: "string", required: true, desc: "ID do usuário que vai seguir." },
      { name: "followingId", type: "string", required: true, desc: "ID do usuário a ser seguido." },
    ],
  },
  "personalize-feed": {
    title: "Feed Personalizado",
    description:
      "Retorna apenas posts de usuários que o userId segue, ordenados pelo mais recente.",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/feed/:userId",
    exampleResponse: `[
  {
    "id": "6979259b8df745b62e1af59f",
    "content": "Post de alguém que você segue",
    "createdAt": "2026-05-01T20:46:59.742Z",
    "authorId": "...",
    "author": {
      "username": "amigo_dev",
      "displayName": "Amigo Dev"
    }
  }
  // ... outros posts
]`,
    params: [
      { name: "userId", type: "string", required: true, desc: "ID do usuário cujo feed personalizado será retornado (parâmetro de rota)" },
    ],
  },
};
