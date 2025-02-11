import { SlidersHorizontal, Antenna, Rss, Telescope } from 'lucide-react'
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Button from '../components/Button'
import InfoBox from '../components/InfoBox'
import ListElement from '../components/ListElement'
import { useAppSelector } from '../hooks/redux'
import { useResults } from '../hooks/useResults'
import { useMemo } from 'react'

export default function HomePage() {
    const fromDate = useAppSelector((state) => state.filters.fromDate)
    const effectiveTheme = useAppSelector(
        (state) => state.settings.effectiveTheme
    )

    const { data: observations, isLoading } = useResults()
    const redlistedBirds = useMemo(
        () =>
            observations?.filter(
                (observation) => observation.value.isRedlisted
            ),
        [observations]
    )

    return (
        <div className="flex flex-col flex-1 w-full h-full gap-lg">
            <div className="flex items-center justify-between px-lg h-2xl w-full border-b-2 border-b-border-light dark:border-b-border-dark">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <div>
                    <Button
                        variant="outlined"
                        className="py-sm rounded-full flex gap-sm"
                    >
                        <SlidersHorizontal />
                        Options
                    </Button>
                </div>
            </div>
            <main className="flex flex-col flex-1 w-full h-full gap-lg pb-lg px-lg">
                {isLoading ? (
                    <div className="flex flex-1 justify-center items-center">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-1 gap-lg">
                            <InfoBox
                                className="flex-1"
                                title="Your devices"
                                value="37"
                                description="6 with low power"
                                icon={<Antenna />}
                            />
                            <InfoBox
                                className="flex-1"
                                title="Detections"
                                value={observations?.length.toString() ?? '-'}
                                description={
                                    fromDate !== undefined
                                        ? `since ${fromDate.toString()}`
                                        : 'in total'
                                }
                                icon={<Rss />}
                            />
                            <InfoBox
                                className="flex-1"
                                title="Rare bird observations"
                                value={redlistedBirds?.length.toString() ?? '-'}
                                description={
                                    fromDate !== undefined
                                        ? `since ${fromDate.toString()}`
                                        : 'in total'
                                }
                                icon={<Telescope />}
                            />
                        </div>
                        <div className="flex flex-4 gap-lg">
                            <div className="flex-3 rounded-sm overflow-hidden">
                                <MapContainer
                                    className="h-full w-full"
                                    center={[63.35, 10.7]}
                                    zoom={11}
                                    scrollWheelZoom={true}
                                >
                                    {effectiveTheme === 'dark' ? (
                                        <TileLayer
                                            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                                        />
                                    ) : (
                                        <TileLayer
                                            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                                        />
                                    )}
                                    {observations &&
                                        observations.map((observation) => (
                                            <Circle
                                                center={[
                                                    observation.latitude,
                                                    observation.longitude,
                                                ]}
                                                radius={200}
                                                pathOptions={{
                                                    color: observation.value
                                                        .isRedlisted
                                                        ? 'red'
                                                        : '#00ba32',
                                                }}
                                            >
                                                <Popup>
                                                    {observation.timestamp} -{' '}
                                                    {observation.value.name}
                                                </Popup>
                                            </Circle>
                                        ))}
                                </MapContainer>
                            </div>
                            <div className="flex-1">
                                <InfoBox
                                    className="w-full h-full"
                                    title="Logs"
                                    description="since last month"
                                    icon={<Rss />}
                                >
                                    <div className="absolute top-sm bottom-lg left-0 right-0 overflow-y-scroll flex flex-col gap-sm">
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                        <ListElement
                                            title="Element"
                                            description="This is an element"
                                        />
                                    </div>
                                </InfoBox>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}
