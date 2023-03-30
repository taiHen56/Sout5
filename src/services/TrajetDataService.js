import http from "../http-common";

class TrajetDataService {
    getAll() {
    return http.get("/listeTrajet");
    }
    get(data) {
    return http.get(`/rechercheTrajet`,data);
    }
    getTrajet(id) {
        return http.get(`/rechercheTrajet/`+ parseInt(id));
        }
    create(data) {
    return http.post("/insertTrajet",null, data);
    }
    // update(id, data) {
    // return http.put(`/updatePersonne/${id}`, data);
    // }
    delete(id) {
    return http.delete(`/deleteTrajet/`+ parseInt(id));
    }

}
    
export default new TrajetDataService();