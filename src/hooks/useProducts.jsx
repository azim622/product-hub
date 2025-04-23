import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (sortByPrice = false) => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ["products", sortByPrice],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get('/api/all/product/get');
                const data = await res.data;
                let result = data?.data?.data || [];

                // Sort products by price if sortByPrice is true
                if (sortByPrice) {
                    result = result.sort((a, b) => a.price - b.price); // Ascending order
                }

                return result;
            }catch(err){
                console.error(err);
                return [];
            }
        }
    })

    return [ products, isPending, isError, error, refetch ];
};

export default useProducts;