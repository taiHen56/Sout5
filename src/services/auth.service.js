import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/';

class AuthService {
    login(user) {
        console.log(user.username)
        return axios
            .post(API_URL + 'login', null, {
                params: {
                    username: user.username,
                    pwd: user.password
                }
                // username: user.username,
                // password: user.password
            }).then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    
                    console.log(response.data.id_user)
                    console.log(response.data.token)
                     axios.get(API_URL + 'liste/personne/user/' + parseInt(response.data.id_user), {
                            headers: {
                                token: response.data.token
                            }
                        })
                        .then(personResponse => {
                            if (personResponse.data.nom) {
                                // User has a related Person entity in the database
                                console.log("tas un truc")
                                localStorage.setItem('person', JSON.stringify(personResponse.data));
                            }else{
                                console.log("ya rien truc")
                            }
                        });
                }else {
  return Promise.reject(new Error(response.data));
}
                console.log(user.username)
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'register', null, {
            params: {
                username: user.username,
                pwd: user.password
            }
        });
    }
}
export default new AuthService();