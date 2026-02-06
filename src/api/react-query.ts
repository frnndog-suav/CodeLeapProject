import { QueryClient } from "@tanstack/react-query";

const DEFAULT_STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const REACT_QUERY_CLIENT = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            retryOnMount: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: DEFAULT_STALE_TIME,
        },
    },
});
