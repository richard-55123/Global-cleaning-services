import type { AuthResponse, LoginPayload } from "../types/loginTypes"
import api from "./api"


export const loginService = async (
    payload: LoginPayload
): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>(
        "/invest/login",
        payload
    )
    return data
}
