import axios from "axios";
let user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
baseURL: 'http://127.0.0.1:8000/',
    headers: {
        "Content-type": "application/json" ,
        "token" : user.token
    }
    });