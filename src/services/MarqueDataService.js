import http from "../http-common";

class MarqueDataService {
    // getAll() {
    // return http.get("/iste/Marque");
    // }
    create(data) {
    return http.post("/insertMarque", data);
    }
    getAll(){
        return http.get("/listeModeles");
    }
   
}
    
export default new MarqueDataService();