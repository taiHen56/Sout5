import http from "../http-common";

class TrajetDataService {
    get(data) {
    return http.get(`/rechercheTrajet`,data);
    }
    create(data) {
    return http.post("/insertTrajet", data);
    }
    // update(id, data) {
    // return http.put(`/updatePersonne/${id}`, data);
    // }
    delete(id) {
    return http.delete(`/deleteTrajet/${id}`);
    }

}
    
export default new TrajetDataService();