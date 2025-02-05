import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Sidebar from './components/Sidebar'
import InfoBox from './components/InfoBox'
import { Rss } from 'lucide-react'
import ListElement from './components/ListElement'

function App() {
    return (
        <div className=" text-text-primary-light dark:text-text-primary-dark w-dvw h-dvh flex bg-bg-light dark:bg-bg-dark">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full h-full gap-lg">
                <div className="flex items-center px-lg py-lg w-full border-b-2 border-b-border-light dark:border-b-border-dark">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <main className="flex flex-col flex-1 w-full h-full gap-lg pb-lg px-lg">
                    <div className="flex flex-1 gap-lg">
                        <InfoBox
                            className="flex-1"
                            title="Detections"
                            value="1,234"
                            description="since last month"
                            icon={<Rss />}
                        />
                        <InfoBox
                            className="flex-1"
                            title="Detections"
                            value="1,234"
                            description="since last month"
                            icon={<Rss />}
                        />
                        <InfoBox
                            className="flex-1"
                            title="Detections"
                            value="1,234"
                            description="since last month"
                            icon={<Rss />}
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
                                <TileLayer
                                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                                />
                            </MapContainer>
                        </div>
                        <div className="flex-1">
                            <InfoBox
                                className="w-full h-full"
                                title="Detections"
                                description="since last month"
                                icon={<Rss />}
                            >
                                <>
                                    <ListElement
                                        title="Element"
                                        description="This is an element"
                                    />
                                </>
                            </InfoBox>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
