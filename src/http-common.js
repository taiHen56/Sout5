import axios from "axios";
let user = JSON.parse(localStorage.getItem('user'));
let token;
if (user && user.token) {
    token = user.token
    }else{
        token=null;
    }
console.log(token)
export default axios.create({
baseURL: 'http://127.0.0.1:8000/',
    headers: {
        "Content-type": "application/json" ,
        "token" : token
    }
    });