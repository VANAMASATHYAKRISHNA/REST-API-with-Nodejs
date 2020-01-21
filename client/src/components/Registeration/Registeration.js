import axios from "axios";
const url = 'http://localhost:3000/user/signup';

class Registeration {
    static InsertRegisteration(email, password) {
        return axios.post(url, {
            email: email,
            password: password
        })
    }
    
}
export default Registeration;