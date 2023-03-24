import http from "../http-common";

class PersonneDataService {
    getAll() {
    return http.get("/liste/personne");
    }
    get(id) {
    return http.get(`/liste/personne/${id}`);
    }
    create(data) {
    return http.post("/insertPersonne", data);
    }
    update(id, data) {
    return http.put(`/updatePersonne/${id}`, data);
    }
    delete(id) {
    return http.delete(`/deletePersonne/${id}`);
    }
    getVoiture(id) {
    return http.get(`/liste/personne/voiture/${id}`);
    }
}
    
export default new PersonneDataService();