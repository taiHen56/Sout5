import http from "../http-common";

class VoitureDataService {
    getAll() {
    return http.get("/listeVoiture");
    }
    create(data) {
    return http.post("/insertVoiture", data);
    }
    delete(id) {
    return http.delete(`/deleteVoiture/${id}`);
    }
}
    
export default new VoitureDataService();