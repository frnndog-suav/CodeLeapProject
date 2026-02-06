import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./axios";

export async function httpRequest<
    IResponse,
    IBody = unknown,
    IParams = unknown,
>(
    config: AxiosRequestConfig<IBody> & { params?: IParams },
): Promise<IResponse> {
    const newConfig = { ...config };

    const response = await api.request<
        IResponse,
        AxiosResponse<IResponse>,
        IBody
    >(newConfig);

    return response.data;
}
