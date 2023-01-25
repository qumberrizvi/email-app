import {endpoints} from "../constants/endpoints";

export const apiService = {
    notify: () => axios.get(endpoints.notify),
};
