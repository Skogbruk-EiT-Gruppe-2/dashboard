import { FiltersState } from '../redux/filtersSlice'

const API_URL = import.meta.env.VITE_API_URL

type Observation = {
    timestamp: string
    latitude: number
    longitude: number
    value: {
        id: string
        name: string
        isRedlisted: boolean
    }
}

export const getObservations = async (filters: FiltersState) => {
    const res = await fetch(`${API_URL}/observations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = (await res.json()) as Observation[]
    data satisfies Observation[] // Ensure that the data is of the correct type, throws an error if not
    return data
}
