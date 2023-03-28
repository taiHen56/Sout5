import http from "../http-common";

class TrajetDataService {
    getAll() {
    return http.get("/listeTrajet");
    }
    get(data) {
    return http.get(`/rechercheTrajet`,data);
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