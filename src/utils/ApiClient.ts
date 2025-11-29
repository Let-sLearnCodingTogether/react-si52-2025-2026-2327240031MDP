import axios from "axios";

const ApiClient = axios.create({
    baseURL : "http://localhost:3000/api",
        headers : {
            "Accept" : "application/json",
            "Authorization" : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjkyYWNjYTVhNjJhMzFlYjM0ZTEyMDA4IiwidXNlcm5hbWUiOiJPd2VuIiwiaWF0IjoxNzY0NDEyNjEwLCJleHAiOjE3NjQ0MTk4MTB9.ZFYaYeChbBti4QqFUknFl8Ozb_w9Xkwsaof7ojjGpA8"
        }
})

export default ApiClient