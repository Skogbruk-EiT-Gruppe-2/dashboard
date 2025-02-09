import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from './redux'
import { getObservations } from '../utils/queries'

export const useResults = () => {
    const filters = useAppSelector((state) => state.filters)
    return useQuery({
        queryKey: ['observations', filters],
        queryFn: () => getObservations(filters),
    })
}
