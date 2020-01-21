import axios from "axios";
const logurl = 'http://localhost:3000/user/login';
class Login {
    static login(email, password) {
        return axios.post(logurl, {
            email: email,
            password: password
        })
    }
}
export default Login;