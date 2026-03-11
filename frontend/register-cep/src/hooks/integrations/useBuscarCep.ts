import { api } from "../../api"
import type { CepResponse } from "../../types/Usuario.Type"

export const useBuscarCep = () => {
    return useMutationCep({
        mutationFn: async (cep: string) =>{
            return await api.get<CepResponse>(`/buscarCep/${cep}`)
        }
    })
}