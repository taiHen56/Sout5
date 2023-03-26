export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // pour Spring Boot back - end
        return {
            'token': user.token
        }; // pourNode.js Express back - end
    } else {
        return {};
    }
}