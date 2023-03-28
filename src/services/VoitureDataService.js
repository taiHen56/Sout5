import http from "../http-common";

class VoitureDataService {
    getAll() {
    return http.get("/listeVoiture");
    }
    create(data) {
    return http.post("/insertVoiture",null, data);
    }
    delete(id) {
    return http.delete(`/deleteVoiture/`+parseInt(id) );
    }
}
    
export default new VoitureDataService();