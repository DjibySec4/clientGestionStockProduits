//Ces chemin son definis dans les controlleur du serveur


//Nouveau
const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS = {
  // Pr USER
  PRODUITS_URLS : BASE + ':' + PORT + PATH + '/produit',
  USER_URLS:  BASE + ':' + PORT + PATH + '/user',
  // Pr Admin
  USER_CRUD_URL : BASE + ':' + PORT + '/crud_user'
}


//L'ancien
// export const API_URLS = {
//   PRODUITS_URLS : 'http://localhost:8080/api/produit',
//   USER_URLS: 'http://localhost:8080/api/user'
// }
