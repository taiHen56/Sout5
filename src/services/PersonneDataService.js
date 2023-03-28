import http from "../http-common";

class PersonneDataService {
    getAll() {
    return http.get("/liste/personne");
    }
    get(id) {
    return http.get(`/liste/personne/`+ parseInt(id));
    }
    create(data) {
    return http.post("/insertPersonne",null, data);
    }
    update(id, data) {
    return http.put(`/updatePersonne/`+ parseInt(id),null, data);
    }
    delete(id) {
    return http.delete(`/deletePersonne/`+ parseInt(id));
    }
    getVoiture(id) {
    return http.get(`/liste/personne/voiture/`+ parseInt(id));
    }
}
    
export default new PersonneDataService();