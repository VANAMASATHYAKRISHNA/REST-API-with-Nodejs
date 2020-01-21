import axios from "axios";
const url = 'http://localhost:3000/user/signup';
const logurl = 'http://localhost:3000/user/login';
class Registeration {
    static InsertRegisteration(email, password) {
        return axios.post(url, {
            email: email,
            password: password
        })
    }
    static login(email, password) {
        return axios.post(logurl, {
            email: email,
            password: password
        })
    }
}
export default Registeration;