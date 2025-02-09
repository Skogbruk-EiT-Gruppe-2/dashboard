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
        latitude: 63.37653,
        longitude: 10.61159,
        value: {
            id: 'B001',
            name: 'Northern Cardinal',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:17:45Z',
        latitude: 63.365,
        longitude: 10.65,
        value: {
            id: 'B002',
            name: 'Bald Eagle',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:20:12Z',
        latitude: 63.3558,
        longitude: 10.6905,
        value: {
            id: 'B003',
            name: 'American Robin',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:22:05Z',
        latitude: 63.3689,
        longitude: 10.7201,
        value: {
            id: 'B004',
            name: 'Peregrine Falcon',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:25:33Z',
        latitude: 63.3446,
        longitude: 10.7604,
        value: {
            id: 'B005',
            name: 'Great Horned Owl',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:30:14Z',
        latitude: 63.3607,
        longitude: 10.6702,
        value: {
            id: 'B006',
            name: 'Snowy Owl',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:35:47Z',
        latitude: 63.3743,
        longitude: 10.7123,
        value: {
            id: 'B007',
            name: 'Eastern Bluebird',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:40:29Z',
        latitude: 63.3578,
        longitude: 10.6806,
        value: {
            id: 'B008',
            name: 'Red-tailed Hawk',
            isRedlisted: false,
        },
    },
    {
        timestamp: '2025-02-09T08:45:50Z',
        latitude: 63.3725,
        longitude: 10.7502,
        value: {
            id: 'B009',
            name: 'Wood Thrush',
            isRedlisted: true,
        },
    },
    {
        timestamp: '2025-02-09T08:50:10Z',
        latitude: 63.3489,
        longitude: 10.7354,
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
