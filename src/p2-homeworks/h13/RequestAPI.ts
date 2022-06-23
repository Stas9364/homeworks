import axios from "axios";


export const createDataApi = {
    create(val: boolean) {
        return axios.post(
            `https://neko-cafe-back.herokuapp.com/auth/test`,
            {body: {success: val}}
        );
    }
};
