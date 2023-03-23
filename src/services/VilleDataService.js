import http from "../http-common";

class VilleDataService {
    getAll() {
    return http.get("/listeVilles");
    }
}
    
export default new VilleDataService();