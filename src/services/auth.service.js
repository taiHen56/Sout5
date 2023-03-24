import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                username: user.username,
                password: user.password
            }).then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    axios.get(API_URL + 'liste/personne/user/' + response.data.id_user)
                        .then(personResponse => {
                            if (personResponse.data.nom) {
                                // User has a related Person entity in the database
                                localStorage.setItem('person', JSON.stringify(personResponse.data));
                            }
                    });
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'register', {
            username: user.username,
        
            password: user.password
        });
    }
}
export default new AuthService();