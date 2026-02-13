export const ENDPOINTS_DATA: Record<string, any> = {
  create: {
    title: "Criar uma Conta",
    description:
      "Para utilizar todas as rotas privadas da API, é necessário criar uma conta na rota /POST e obter o token de acesso gerado.",
    alert:
      "Guarde esse token para usar no header da sua requisição toda vez que for acessar uma rota privada",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/register",
    exampleResponse: `{
      "name": "Seu Nome",
      "username": "seu_usuario",
      "email": "teste@email.com",
      "password": "senha_segura_123",
      "displayName": "Seu Nome Exibição"
    }`,
  },
  login: {
    title: "Realizar Login",
    description:
      "Agora que sua conta foi criada, precisamos logar nela para que todas as rotas privadas da API possam ser acessadas. Por meio da rota /POST, insira o email e o token gerado no passo anterior.",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/login",
    exampleResponse: `
    {
      "email": "teste@email.com",
      "password": "senha_segura_123"
    }

    ------ resposta do servidor ------

    {
      "message": "Login realizado!",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "65b2f...",
        "username": "leonardo_dev"
      }
    }
    `,
  },
  aplicatte: {
    title: "Como usar o Token (Bearer Token)",
    alert:
      "Se você não enviar o token ou ele estiver expirado, a API retornará um erro 401 Unauthorized.",
    description:
      "Para acessar rotas como /feed ou /users, você deve incluir o token no cabeçalho de todas as requisições HTTP:",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/{feed or users}",
    exampleResponse: `
    {
      method: "GET",
      headers: {
        Authorization: "Bearer token",
    }`,
  },
  users: {
    title: "Usuários",
    description:
      "A Lista de usuários permite visualizar todos os usuários cadastrados no sistema, organizando-os de forma dinâmica com a implementação de paginação e busca. Você também pode utilizar filtros e paginação para deixar a busca mais dinâmica",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/users",
    exampleResponse: `{
  id: '6979259b8df745b62e1af58c',
  username: 'briana.cummerata78',
  email: 'Briana.Cummerata51@yahoo.com',
  password: 'password123',
  displayName: 'Briana Cummerata',
  bio: 'Voro patrocinor condico.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/91331020',
  createdAt: '2025-08-29T11:51:20.862Z'
}`,
  },
  feed: {
    title: "Feed Global",
    description:
      "Retorna o feed personalizado (apenas de quem o seu usuário segue)",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/posts",
    exampleResponse: `{
  "status": "success",
  "message": "Produto criado com sucesso"
}`,
  },
  interagir: {
    title: "Interagir (Seguir e Ver Feed Próprio)",
    description:
      "Agora o sistema profissional brilha. Vamos seguir alguém e ver como o feed muda. Os usuários podem notar como seu fluxo de informações se altera com a inclusão de novas postagens das pessoas que estão seguindo.",
    method: "POST",
    path: "https://fake-social-media-api.onrender.com/follow",
    exampleResponse: `{
  "followerId": "SEU_ID", 
  "followingId": "ID_DE_ALGUEM_DA_LISTA"
}`,
  },
  personalizeFeed: {
    title: "Ver seu Feed Personalizado",
    description: "Esta rota só mostra posts de quem você segue.",
    method: "GET",
    path: "https://fake-social-media-api.onrender.com/feed/SEU_ID",
    exampleResponse: `{
    "id": "6979259b8df745b62e1af59f",
    "content": "CONTEUDO_DA_POSTAGEM",
    "imageUrl": "https://picsum.photos/seed/FLsuSrdNTz/134/3717",
    "createdAt": "2099-99-99T20:46:59.742Z",
    "authorId": "6979259b8df745b62e1af532",
    "author": {
      "username": "NOME_DO_USUARIO",
      "displayName": "NOME DO USUARIO"
    }
  }
  
  // outros posts...,`,
  },
};
