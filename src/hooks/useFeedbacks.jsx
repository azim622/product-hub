import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFeedbacks = () => {
    const { data: feedbacks = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async() => {
            const res = await axios.get('../../public/feedback.json');
            const data = await res.data;
            return data;
        }
    })

    return [ feedbacks, isPending, isError, error, refetch ];
};

export default useFeedbacks;