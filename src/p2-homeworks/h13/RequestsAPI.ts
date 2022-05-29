import axios from "axios";


export const RequestsAPI = {
    postRequest(checkbox: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkbox})
    }
}

