import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get('/api/all/product/get');
                const data = await res.data;
                return data.data || [];
            }catch(err){
                console.error(err);
                return [];
            }
        }
    })

    return [ products, isPending, isError, error, refetch ];
};

export default useProducts;