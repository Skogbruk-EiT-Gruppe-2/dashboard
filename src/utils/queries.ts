import { FiltersState } from '../redux/filtersSlice'

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

const mockData: Observation[] = [
    {
        timestamp: '2025-02-09T08:15:30Z',
        latitude: 45.6789,
        longitude: -122.5678,
        value: {
            id: 'B001',
            name: 'Northern Cardinal',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:17:45Z',
        latitude: 45.6823,
        longitude: -122.5692,
        value: {
            id: 'B002',
            name: 'Bald Eagle',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:20:12Z',
        latitude: 45.6795,
        longitude: -122.5701,
        value: {
            id: 'B003',
            name: 'American Robin',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:22:05Z',
        latitude: 45.6801,
        longitude: -122.5713,
        value: {
            id: 'B004',
            name: 'Peregrine Falcon',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:25:33Z',
        latitude: 45.6832,
        longitude: -122.5725,
        value: {
            id: 'B005',
            name: 'Great Horned Owl',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:30:14Z',
        latitude: 45.681,
        longitude: -122.5742,
        value: {
            id: 'B006',
            name: 'Snowy Owl',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:35:47Z',
        latitude: 45.6787,
        longitude: -122.5758,
        value: {
            id: 'B007',
            name: 'Eastern Bluebird',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:40:29Z',
        latitude: 45.6828,
        longitude: -122.5765,
        value: {
            id: 'B008',
            name: 'Red-tailed Hawk',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:45:50Z',
        latitude: 45.6793,
        longitude: -122.5781,
        value: {
            id: 'B009',
            name: 'Wood Thrush',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:50:10Z',
        latitude: 45.6815,
        longitude: -122.5797,
        value: {
            id: 'B010',
            name: 'Scarlet Tanager',
            isRedlisted: false,
        },
    },
]

export const getObservations = async (filters: FiltersState) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return mockData
}
