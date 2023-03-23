import http from "../http-common";

class MarqueDataService {
    // getAll() {
    // return http.get("/iste/Marque");
    // }
    create(data) {
    return http.post("/insertMarque", data);
    }
   
}
    
export default new MarqueDataService();