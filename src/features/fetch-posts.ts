
import { useQuery } from "@tanstack/react-query";
import { httpRequest } from "@/api/http-request";

const QUERY_CACHE_KEY = "@codeleap-fetch-posts";

export const DEFAULT_ITEMS_PER_PAGE = 5;

export function useFetchPosts() {

    const {
        data,
        isError,
        isLoading,
        isFetched,
        isPending,
        isFetching,
    } = useQuery({
        queryKey: [
            QUERY_CACHE_KEY,
        ],
        queryFn: async () => {
            return await httpRequest({
                method: "GET",
                url: "careers/",            
            });
        },
    });

    return {
        data,
        isError,
        isLoading,
        isFetched,
        isPending,
        isFetching,
    };
}

export { QUERY_CACHE_KEY as LIST_EDITIONS_CACHE };

