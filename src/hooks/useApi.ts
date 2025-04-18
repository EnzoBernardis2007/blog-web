import { useState } from 'react'
import api from '../services/api'

export const useApi = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const request = async <T,>(method: 'get' | 'post', url: string, data?: any) => {
        setLoading(true)
        try {
            const response = await api[method]<T>(url, data)
            return response.data
        } catch (err) {
            setError('Erro na requisição')
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, request }
}