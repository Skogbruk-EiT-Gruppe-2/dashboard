import { Rss } from 'lucide-react'
import InfoBox from '../InfoBox'
import ListElement from '../ListElement'
import { getLogs } from '../../utils/queries'
import { useQuery } from '@tanstack/react-query'

export default function LogsDisplay() {
    const { data: logs, isLoading: isLoadingLogs } = useQuery({
        queryKey: ['logs', 1, 10],
        queryFn: () => getLogs(1, 10),
    })

    return (
        <InfoBox
            className="w-full h-full"
            title="Logs"
            description="since last month"
            icon={<Rss />}
        >
            <div className="absolute top-sm bottom-lg left-0 right-0 overflow-y-scroll ">
                {isLoadingLogs ? (
                    <p>Loading...</p>
                ) : (
                    logs?.map((log) => (
                        <ListElement
                            className="mb-sm"
                            key={log._id}
                            title={'From ' + log.device.deviceId}
                            description={atob(log.payload)}
                            footer={`${new Date(
                                parseInt(log.received)
                            ).toISOString()}`}
                        />
                    ))
                )}
            </div>
        </InfoBox>
    )
}
