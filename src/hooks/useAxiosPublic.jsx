import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://admin.refabry.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;