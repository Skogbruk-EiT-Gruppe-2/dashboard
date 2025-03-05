import { FiltersState } from '../redux/filtersSlice'

const API_URL = import.meta.env.VITE_API_URL

type Observation = {
    device_imsi: string
    timestamp: string
    latitude?: number
    longitude?: number
    value: {
        classification: string
        is_redlisted: boolean
    }
    file_path: string
}

type Log = {
    _id: string
    type: string
    device: {
        deviceId: string
        collectionId: string
        tags: {
            name: string
        }
        firmware: {
            currentFirmwareId: string
            targetFirmwareId: string
            firmwareVersion: string
            serialNumber: string
            modelNumber: string
            manufacturer: string
            state: string
            stateMessage: string
        }
        config: {
            ciot: {
                imsi: string
                imei: string
            }
        }
        metadata: {
            ciot: {
                gatewayId: string
                allocatedIp: string
                allocatedAt: string
                mcc: number
                mnc: number
                country: string
                network: string
                countryCode: string
                lastUpdate: string
                lastImsi: string
                lastImei: string
            }
        }
        lastGatewayId: string
        lastTransport: string
        lastReceived: string
        lastPayload: string
        enabled: boolean
    }
    payload: string
    received: string
    transport: string
    messageId: string
    gatewayId: string
}

export const getObservations = async (filters: FiltersState) => {
    const relevantFilters = Object.entries(filters).filter(
        ([key, value]) => value !== undefined
    )
    filters = Object.fromEntries(relevantFilters)
    const res = await fetch(
        `${API_URL}/observations/?${new URLSearchParams(
            filters as Record<string, string>
        ).toString()}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    const data = (await res.json()) as Observation[]
    data satisfies Observation[] // Ensure that the data is of the correct type, throws an error if not
    return data
}

export const getLogs = async (page: number, pageSize: number) => {
    const res = await fetch(
        `${API_URL}/logs?page=${page}&pageSize=${pageSize}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    const data = (await res.json()) as Log[]
    data satisfies Log[] // Ensure that the data is of the correct type, throws an error if not
    return data
}
