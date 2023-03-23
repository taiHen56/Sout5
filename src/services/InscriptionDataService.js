import http from "../http-common";

class InscriptionDataService {
    //Tu me diras ce que ça retourne : j'ai zappé hihi
    getAll() {
    return http.get("/listeInscription");
    }
    //Pour avoir les trajets réservés de l'utilisateur
    getUser(data) {
    return http.get(`/listeInscriptionUser`, data);
    }
    //Pour avoir les passagers d'un trajet donnée
    getTrajet(data) {
    return http.get(`/listeInscriptionUser`, data);
    }
    create(data) {
    return http.post("/insertInscription", data);
    }
    delete(data) {
    return http.delete(`/deleteInscription`, data);
    }

}
    
export default new InscriptionDataService();